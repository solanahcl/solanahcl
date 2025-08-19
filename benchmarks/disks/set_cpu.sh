#!/usr/bin/env bash

for gov in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
    echo performance | sudo tee "$gov" > /dev/null
done

echo "all cpus set to performance mode."

echo "verify"
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
