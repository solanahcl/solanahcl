export const firedancerNotes = `Firedancer is a next-generation validator implementation. CPU recommendations are similar to Frankendancer, which is being retired with the Alpenglow activation, so new setups should target the full Firedancer client.

**NOTE:** Firedancer will not support the Alpenglow migration period. Fail over to an Agave node before the migration, then bring the Firedancer node back up and fail back once the migration is complete.

**Operator tips**
- **Filesystem:** on releases where the snapshot loader writes accounts with buffered I/O (v26.09 and earlier), XFS noticeably reduces writer load compared to ext4, which shortens startup when the snapshot source is fast. Newer releases write accounts with O_DIRECT, which largely removes that difference.
- **Disks:** accounts and ledger can share the same SSD and the same filesystem. If you have several drives, a RAID0 across them (for example mdadm with a 64K or 128K stripe and a single XFS filesystem on top) is preferable to dedicating one drive per mount.
- **Snapshot download:** min_download_speed_mibs is checked per batch, and the first batch also includes snapshot setup work, so it measures lower than the real transfer rate. Setting the floor too high can make Firedancer reject every source, so keep it conservative.
- **Snapshot decompression:** newer releases run several decompression tiles by default. Only raise [layout] snapdc_tile_count if decompression is the bottleneck during boot.
- **Accounts cache:** [accounts] cache_size_gib is pinned memory. It helps up to roughly 100 GiB; beyond that it brings little, and unallocated RAM is better left to the Linux page cache, which also serves the accounts database and the ledger.`;
