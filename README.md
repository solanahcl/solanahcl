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
- 12/16cores will most likely struggle and,
- more than 32 cores will have a slower base clock speed due to TDP issues (32 cores would possibly be more future proof)

| Recommended  | Manufacturer | Model                              | Base Clock | Max Boost Clock | Cores | Threads | Default TDP | PoH speed *   |
|--------------|--------------|------------------------------------|------------|-----------------|-------|---------|-------------|---------------|
| Yes          | **AMD**      | Ryzen™ Threadripper™ PRO 7965WX    | 4.2 GHz    | Up to 5.3 GHz   | 24    | 48      | 350W        | 22.2M, 20.4M  |
| Yes          | **AMD**      | AMD EPYC™ 9274F                    | 4.05 GHz   | Up to 4.3 GHz   | 24    | 48      | 320W        | 18.1M         |
| Yes          | **AMD**      | Ryzen™ Threadripper™ PRO 7975WX    | 4.0 GHz    | Up to 5.3 GHz   | 32    | 64      | 350W        |               |
| Yes          | **AMD**      | Ryzen™ Threadripper™ PRO 7985WX    | 3.2 GHz    | Up to 5.1 GHz   | 64    | 128     | 350W        |               |
| Yes          | **AMD**      | AMD EPYC™ 9374F                    | 3.85 GHz   | Up to 4.3 GHz   | 32    | 64      | 320W        | 18.2M         |
| Yes          | **AMD**      | AMD EPYC™ 9375F                    | 3.8 GHz    | Up to 4.8 GHz   | 32    | 64      | 320W        |               |
| Yes          | **AMD**      | AMD EPYC™ 9275F                    | 4.1 GHz    | Up to 4.8 GHz   | 24    | 48      | 320W        |               |
| Yes          | **AMD**      | Ryzen™ Threadripper™ 7960X         | 4.2 GHz    | Up to 5.3 GHz   | 24    | 48      | 350W        | 20.6M, 19.9M  |
| Yes          | **AMD**      | Ryzen 9 7950x                      | 4.5 GHz    | Up to 5.7 GHz   | 16    | 32      | 170W        | 22.4M         |
| Yes          | **AMD**      | Ryzen 9 9950x                      | 4.3 GHz    | Up to 5.7 GHz   | 16    | 32      | 170W        | 23M           |
| Yes          | **AMD**      | AMD EPYC™ 9254                     | 2.9 GHz    | Up to 4.15 GHz  | 24    | 48      | 200W        | 17.5M         |
| Yes          | **AMD**      | AMD EPYC™ 9354P                    | 3.25 GHz   | Up to 3.8 GHz   | 32    | 64      | 280W        | 16.1M, 14.4M  |


* Recommendation from version Agave 2.1.1 is to have at least 10M hashes/sec. Results based on governor set at performance mode.

These recommendations also work for RPC nodes, but RPC nodes require more cores and RAM to perform better under load

Source:
- [AMD Server Processors](https://www.amd.com/en/products/specifications/server-processor.html)
- [AMD Workstation Processors](https://www.amd.com/en/products/specifications/processors.html)

#### Frankendancer CPU   
 
For Frankendancer its beneficial to have Simultaneous Multi-Threading (SMT) enabled.   
With each CPU it was tested if its possible to catch up with a non voting node, while SMT was enabled.   
   
| Recommended  | Manufacturer | Model                              | Base Clock | Max Boost Clock | Cores | Threads | Default TDP | Caught Up in Tesnet | Caught Up in Mainnet |   
|--------------|--------------|------------------------------------|------------|-----------------|-------|---------|-------------|---------------------|----------------------|  
| Yes          | **AMD**      | AMD EPYC 9474F                     | 3.6 GHz    | Up to 4.1 GHz   | 48    | 96      | 360W        | Yes, default Layout | Yes, default Layout  |   
| Yes          | **AMD**      | AMD EPYC 9374F                     | 3.85 GHz   | Up to 4.3 GHz   | 32    | 64      | 320W        | Yes, default Layout | Yes, default Layout  | 
| Yes          | **AMD**      | AMD EPYC 9354P                     | 3.25 GHz   | Up to 3.8 GHz   | 32    | 64      | 280W        | Yes, default Layout | Yes, default Layout  | 
| Yes          | **AMD**      | AMD EPYC 9354                      | 3.25 GHz   | Up to 3.8 GHz   | 32    | 64      | 280W        | Yes, default Layout | Not tested yet       | 
| Yes          | **AMD**      | AMD EPYC 9274F                     | 4.05 GHz   | Up to 4.3 GHz   | 24    | 48      | 320W        | Yes, default Layout | Yes, default Layout  |
| Yes          | **AMD**      | AMD EPYC 9254                      | 2.9 GHz    | Up to 4.15 GHz  | 24    | 48      | 200W        | Yes, default Layout | Yes, default Layout  | 
| Yes          | **AMD**      | AMD EPYC 7742                      | 2.25 GHz   | Up to 3.4 GHz   | 64    | 128     | 225W        | Yes, default Layout | Yes, default Layout  |   
| Yes          | **AMD**      | AMD EPYC 7513                      | 2.6 GHz    | Up to 3.65 GHz  | 32    | 64      | 200W        | Yes, default Layout | Not tested yet       |   
| Yes          | **AMD**      | AMD EPYC 74F3                      | 3.2 GHz    | Up to 4   GHz   | 24    | 48      | 240W        | Yes, default Layout | Yes, default Layout  | 
| Yes          | **AMD**      | AMD Ryzen Threadripper Pro 7965WX  | 4.2 GHz    | Up to 5.3 GHz   | 24    | 48      | 350W        | Yes, default Layout | Yes, default Layout  |
| No           | **AMD**      | Ryzen 9 5900X                      | 3.7 GHz    | Up to 4.8 GHz   | 12    | 24      | 105W        | Yes, custom Layout  | No                   |   
| No           | **AMD**      | Ryzen 9 5950X                      | 3.4 GHz    | Up to 4.9 GHz   | 16    | 32      | 105W        | Yes, default Layout | -                    |   
| No           | **AMD**      | Ryzen 9 7950X                      | 4.5 GHz    | Up to 5.7 GHz   | 16    | 32      | 170W        | Yes, default Layout | -                    |   


Tested Testnet Layout for Ryzen 9 5900X: one verify tile, one bank tile and agave affinity "auto"   


### Storage

**Enterprise**

| Manufacturer | Model  | Generation |    Size | Sequential Read | Sequential Write |    Random Read | Random Write |
|--------------|--------|------------|--------:|----------------:|-----------------:|---------------:|-------------:|
| **Samsung**  | PM9A1  | Gen 4      | 2.00 TB |      7,000 MB/s |       5,200 MB/s | 1,000,000 IOPS | 850,000 IOPS |
| **Samsung**  | PM9A3  | Gen 4      | 1.92 TB |      6,800 MB/s |       2,700 MB/s |   850,000 IOPS | 130,000 IOPS |
| **Samsung**  | PM9A3  | Gen 4      | 3.84 TB |      6,900 MB/s |       4,100 MB/s | 1,000,000 IOPS | 180,000 IOPS |
| **Micron**   | 7450   | Gen 4      | 3.84 TB |      6,800 MB/s |       5,300 MB/s | 1,500,000 IOPS | 550,000 IOPS |
| **Kioxia**   | CM7-V  | Gen 5      | 3.20 TB |     14,000 MB/s |       6,750 MB/s | 2,700,000 IOPS | 600,000 IOPS |
| **Kioxia**   | CM7-V  | Gen 5      | 6.40 TB |     14,000 MB/s |       6,750 MB/s | 2,450,000 IOPS | 550,000 IOPS |
| **Kioxia**   | CM7-R  | Gen 5      | 3.84 TB |     14,000 MB/s |       6,750 MB/s | 2,700,000 IOPS | 310,000 IOPS |
| **Kioxia**   | CM7-R  | Gen 5      | 7.68 TB |     14,000 MB/s |       6,750 MB/s | 2,450,000 IOPS | 300,000 IOPS |
| **Kioxia**   | CD8P-V | Gen 5      | 3.20 TB |     12,000 MB/s |       5,500 MB/s | 1,900,000 IOPS | 400,000 IOPS |
| **Kioxia**   | CD8P-V | Gen 5      | 6.40 TB |     12,000 MB/s |       5,500 MB/s | 2,000,000 IOPS | 400,000 IOPS |
| **Samsung**  | PM1743 | Gen 5      | 3.84 TB |     14,000 MB/s |       6,000 MB/s | 2,500,000 IOPS | 280,000 IOPS |
| **Samsung**  | PM1743 | Gen 5      | 7.68 TB |     14,000 MB/s |       6,000 MB/s | 2,500,000 IOPS | 300,000 IOPS |
| **SanDisk**  | SN861  | Gen 5      | 3.20 TB |     13,700 MB/s |       7,200 MB/s | 3,300,000 IOPS | 665,000 IOPS |
| **SanDisk**  | SN861  | Gen 5      | 6.40 TB |     13,700 MB/s |       7,500 MB/s | 3,300,000 IOPS | 800,000 IOPS |
| **SanDisk**  | SN861  | Gen 5      | 3.84 TB |     13,700 MB/s |       7,200 MB/s | 3,300,000 IOPS | 330,000 IOPS |
| **SanDisk**  | SN861  | Gen 5      | 7.68 TB |     13,700 MB/s |       7,500 MB/s | 3,300,000 IOPS | 430,000 IOPS |

**Note**: There have been a few reports of Kioxia's being unreliable on the discord, so proceed with caution

**Consumer**

| Manufacturer | Model         | Generation | Sequential Read | Sequential Write |    Random Read |   Random Write |
|--------------|---------------|------------|----------------:|-----------------:|---------------:|---------------:|
| **Crucial**  | T705          | Gen 5      |     14,500 MB/s |      12,700 MB/s | 1,550,000 IOPS | 1,800,000 IOPS |
| **WD**       | SN850X        | Gen 4      |      7,300 MB/s |       6,600 MB/s | 1,200,000 IOPS | 1,000,000 IOPS |
| **Samsung**  | 980 Pro       | Gen 4      |      7,000 MB/s |       5,100 MB/s | 1,000,000 IOPS | 1,000,000 IOPS |

## Swap
Running swapfiles is **highly discouraged** since it masks problems with your setup and will lead to negative consequences as chain activity increases.

## Datacenter Providers

| Provider     | Link                                                                 
|--------------|----------------------------------------------------------------------
| **Latitude** | [Latitude](https://latitude.sh)                                      
| **Edgevana** | [Edgevana](https://srv.edgevana.com/solana-validator-servers)        
| **Teraswitch**| [Teraswitch](https://teraswitch.com/bare-metal/)                    
| **Vultr**    | [Vultr](https://www.vultr.com/pricing/#bare-metal)                  
| **Cherry**   | [Cherry](https://www.cherryservers.com/bare-metal-dedicated-servers) 
| **DedicatedNodes** | [DedicatedNodes](https://www.dedicatednodes.io/solana-nodes/) 

More here: [Marinade ISP list](https://app.marinade.finance/network/isps/?countries=&direction=descending&sorting=stake)

#### notes to consider for renting:

- check reviews on the solana discord for your specific provider.
- ensure you are not running within a virtual machine (vm).
- verify the speed and uplink of the provider; low latency is crucial.
- ask the provider about the hardware specifications, focusing on higher ram frequencies.
- before using your validator, confirm that all hardware components are functioning as expected.

#### free to test for beginners

some providers offer a test phase before you commit to renting with them, often as a playground to explore running a solana node. you can check the list, which we update frequently with new providers.

- [CherryServers](https://www.cherryservers.com/bare-metal-dedicated-servers)
---

### Notes

- **CPU Selection:** Prioritize CPUs with higher base clock speeds to meet Solana validator performance requirements. Ensure the selected CPU supports at least AVX2 instructions, with AVX-512 providing additional performance benefits. The AMD Ryzen™ Threadripper™ PRO and AMD EPYC™ series listed above are optimized for high-performance and multi-threaded tasks essential for validator operations.

- **Storage Selection:** Choose NVMe SSDs that offer high IOPS to handle the intensive read/write operations necessary for validator nodes. Samsung's Pro series and WD's SN850X are highly recommended for their reliability and performance within the validator community.

- **Memory Considerations:** While not part of the table, remember that **RAM** requirements are crucial. Ensure you have ECC memory and sufficient capacity as per the [Hardware Recommendations](#recommended-hardware) section. RAM **speed** and DDR4 vs DDR5 are not known to make any significant differences 

Feel free to reach out if you need further assistance or more detailed specifications!

## FAQ

Q: My validator doesn't catch up or catches up slowly or does not keep up with the tip

A: If you've followed the [setup instructions](https://docs.solanalabs.com/operations/setup-a-validator) correctly, make sure to:
  (via [ax on discord](https://discord.com/channels/428295358100013066/1187805174803210341/1288757805062553600))

  i would like to suggest using the acronym "core" when beginners are asking for help, because its always the same question with same answers. it helps to break down the steps and make the guidance easier to follow:
- c: check cpu performance (focus on single-thread speeds)
- o: optimize nvme by separating ledger and accounts
- r: remove unnecessary cli arguments
- e: enable performance mode 

### setup performance mode

```sudo apt install cpufrequtils```

```sudo bash -c 'echo performance > /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor'```

## Resources
- [Useful links to tools for validators](https://gist.github.com/ferric-sol/451fbb55e34d1df04c0dcc7556f95cb6)

## Contributors

- [ferric](https://x.com/ferric) / [StakeWare](https://stakeware.xyz)
- [ax](https://x.com/ax_1000x) / [1000x.sh](https://1000x.sh)
- [Matthias](https://x.com/StakingMatthias) / [Staking Facilities](https://stakingfacilities.com/)


### Inspired by
- [Zan](https://x.com/shinobisystems) / [Shinobi Systems](https://www.shinobi-systems.com/)
- [/dev/null](https://x.com/pumpkinspool) / [Pumpkins Pool](https://pumpkinspool.eco/)
- [meyerbro](https://meyerbro-validator.github.io/)
- [7layer](https://x.com/7LayerMagik) / [Overclock](https://overclock.one)
- [dhruvsol](https://x.com/_dhruvsol) / [Ice staking](https://www.cubik.so/)
- [Tim Garcia](https://x.com/TimGarcia0) / [Solana Fndn](https://solana.org)
- Everyone else on [#validator-hw-tuning](https://discord.com/channels/428295358100013066/811317327609856081)
