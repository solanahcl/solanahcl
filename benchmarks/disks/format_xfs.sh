#!/usr/bin/env bash
set -euo pipefail

DEVICE="/dev/nvme2n1"
PART="${DEVICE}p1"

if [[ $EUID -ne 0 ]]; then
  echo "must be run as root."
  exit 1
fi

echo "creating gpt label on $DEVICE"
parted -s "$DEVICE" mklabel gpt

echo "creating primary xfs partition (0% to 80%)"
parted -s -a optimal "$DEVICE" mkpart primary xfs 0% 80%

echo "formatting $PART as xfs"
mkfs.xfs -f "$PART"

echo "blkid for $PART"
blkid "$PART"

echo "done."
