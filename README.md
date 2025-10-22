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
- 24 cores is the sweet spot for agave, as of 9/2025, frankendancer loves and utilizes more cores especially with revenue scheduler so 32/64 are more viable
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
| Yes         | **AMD**      | EPYC 9575F                    |   3.30 GHz |  Up to 4.50 GHz |    64 |     128 |       400 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9474F                    |   3.60 GHz |  Up to 4.10 GHz |    48 |      96 |       360 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9374F                    |   3.85 GHz |  Up to 4.30 GHz |    32 |      64 |       320 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9354P                    |   3.25 GHz |  Up to 3.80 GHz |    32 |      64 |       280 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9354                     |   3.25 GHz |  Up to 3.80 GHz |    32 |      64 |       280 W | Yes, default layout  | Not tested yet       |
| Yes         | **AMD**      | EPYC 9274F                    |   4.05 GHz |  Up to 4.30 GHz |    24 |      48 |       320 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 9254                     |   2.90 GHz |  Up to 4.15 GHz |    24 |      48 |       200 W | Yes, custom layout*  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 7742                     |   2.25 GHz |  Up to 3.40 GHz |    64 |     128 |       225 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | EPYC 7513                     |   2.60 GHz |  Up to 3.65 GHz |    32 |      64 |       200 W | Yes, default layout  | Not tested yet       |
| Yes         | **AMD**      | EPYC 74F3                     |   3.20 GHz |  Up to 4.00 GHz |    24 |      48 |       240 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | Ryzen Threadripper Pro 7975WX |   4.00 GHz |  Up to 5.30 GHz |    32 |      64 |       350 W | Yes, default layout  | Yes, default layout  |
| Yes         | **AMD**      | Ryzen Threadripper Pro 7965WX |   4.20 GHz |  Up to 5.30 GHz |    24 |      48 |       350 W | Yes, default layout  | Yes, default layout  |
| No          | **AMD**      | Ryzen 9 5900X                 |   3.70 GHz |  Up to 4.80 GHz |    12 |      24 |       105 W | Yes, custom layout*  | No                   |
| No          | **AMD**      | Ryzen 9 5950X                 |   3.40 GHz |  Up to 4.90 GHz |    16 |      32 |       105 W | Yes, default layout  | -                    |
| No          | **AMD**      | Ryzen 9 7950X                 |   4.50 GHz |  Up to 5.70 GHz |    16 |      32 |       170 W | Yes, default layout  | -                    |

\* Tested Testnet layout for Ryzen 9 5900X: one verify tile, one bank tile and agave affinity "auto"   
\* Per [Bored King](https://github.com/gabrielhicks) 9254 with [custom layout](https://gist.github.com/ferric-sol/07f511d3c3b6c45a1a4e392016c977f4) and [disable accounts index patch](https://discord.com/channels/@me/1366447066762449006/1385636501517242529)

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
| **Crucial**  | T710             | > 2 TB | Gen 5      |     14,500 MB/s |      13,800 MB/s | 2,200K IOPS |  2,300K IOPS |
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
| **3NV**            | [3NV](https://3nv.io/)

More here: [Marinade ISP list](https://app.marinade.finance/network/isps/?countries=&direction=descending&sorting=stake)

#### Notes to consider for renting:

- DO NOT USE **OVH**. They may have the widest server availability but also the poorest understanding of Solana's network needs. You will randomly get blackholed and support is absolutely useless.
- DO NOT USE **hetzner**. They may shut you down without notice.
- Check reviews on the Solana Discord for your specific provider.
- Ensure you are not running within a virtual machine (VM).
- Verify the speed and uplink of the provider; low latency is crucial.
- Ask the provider about the hardware specifications, focusing on higher RAM frequencies.
- Before using your validator, confirm that all hardware components are functioning as expected.

#### Free to test for beginners

Some providers offer a test phase before you commit to renting with them, often as a playground to explore running a Solana node. You can check the list, which we update frequently with new providers.

- [CherryServers](https://www.cherryservers.com/bare-metal-dedicated-servers)
- [DedicatedNodes](https://www.dedicatednodes.io/solana-nodes) - any of the instant servers
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

# Solana Validator Resources

## Migrating to Firedancer
- [solana_validator_set_identity_scripts](https://github.com/pzupan/solana_validator_set_identity_scripts)
- [Guide: How to Switch from Agave/Jito to Frankendancer (Staking Facilities)](https://stakingfacilities.com/blog/guide-how-to-switch-from-agave-jito-to-frankendancer)

## Validator Hotswap & Failover
- [SVS - Switch, Alert and Autofailover by huisky](https://github.com/huiskylabs/solana-validator-switch)
- [solana-validator-failover - QUIC p2p failovers by SOL Strategies](https://github.com/sol-strategies/solana-validator-failover)
- [Pumpkin's Pool Identity Switch & Keyless Operation](https://pumpkins-pool.gitbook.io/pumpkins-pool/keyless-operation)
- [Anza Guide - Setup Node Failover](https://docs.anza.xyz/operations/guides/validator-failover#triggering-a-failover-via-monitoring)

## Keeping Validators Updated
- [solana-validator-version-sync by SOL Strategies](https://github.com/SOL-Strategies/solana-validator-version-sync)

## Upcoming Leader Slots
- [MasDeFi Leader Schedule](https://masdefi.vercel.app/leaderSchedule)
- [validator-idle-time.sh by bji](https://github.com/bji/solana_tools/blob/master/validator-idle-time.sh)
- [next-leader/status.sh by 1000xsh](https://github.com/1000xsh/solana/blob/main/next-leader/status.sh)

## Skip Rate Investigation
- [lead-inspector](https://github.com/a3mc/lead-inspector)
- [solana-slot-bandits by 1000xsh](https://github.com/1000xsh/solana-slot-bandits)
- [Slot 72677728 Deep Dive - validators.app](https://www.validators.app/log-deep-dives/slot-72677728?locale=en&network=mainnet)
- [Prompt Logic Inspector](https://promptlogic.systems/inspect/search)

## Monitoring Tools
- [solanamonitoring by stakeconomy](https://github.com/stakeconomy/solanamonitoring/blob/main/README.md)
- [solana-exporter](https://github.com/asymmetric-research/solana-exporter)
- [solana-monitor-public by qskyhigh](https://github.com/qskyhigh/solana-monitor-public)

## Dashboards
- [validators.app](https://validators.app)
- [staking.kiwi](https://staking.kiwi)
- [svt.one](https://svt.one)
- [vx.tools](https://app.vx.tools)
- [xshin.fi - Validators](https://xshin.fi/#Validators)
- [Marinade Validator Network](https://app.marinade.finance/network/validators/)
- [Jito StakeNet](https://www.jito.network/stakenet/)
- [stakewiz.com](https://stakewiz.com)
- [1000x.sh Validators](https://1000x.sh/validators)

## Apps
- [Gate Omega - Solcircl](https://gateomega.com/solcircl/)


### Validator hardware list
- [sv-manager hardware list](https://solana.thevalidators.io/d/e-8yEOXMk/compare-validators?orgId=2&refresh=30s&var-cluster=mainnet-beta&var-server=666&var-server=01-02&var-server=01-02m&var-server=01-03m&var-server=01-04m&var-server=01-05m&var-server=01-06m&var-server=01-07m&var-server=321-let-er-rip&var-server=3960_ARCHER&var-server=8888e&var-server=8888s&var-server=%5BNODERS%5DTEAM&var-server=_gamma%20hot%20spare&var-server=AbV1&var-server=ADevRocket&var-server=ADevRocketMain&var-server=Adra%20fd&var-server=adra-braz-2&var-server=Adra_Brazil&var-server=adrastea&var-server=adrastea-mainnet&var-server=adrena-mainnet&var-server=adrena-mainnet-old&var-server=aero&var-server=AK-main&var-server=ak-main&var-server=ak-main-2&var-server=alarmMain&var-server=alb-test&var-server=ALE&var-server=aleksm&var-server=alex_s1&var-server=AlexSerg&var-server=AlexSerg2&var-server=Alfa&var-server=ams&var-server=ams-m&var-server=AMS-RPC&var-server=anderson-mainnet&var-server=AnMay-main&var-server=AnMay-main-2&var-server=Apomyk-main&var-server=Apomyk-main-2&var-server=applealeksold&var-server=ARCHER-VGT&var-server=ARCHER3970&var-server=ARCHERA&var-server=ARCHERI&var-server=ARCHERR&var-server=ARCHERSAM&var-server=ARCHERSAM2&var-server=ArcherSOLMainNET&var-server=ARCHERUSA&var-server=ARCHERUSA2&var-server=ARCHERV&var-server=art-mainnet&var-server=ash-temp-6&var-server=ash1&var-server=ash10&var-server=ash2&var-server=ash3&var-server=ash4&var-server=ash5&var-server=ash6&var-server=ash7&var-server=ash8&var-server=ash9&var-server=ashburn-backup&var-server=axolotl-mainnet&var-server=B--i&var-server=backup-tmp&var-server=backup-tyo&var-server=Bandito&var-server=Bandito%20Stake&var-server=Banx&var-server=banx-mainnet&var-server=bape-mainnet&var-server=Basel01&var-server=basistMain&var-server=bernardo-mainnet&var-server=berty-mainnet&var-server=berty-mainnet-old&var-server=BitticsNode&var-server=Blossom&var-server=Blossomm&var-server=blue-backup&var-server=blue-mainnet&var-server=blue-mainnet-lat&var-server=blue-mainnet-old&var-server=Bodiesm&var-server=bornslippyMain&var-server=bsktfi&var-server=bst-solana-prod-a&var-server=BUKA&var-server=bul&var-server=bulka&var-server=bx1_delegate&var-server=Bxr-ash&var-server=bxr-ash&var-server=Bxr-chi&var-server=bxr-fra&var-server=Bxr-fra2&var-server=bxr-fra2&var-server=bxr-nyc&var-server=CARA&var-server=CARAR&var-server=CARASAM&var-server=CARAV&var-server=CARRA&var-server=Celestial&var-server=cesa1&var-server=cesar&var-server=ch-dev-mainnet&var-server=Charity%20Soul&var-server=Charity-Soul&var-server=Charity-Soul-Backup&var-server=charity-soul-mainnet&var-server=Charity-Soul-Utah&var-server=CHEDDA&var-server=CHEDDA-B&var-server=chulokMain&var-server=citizen-mainnet&var-server=citizen-mainnet-old&var-server=citizen-node-mainnet&var-server=citizen-node-mainnet-backup&var-server=clayno-mainnet&var-server=coinmeca&var-server=Craftorium&var-server=cryptocat%20mainnet&var-server=Cryptocat-mainnet&var-server=CryptoStakePro&var-server=ct-mainnet&var-server=ct-mainnet-sg&var-server=ct-spare&var-server=ct-spare2&var-server=custom-mainnet&var-server=cyberA&var-server=CYBERI&var-server=cyberM&var-server=cyberS&var-server=d34de4w3&var-server=darko&var-server=Darvin&var-server=debian&var-server=decentra-sa&var-server=ded-mainnet&var-server=ded-mainnet-backup&var-server=ded-mainnet-old&var-server=degen-mainnet&var-server=degen-mainnet-old&var-server=Delegate-so-chi&var-server=dell-1-mainnet&var-server=dell-2-mainnet&var-server=dell-3-mainnet&var-server=dell-4-mainnet&var-server=dell-5-mainnet&var-server=dell-6-mainnet&var-server=dell-7-mainnet&var-server=dell-8-mainnet&var-server=depitch-academy-mainnet&var-server=dice-mainnet&var-server=dice-mainnet-backup&var-server=dicky-mainnet&var-server=Dim-main&var-server=dimak-mainnet&var-server=dimak-mainnet-d&var-server=dimak-mainnet-dd&var-server=dimak-mainnet-ddd&var-server=Dirizhable&var-server=Diver-mainnet&var-server=Diver-spare&var-server=DKS&var-server=dks-amsterdam&var-server=dks-amsterdam-test&var-server=DKS-failover&var-server=dks-firedancer&var-server=dks-frankfurt&var-server=dks-london&var-server=DMSE-mainnet&var-server=dota3Main&var-server=dust-mainnet&var-server=dust-mainnet-old&var-server=e23edd32&var-server=e32edwq3&var-server=EAaijviraKWCWsVZtiZ5thhXoyoB5RP3HH1ZiLeLDcuv&var-server=ed32ddf&var-server=ek-mainnet&var-server=elemental-mainnet&var-server=Emperor&var-server=emperor&var-server=EraNodeMain&var-server=ErastNodeMain&var-server=ero-m&var-server=ero-terra&var-server=ero-vel&var-server=erovel&var-server=eva&var-server=evaMain&var-server=Eyenotion&var-server=eyenotion-mainnet&var-server=F5&var-server=fairy-land&var-server=fairyland&var-server=farms-mainnet&var-server=fd-backup&var-server=fd-temp&var-server=fd_test_adra&var-server=firedancer-backup&var-server=foreverMain&var-server=fr&var-server=fra-backup-29&var-server=fra-backup-30&var-server=fra-temp-1&var-server=fra2-backup-104&var-server=fra2-backup-69&var-server=fra2-backup-96&var-server=fra2-temp-2&var-server=fra2-temp-3&var-server=fra2-temp-4&var-server=franer&var-server=fraybeMain&var-server=fw4few4&var-server=garik-9950&var-server=garik-mainnet&var-server=garik-viking&var-server=GE&var-server=Geanu&var-server=german-mainnet&var-server=german-mainnet-2&var-server=germany-backup&var-server=germany-mainnet-2&var-server=germany3&var-server=germany4&var-server=germany5&var-server=germany6&var-server=gipnodansMain&var-server=gleam-mainnet&var-server=gleam-mainnet-backup&var-server=gleam-mainnet-old&var-server=GOLOVM&var-server=GOOSE-VGT&var-server=GOOSEA&var-server=GOOSEG&var-server=GOOSER&var-server=GOOSESAM&var-server=GOOSEV&var-server=grand-dev.sol&var-server=green-m&var-server=green-m2&var-server=green-r2&var-server=guides-main&var-server=guides-mainnet&var-server=guides-mainnet-backup&var-server=guides-mainnet-old&var-server=hnh-mainnet&var-server=hodl-mainnet&var-server=HOHLA&var-server=Hohla&var-server=host&var-server=HotRezerv&var-server=HRZ-RPC&var-server=hylo-mainnet&var-server=hylo-mainnet-old&var-server=i-d&var-server=ibb-mclub&var-server=Ind-main&var-server=Ind-main-2&var-server=Ind-main-4&var-server=ivan&var-server=iX&var-server=jade-mainnet&var-server=jag-mx&var-server=jaguar&var-server=jaguar-hotswap&var-server=janitor-mainnet&var-server=jbackup&var-server=jLbey%20J.O.S.S.&var-server=joogh-mainnet&var-server=joogh-mainnet-hetzne&var-server=joogh-mainnet-hetzner&var-server=joogh-mainnet-hetzner_n&var-server=joogh-mainnet-latitude-update&var-server=joogh-new&var-server=joogh-spare&var-server=Jopa&var-server=jp&var-server=jrezerv&var-server=kerakMrez&var-server=kisetsu-mainnet&var-server=kisetsu-mainnet-old&var-server=kisetsu-mainnet2&var-server=kisslovefun&var-server=KISSR&var-server=KISSSAM&var-server=kiwi&var-server=klfchica&var-server=kostik&var-server=Kudesnic&var-server=Kyzzen&var-server=la-m&var-server=labasMain&var-server=lamport&var-server=lat-chi&var-server=Lat-mia&var-server=lat-nyc&var-server=latam-snapshots&var-server=Latitude.sh_chi&var-server=Latitude.sh_mia&var-server=lilypad-mainnet&var-server=lk-mainnet&var-server=lk-spare&var-server=lololo&var-server=lon2-backup-b13&var-server=lon2-backup-b15&var-server=lon2-backup-b19&var-server=london-backup&var-server=london-backup-2&var-server=london-mainnet&var-server=LosBanditos&var-server=love-mainnet&var-server=love-mainnet-old&var-server=lt&var-server=luanna-mainnet&var-server=macma&var-server=magic-mainnet&var-server=MAINfamousSOLNet&var-server=marisarze3main&var-server=masa&var-server=masa-new&var-server=mason&var-server=mason-2&var-server=meAnn&var-server=meann&var-server=meAnn1&var-server=meAnn11&var-server=meAnn2&var-server=meAnn3&var-server=meAnn33&var-server=Meissa&var-server=MeissaR&var-server=meme32Main&var-server=mex2-backup&var-server=meyerbro-hot-spare&var-server=meyerbro-mainnet&var-server=MH53-G40-7975WX&var-server=miami-backup&var-server=mice-mainnet&var-server=MMGuru&var-server=mmguru-new&var-server=moninorkaMain&var-server=MonkeDAO-Alpha&var-server=MonkeDAO-Mainnet&var-server=MonkeDAO-MN&var-server=mySOLport&var-server=mySOLport-mainnet&var-server=mythx-mainnet&var-server=mythx-mainnet-fra2&var-server=mythx-mainnet-old&var-server=namaste-main&var-server=namaste-main-backup&var-server=NannyNode&var-server=Nannynode&var-server=nate-mainnet&var-server=nate-mainnet-ash&var-server=Nautilus%20Rezerv&var-server=Nautilus-2&var-server=Nautilus-2025&var-server=Nautilus-Jito&var-server=Nautilus-mainnet&var-server=Nautilus-New&var-server=nautilus-spare&var-server=neverbackdown&var-server=newsol&var-server=NextGenMain&var-server=NFTSOLMAIN&var-server=Nikita-pusher-main&var-server=Nikita-pusher-main-2&var-server=Nikita-pusher-main-3&var-server=Nikita-pusher-main-4&var-server=Nikita-pusher-main2&var-server=Nikita-pusher-main3&var-server=nikksMain&var-server=NodeSolElikaNET&var-server=NOR&var-server=not_a_potato&var-server=nova-mainnet&var-server=nyc-backup&var-server=odyssey-chile&var-server=odyssey-mainnet&var-server=odyssey-sa&var-server=Old-Ben&var-server=old-raposa-mainnet&var-server=papa&var-server=papenoo&var-server=para-mainnet&var-server=para-mainnet-old&var-server=perf-test&var-server=Phase%20Labs&var-server=phase-mainnet&var-server=phase-mainnet-old&var-server=phase-mainnet-singapore&var-server=PhaseLabs&var-server=poppers&var-server=portals-mainnet&var-server=Project-Super&var-server=psixozen&var-server=Puerta&var-server=PuertaR&var-server=pupuMain&var-server=qe32eqe3&var-server=QUERPC01&var-server=Radiants&var-server=radiants-mainnet&var-server=radiants-old&var-server=radiants-singapore&var-server=raposa-mainnet&var-server=raposa-mainnet-backup&var-server=reap-mainnet&var-server=rebusMain&var-server=RocketSOLMain&var-server=romanh&var-server=romanh1&var-server=rossi-mainnet&var-server=rossi-spare&var-server=rossi-spare-2&var-server=royal-mainnet&var-server=RPC&var-server=RPC-S1&var-server=RPC-test&var-server=rpc-wired-crane&var-server=RRRM&var-server=RRRM2&var-server=RRUSH&var-server=RSSA&var-server=RSSAI&var-server=RSSAKM&var-server=RSSAR&var-server=RSSASAM&var-server=RSSAV&var-server=rsv-2&var-server=rugcity-002-mainnet&var-server=rugcity-mainnet&var-server=rugcity-mainnet-fd&var-server=rugcity-mainnet-lon&var-server=rune&var-server=RUSHA&var-server=RUSHAA&var-server=RUSHR&var-server=RUSHSAM&var-server=RUSHV&var-server=RUSHVGT&var-server=rust_one_loveMain&var-server=S&var-server=s-a_m&var-server=s2ds23&var-server=SA%20Adra&var-server=SA-Adra-2&var-server=SA2_Main&var-server=SA_NL_2_Main&var-server=SA_NL_Main&var-server=saas-m&var-server=saas-m2&var-server=saas-r&var-server=saga-mainnet&var-server=SAM&var-server=sao2-backup&var-server=sao2-backup-2&var-server=sashamaxymchuk&var-server=SASM&var-server=SBG-main&var-server=SBG-main-new&var-server=SBG-rezerv&var-server=SBG-testrezerv&var-server=SBG_main&var-server=SBG_rezerv&var-server=SergAlex_main&var-server=server1&var-server=SFDPTDS24&var-server=SFR&var-server=SFR-V&var-server=SGR-VGT&var-server=ShadowMain&var-server=SHK&var-server=SHK-R&var-server=SHK-V&var-server=SHM&var-server=SilA&var-server=SilA1&var-server=skillMain&var-server=smoke26_k&var-server=smoke26_m&var-server=smoke26_mm&var-server=sol5&var-server=sol6&var-server=SOLA2STA&var-server=Solana-Portugal&var-server=solana-staking-fra-mainnet&var-server=solana-staking-lon2&var-server=SolanaFDNET&var-server=SolanaRabekMainNET&var-server=SOLARCHER&var-server=SolarSolanaMAIN&var-server=SoLiD&var-server=solid-mainnet&var-server=SOLTAA&var-server=somos-mainnet&var-server=somos-mainnet-brazil&var-server=somos-miami&var-server=somos-temp&var-server=sotr-r&var-server=spare&var-server=spaw&var-server=SPDR&var-server=SPDRb&var-server=SPDRch&var-server=SPDRch-mainnet&var-server=STA-VGT&var-server=Stache-Node&var-server=stachenode-hotswap&var-server=StacheRipper&var-server=stakecity-mainnet&var-server=STAM&var-server=STARR&var-server=stars&var-server=STASAM&var-server=STAUSA2&var-server=STAV&var-server=steve-mainnet&var-server=stpaw&var-server=super-m1-mainnet&var-server=super-m2-mainnet&var-server=surf-mainnet&var-server=suzuko-mainnet&var-server=suzuko-mainnet-temp&var-server=suzuko-stake&var-server=suzuko-stake-backup&var-server=suzuko-stake-miami&var-server=suzuko-stake-nyc&var-server=svit_validator&var-server=swe&var-server=SwedenMain&var-server=T-main&var-server=T-main-2&var-server=T-main-3&var-server=telemetry-mainnet&var-server=telemetry-mainnet-old&var-server=temp-london&var-server=Test&var-server=test&var-server=test-hetzner&var-server=test-rug-fd&var-server=theBest&var-server=theBest1&var-server=theBest2&var-server=Tip-Adra&var-server=Tip-router-test&var-server=tokamai&var-server=tokamai-fd&var-server=tokamai-mainnet&var-server=tsm042024&var-server=tswmainagave1&var-server=tttt&var-server=Unknown%20Soldier&var-server=UZB&var-server=UZB%20Validator-reserve&var-server=UZBVAL-DE&var-server=UZBVAL-OSLO&var-server=UZBValidator&var-server=UZBValidatorLA&var-server=UZBValidatorOG&var-server=Vah-main&var-server=Vah-main-2&var-server=Vah-main-3&var-server=VALERA&var-server=Valera&var-server=ValidatorMAINSolana&var-server=vandal-mainnet&var-server=vandal-mainnet-old&var-server=Vanguard-mainnet&var-server=Vanguard-spare&var-server=vasya&var-server=vb-home1&var-server=vb-home2&var-server=vb-home3&var-server=vel-9555&var-server=vel-mac&var-server=verafy-mainnet&var-server=vmx&var-server=WAMainSOL&var-server=windows311Main&var-server=WRX90E-7965WX&var-server=Xen-main&var-server=XOR&var-server=xura&var-server=xura-r&var-server=xXx%20with%20%E2%93%BF%25%20fee%20%2B%20%F0%9F%92%AF%25%20Jito%20MEV%20rewards!&var-server=yaronode&var-server=yellow-mainnet&var-server=yellow-mainnet-old&var-server=yerevanMain&var-server=yuliya&var-server=zebraMain&var-server=ZEROMAX&var-server=ZEROMAX-LA&var-server=ZEROMAX-OG&var-server=ZEROMAX-OSLO&var-server=Zhenia_trmp&var-server=zhuzheMain&var-server=ZRM&var-server=ZRMX-DE&var-server=zubr&var-server=zzyzx&var-server=zzyzx_mainx)

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
