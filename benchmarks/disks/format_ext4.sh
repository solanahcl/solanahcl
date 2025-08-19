#!/usr/bin/env bash
set -e

DEVICE="/dev/nvme0n1"
PART="${DEVICE}p1"

if [[ $EUID -ne 0 ]]; then
  echo "must be run as root."
  exit 1
fi

echo "creating gpt label on $DEVICE"
parted -s "$DEVICE" mklabel gpt

echo "creating primary ext4 partition (0% to 80%)"
parted -s -a optimal "$DEVICE" mkpart primary ext4 0% 80%

echo "formatting $PART as ext4"
mkfs.ext4 -F "$PART"

echo "blkid for $PART"
blkid "$PART"

echo "done."
