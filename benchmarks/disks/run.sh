#!/usr/bin/env bash
set -euo pipefail

FILES=(
  accounts_ext4.fio
  accounts_xfs.fio
  ledger_ext4.fio
  ledger_xfs.fio
  snapshots_ext4.fio
  snapshots_xfs.fio
)

RESULT_DIR=${1:-/root/benches/results}
SUFFIX=_simple_lb_format_0_4096.json

mkdir -p "$RESULT_DIR"

clean_mounts() {
  for d in /mnt/ext /mnt/xfs; do
    if compgen -G "$d/*" > /dev/null; then
      echo "cleaning contents of $d"
      rm -rf -- "$d"/*
    else
      echo "no files to clean in $d"
    fi
  done
}

for fiofile in "${FILES[@]}"; do
  if [[ ! -f "$fiofile" ]]; then
    echo "warning: '$fiofile' not found, skipping." >&2
    continue
  fi

  base=${fiofile%.fio}  # strip .fio extension
  output="$RESULT_DIR/${base}${SUFFIX}"

  echo "===== fio job: $fiofile ====="
  echo "output -> $output"
  if ! fio "$fiofile" --output="$output" --output-format=json; then
    echo "error: fio job '$fiofile' failed; aborting." >&2
    exit 1
  fi
  echo "completed $fiofile"

  # cleanup after each successful job
  clean_mounts
done

echo "all requested fio jobs finished."
