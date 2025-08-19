sysctl -w fs.file-max=2000000

echo "fs.file-max=2000000" > /etc/sysctl.d/99-fio-tuning.conf

sysctl -w fs.aio-max-nr=2097152

sysctl -w vm.swappiness=0

swapoff -a

cat <<EOF > /etc/security/limits.d/99-fio.conf
* soft nofile 200000
* hard nofile 200000
EOF
