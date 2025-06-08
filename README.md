This is the Solana Hardware Compatibility List for running a mainnet validator.

- [Baseline Hardware](#baseline-hardware)
- [Recommended Hardware](#recommended-hardware)
  - [CPU](#cpu)
    - [Agave CPU](#agave-cpu)
    - [Frankendancer CPU](#frankendancer-cpu)
  - [Storage](#storage)
  - [Swap](#swap)
- [Datacenter Providers](#datacenter-providers)
- [FAQ](#faq)
- [Resources](#resources)
- [Contributors](#contributors)


## Baseline Hardware

Source: [https://docs.anza.xyz/operations/requirements](https://docs.anza.xyz/operations/requirements)

| Component | Validator Requirements | Additional RPC Node Requirements |
|-----------|------------------------|----------------------------------|
| **CPU**   | - 2.8GHz base clock speed, or faster<br />- SHA extensions instruction support<br />- AMD Gen 3 or newer<br />- Intel Ice Lake or newer<br />- Higher clock speed is preferable over more cores<br />- AVX2 instruction support (to use official release binaries, self-compile otherwise)<br />- Support for AVX512f is helpful | |
|           | 12 cores / 24 threads, or more | 16 cores / 32 threads, or more |
| **RAM**   | Error Correction Code (ECC) memory is suggested<br />Motherboard with 512GB capacity suggested | |
|           | 256GB or more | 512 GB or more for **all [account indexes](https://docs.solanalabs.com/operations/setup-an-rpc-node#account-indexing)** |
| **Disk**  | PCIe Gen3 x4 NVME SSD, or better, on each of:<br />- **Accounts**: 500GB, or larger. High TBW (Total Bytes Written)<br />- **Ledger**: 1TB or larger. High TBW suggested<br />- **Snapshots**: 250GB or larger. High TBW suggested<br />- **OS**: (Optional) 500GB, or larger. SATA OK<br /><br />The OS may be installed on the ledger disk, though testing has shown better performance with the ledger on its own disk<br /><br />Accounts and ledger *can* be stored on the same disk, however due to high IOPS, this is not recommended<br /><br />The Samsung 970 and 980 Pro series SSDs are popular with the validator community | Consider a larger ledger disk if longer transaction history is required<br /><br />Accounts and ledger **should not** be stored on the same disk |
| **GPUs**  | Not necessary at this time<br />Operators in the validator community do not use GPUs currently | |

## Recommended Hardware

### CPU
#### Agave CPU

AMD is the CPU maker of choice when it comes to running Solana validators. Running Intel processors for a new validator is **strongly discouraged**. Intel Xeon Gold/Platinum (6[45]xx) are the only ones known to be able to possibly keep up with the chain.


**NOTE**: This list is not exhaustive, just a selection of CPUs different folks on the discord have run or are currently running. 
- 24 cores is the sweet spot, as of 10/2024, 
- 12/16 cores will most likely struggle, and
- more than 32 cores will have a slower base clock speed due to TDP issues (32 cores would possibly be more future proof).

The recommendations also apply to RPC nodes, but RPC nodes require more cores and RAM than validators to perform sufficiently under load. RPC node operators should therefore aim for a slightly higher core count than validator operators.

| Recommended | Manufacturer | Model                         | Base Clock | Max Boost Clock | Cores | Threads | Default TDP | PoH speed *  |
|-------------|--------------|-------------------------------|-----------:|----------------:|------:|--------:|------------:|--------------|
| Yes         | **AMD**      | Ryzen Threadripper PRO 7965WX |   4.20 GHz |  Up to 5.30 GHz |    24 |      48 |       350 W | 22.2M, 20.4M |
| Yes         | **AMD**      | EPYC 9274F                    |   4.05 GHz |  Up to 4.30 GHz |    24 |      48 |       320 W | 18.1M        |
| Yes         | **AMD**      | Ryzen Threadripper PRO 7975WX |   4.00 GHz |  Up to 5.30 GHz |    32 |      64 |       350 W |              |
| Yes         | **AMD**      | Ryzen Threadripper PRO 7985WX |   3.20 GHz |  Up to 5.10 GHz |    64 |     128 |       350 W |              |
| Yes         | **AMD**      | EPYC 9374F                    |   3.85 GHz |  Up to 4.30 GHz |    32 |      64 |       320 W | 18.2M        |
| Yes         | **AMD**      | EPYC 9375F                    |   3.80 GHz |  Up to 4.80 GHz |    32 |      64 |       320 W |              |
| Yes         | **AMD**      | EPYC 9275F                    |   4.10 GHz |  Up to 4.80 GHz |    24 |      48 |       320 W | 19.3M        |
| Yes         | **AMD**      | Ryzen Threadripper 7960X      |   4.20 GHz |  Up to 5.30 GHz |    24 |      48 |       350 W | 20.6M, 19.9M |
| Yes         | **AMD**      | Ryzen 9 7950X                 |   4.50 GHz |  Up to 5.70 GHz |    16 |      32 |       170 W | 22.4M        |
| Yes         | **AMD**      | Ryzen 9 9950X                 |   4.30 GHz |  Up to 5.70 GHz |    16 |      32 |       170 W | 23M          |
| Yes         | **AMD**      | EPYC 9254                     |   2.90 GHz |  Up to 4.15 GHz |    24 |      48 |       200 W | 17.5M        |
| Yes         | **AMD**      | EPYC 9354P                    |   3.25 GHz |  Up to 3.80 GHz |    32 |      64 |       280 W | 16.1M, 14.4M |

\* The CPU should be capable of at least 10M hashes/sec. Results based on governor set at performance mode.

Source:
- [AMD Server Processors](https://www.amd.com/en/products/specifications/server-processor.html)
- [AMD Workstation Processors](https://www.amd.com/en/products/specifications/processors.html)

#### Frankendancer CPU

For Frankendancer its beneficial to have Simultaneous Multi-Threading (SMT) enabled.
With each CPU it was tested if its possible to catch up with a non-voting node, while SMT was enabled.

| Recommended | Manufacturer | Model                         | Base Clock | Max Boost Clock | Cores | Threads | Default TDP | Caught up in Testnet | Caught up in Mainnet |
|-------------|--------------|-------------------------------|-----------:|----------------:|------:|--------:|------------:|----------------------|----------------------|
| Yes         | **AMD**      | EPYC 9474F                    |   3.60 GHz |  Up to 4.10 GHz |    48 |      96 |       360 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9374F                    |   3.85 GHz |  Up to 4.30 GHz |    32 |      64 |       320 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9354P                    |   3.25 GHz |  Up to 3.80 GHz |    32 |      64 |       280 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9354                     |   3.25 GHz |  Up to 3.80 GHz |    32 |      64 |       280 W | Yes, default layout  | Not tested yet       |
| Yes         | **AMD**      | EPYC 9274F                    |   4.05 GHz |  Up to 4.30 GHz |    24 |      48 |       320 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9254                     |   2.90 GHz |  Up to 4.15 GHz |    24 |      48 |       200 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 7742                     |   2.25 GHz |  Up to 3.40 GHz |    64 |     128 |       225 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 7513                     |   2.60 GHz |  Up to 3.65 GHz |    32 |      64 |       200 W | Yes, default layout  | Not tested yet       |
| Yes         | **AMD**      | EPYC 74F3                     |   3.20 GHz |  Up to 4.00 GHz |    24 |      48 |       240 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | Ryzen Threadripper Pro 7965WX |   4.20 GHz |  Up to 5.30 GHz |    24 |      48 |       350 W | Yes, default layout  | Yes, default layout  |
| No          | **AMD**      | Ryzen 9 5900X                 |   3.70 GHz |  Up to 4.80 GHz |    12 |      24 |       105 W | Yes, custom layout*  | No                   |
| No          | **AMD**      | Ryzen 9 5950X                 |   3.40 GHz |  Up to 4.90 GHz |    16 |      32 |       105 W | Yes, default layout  | -                    |
| No          | **AMD**      | Ryzen 9 7950X                 |   4.50 GHz |  Up to 5.70 GHz |    16 |      32 |       170 W | Yes, default layout  | -                    |

\* Tested Testnet layout for Ryzen 9 5900X: one verify tile, one bank tile and agave affinity "auto"   

### Storage

Drives are mainly recommended based on performance figures from the manufacturer. All tables are sorted by the claimed random write performance (IOPS), as this is an essential property for Solana validators.

#### **Enterprise gen 5 (PCIe 5.0)**

| Manufacturer | Model     |    Size | Sequential Read | Sequential Write | Random Read | Random Write |
|--------------|-----------|--------:|----------------:|-----------------:|------------:|-------------:|
| **Phison**   | X200E     | 6.40 TB |     14,800 MB/s |       8,700 MB/s | 3,200K IOPS |    880K IOPS |
| **Solidigm** | D7-PS1030 | 6.40 TB |     14,500 MB/s |      10,000 MB/s | 3,000K IOPS |    800K IOPS |
| **SanDisk**  | SN861     | 6.40 TB |     13,700 MB/s |       7,500 MB/s | 3,300K IOPS |    800K IOPS |
| **Phison**   | X200E     | 3.20 TB |     14,800 MB/s |       8,600 MB/s | 3,300K IOPS |    790K IOPS |
| **Solidigm** | D7-PS1030 | 3.20 TB |     14,500 MB/s |       8,200 MB/s | 3,100K IOPS |    716K IOPS |
| **SanDisk**  | SN861     | 3.20 TB |     13,700 MB/s |       7,200 MB/s | 3,300K IOPS |    665K IOPS |
| **Micron**   | 9550 MAX  | 6.40 TB |     14,000 MB/s |      10,000 MB/s | 3,300K IOPS |    640K IOPS |
| **Kioxia**   | CM7-V     | 3.20 TB |     14,000 MB/s |       6,750 MB/s | 2,700K IOPS |    600K IOPS |
| **Kioxia**   | CM7-V     | 6.40 TB |     14,000 MB/s |       6,750 MB/s | 2,450K IOPS |    550K IOPS |
| **Micron**   | 9550 MAX  | 3.20 TB |     14,000 MB/s |       6,000 MB/s | 3,000K IOPS |    540K IOPS |
| **SanDisk**  | SN861     | 7.68 TB |     13,700 MB/s |       7,500 MB/s | 3,300K IOPS |    430K IOPS |
| **Solidigm** | D7-PS1010 | 7.68 TB |     14,500 MB/s |      10,000 MB/s | 3,000K IOPS |    400K IOPS |
| **Kioxia**   | CD8P-V    | 3.20 TB |     12,000 MB/s |       5,500 MB/s | 1,900K IOPS |    400K IOPS |
| **Kioxia**   | CD8P-V    | 6.40 TB |     12,000 MB/s |       5,500 MB/s | 2,000K IOPS |    400K IOPS |
| **Phison**   | X200P     | 7.68 TB |     14,800 MB/s |       8,700 MB/s | 3,200K IOPS |    390K IOPS |
| **Micron**   | 9550 PRO  | 7.68 TB |     14,000 MB/s |      10,000 MB/s | 3,300K IOPS |    380K IOPS |
| **SanDisk**  | SN861     | 3.84 TB |     13,700 MB/s |       7,200 MB/s | 3,300K IOPS |    330K IOPS |
| **Phison**   | X200P     | 3.84 TB |     14,800 MB/s |       8,600 MB/s | 3,300K IOPS |    320K IOPS |
| **Solidigm** | D7-PS1010 | 3.84 TB |     14,500 MB/s |       8,200 MB/s | 3,100K IOPS |    315K IOPS |
| **Kioxia**   | CM7-R     | 3.84 TB |     14,000 MB/s |       6,750 MB/s | 2,700K IOPS |    310K IOPS |
| **Micron**   | 9550 PRO  | 3.84 TB |     14,000 MB/s |       6,000 MB/s | 3,000K IOPS |    300K IOPS |
| **Kioxia**   | CM7-R     | 7.68 TB |     14,000 MB/s |       6,750 MB/s | 2,450K IOPS |    300K IOPS |
| **Samsung**  | PM1743    | 7.68 TB |     14,000 MB/s |       6,000 MB/s | 2,500K IOPS |    300K IOPS |
| **Samsung**  | PM1743    | 3.84 TB |     14,000 MB/s |       6,000 MB/s | 2,500K IOPS |    280K IOPS |

#### **Enterprise gen 4 (PCIe 4.0)**

| Manufacturer   | Model  |    Size | Sequential Read | Sequential Write | Random Read | Random Write |
|----------------|--------|--------:|----------------:|-----------------:|------------:|-------------:|
| **Samsung**    | PM9A1  | 2.00 TB |      7,000 MB/s |       5,200 MB/s | 1,000K IOPS |    850K IOPS |
| **Micron**     | 7450   | 3.84 TB |      6,800 MB/s |       5,300 MB/s | 1,500K IOPS |    550K IOPS |
| **Samsung**    | PM9A3  | 3.84 TB |      6,900 MB/s |       4,100 MB/s | 1,000K IOPS |    180K IOPS |
| **Samsung**    | PM9A3  | 1.92 TB |      6,800 MB/s |       2,700 MB/s |   850K IOPS |    130K IOPS |

**NOTE:** There have been a few reports of Kioxia's being unreliable on the discord, so proceed with caution.

#### **Consumer**

Consumer drives are less suitable for Solana validators, because they are designed for lighter workloads and have lower write endurance compared to enterprise drives. Minimum 2 TB per drive is recommended. Larger drives offer increased write endurance, which is crucial for handling the intensive read/write operations of Solana validators.

| Manufacturer | Model            |   Size | Generation | Sequential Read | Sequential Write | Random Read | Random Write |
|--------------|------------------|-------:|------------|----------------:|-----------------:|------------:|-------------:|
| **Samsung**  | 9100 PRO         | > 2 TB | Gen 5      |     14,700 MB/s |      13,400 MB/s | 1,850K IOPS |  2,600K IOPS |
| **SanDisk**  | WD_BLACK SN8100  | > 2 TB | Gen 5      |     14,900 MB/s |      14,000 MB/s | 2,300K IOPS |  2,400K IOPS |
| **Kingston** | FURY Renegade G5 | > 2 TB | Gen 5      |     14,700 MB/s |      14,000 MB/s | 2,200K IOPS |  2,200K IOPS |
| **Micron**   | 4600             | > 2 TB | Gen 5      |     14,500 MB/s |      12,000 MB/s | 2,100K IOPS |  2,100K IOPS |
| **Crucial**  | T705             | > 2 TB | Gen 5      |     14,500 MB/s |      12,700 MB/s | 1,550K IOPS |  1,800K IOPS |
| **Seagate**  | FireCuda 540     | > 2 TB | Gen 5      |     10,000 MB/s |      10,000 MB/s | 1,490K IOPS |  1,500K IOPS |
| **SanDisk**  | WD_BLACK SN850X  | > 2 TB | Gen 4      |      7,300 MB/s |       6,600 MB/s | 1,200K IOPS |  1,000K IOPS |
| **Samsung**  | 980 Pro          | > 2 TB | Gen 4      |      7,000 MB/s |       5,100 MB/s | 1,000K IOPS |  1,000K IOPS |

**NOTE:** The Samsung 990 PRO has been reported to have severe endurance issues, and is therefore not recommended.

## Swap
Running swap files is **highly discouraged** since it masks problems with your setup and will lead to negative consequences as chain activity increases.

## Datacenter Providers

| Provider           | Link                                                        
|--------------------|----------------------------------------------------------------------
| **Latitude**       | [Latitude](https://latitude.sh)                             
| **Edgevana**       | [Edgevana](https://srv.edgevana.com/solana-validator-servers)
| **Teraswitch**     | [Teraswitch](https://teraswitch.com/bare-metal/)           
| **Vultr**          | [Vultr](https://www.vultr.com/pricing/#bare-metal)         
| **Cherry**         | [Cherry](https://www.cherryservers.com/bare-metal-dedicated-servers)
| **DedicatedNodes** | [DedicatedNodes](https://www.dedicatednodes.io/solana-nodes/)
| **Allnodes**       | [Allnodes](https://www.allnodes.com/hosting)

More here: [Marinade ISP list](https://app.marinade.finance/network/isps/?countries=&direction=descending&sorting=stake)

#### Notes to consider for renting:

- DO NOT USE **OVH**. They may have the widest server availability but also the poorest understanding of Solana's network needs. You will randomly get blackholed and support is absolutely useless.
- Check reviews on the Solana Discord for your specific provider.
- Ensure you are not running within a virtual machine (VM).
- Verify the speed and uplink of the provider; low latency is crucial.
- Ask the provider about the hardware specifications, focusing on higher RAM frequencies.
- Before using your validator, confirm that all hardware components are functioning as expected.

#### Free to test for beginners

Some providers offer a test phase before you commit to renting with them, often as a playground to explore running a Solana node. You can check the list, which we update frequently with new providers.

- [CherryServers](https://www.cherryservers.com/bare-metal-dedicated-servers)
---

### Notes

- **CPU Selection:** Prioritize CPUs with higher base clock speeds to meet Solana validator performance requirements. Ensure the selected CPU supports at least AVX2 instructions, with AVX-512 providing additional performance benefits. The AMD Ryzen Threadripper PRO and AMD EPYC series listed above are optimized for high-performance and multi-threaded tasks essential for validator operations.

- **Storage Selection:** Choose NVMe SSDs that offer high IOPS to handle the intensive read/write operations necessary for validator nodes.

- **Memory Considerations:** While not part of the table, remember that **RAM** requirements are crucial. Ensure you have ECC memory and sufficient capacity as per the [Hardware Recommendations](#recommended-hardware) section. RAM **speed** and DDR4 vs DDR5 are not known to make any significant differences

Feel free to reach out if you need further assistance or more detailed specifications!

## FAQ

Q: My validator doesn't catch up, catches up slowly or does not keep up with the tip. Why?

A: If you've followed the [setup instructions](https://docs.solanalabs.com/operations/setup-a-validator) correctly, make sure to:
  (via [ax on discord](https://discord.com/channels/428295358100013066/1187805174803210341/1288757805062553600))

  i would like to suggest using the acronym "core" when beginners are asking for help, because its always the same question with same answers. it helps to break down the steps and make the guidance easier to follow:
- c: check cpu performance (focus on single-thread speeds)
- o: optimize nvme by separating ledger and accounts
- r: remove unnecessary cli arguments
- e: enable performance mode 

### Enable performance mode

```sudo apt install cpufrequtils```

```sudo bash -c 'echo performance > /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor'```

## Resources
- [Useful links to tools for validators](https://gist.github.com/ferric-sol/451fbb55e34d1df04c0dcc7556f95cb6)

## Contributors

- [ferric](https://x.com/ferric) / [StakeWare](https://stakeware.xyz)
- [ax](https://x.com/ax_1000x) / [1000x.sh](https://1000x.sh)
- [Matthias](https://x.com/StakingMatthias) / [Staking Facilities](https://stakingfacilities.com/)
- [Andrebo](https://github.com/agjell/sol-tutorials/) / [Nordstar](https://nordstar.one/)


### Inspired by
- [Zan](https://x.com/shinobisystems) / [Shinobi Systems](https://www.shinobi-systems.com/)
- [/dev/null](https://x.com/pumpkinspool) / [Pumpkins Pool](https://pumpkinspool.eco/)
- [meyerbro](https://meyerbro-validator.github.io/)
- [7layer](https://x.com/7LayerMagik) / [Overclock](https://overclock.one)
- [dhruvsol](https://x.com/_dhruvsol) / [Ice staking](https://www.cubik.so/)
- [Tim Garcia](https://x.com/TimGarcia0) / [Solana Fndn](https://solana.org)
- Everyone else on [#validator-hw-tuning](https://discord.com/channels/428295358100013066/811317327609856081)
