# Solana Hardware Compatibility List

This is the Solana Hardware Compatibility List for running a mainnet validator.

- [[Hardware Recommendations]]
- [[Compatible Hardware]]
  - [[CPU]]
  - [[Storage]]
- [[Datacenter Providers]]

## Hardware Recommendations

The hardware recommendations below are provided as a guide. Operators are encouraged to do their own performance testing.

| Component | Validator Requirements | Additional RPC Node Requirements |
|-----------|------------------------|----------------------------------|
| **CPU**   | - 2.8GHz base clock speed, or faster<br />- SHA extensions instruction support<br />- AMD Gen 3 or newer<br />- Intel Ice Lake or newer<br />- Higher clock speed is preferable over more cores<br />- AVX2 instruction support (to use official release binaries, self-compile otherwise)<br />- Support for AVX512f is helpful | |
|           | 12 cores / 24 threads, or more | 16 cores / 32 threads, or more |
| **RAM**   | Error Correction Code (ECC) memory is suggested<br />Motherboard with 512GB capacity suggested | |
|           | 256GB or more | 512 GB or more for **all [account indexes](https://docs.solanalabs.com/operations/setup-an-rpc-node#account-indexing)** |
| **Disk**  | PCIe Gen3 x4 NVME SSD, or better, on each of:<br />- **Accounts**: 500GB, or larger. High TBW (Total Bytes Written)<br />- **Ledger**: 1TB or larger. High TBW suggested<br />- **Snapshots**: 250GB or larger. High TBW suggested<br />- **OS**: (Optional) 500GB, or larger. SATA OK<br /><br />The OS may be installed on the ledger disk, though testing has shown better performance with the ledger on its own disk<br /><br />Accounts and ledger *can* be stored on the same disk, however due to high IOPS, this is not recommended<br /><br />The Samsung 970 and 980 Pro series SSDs are popular with the validator community | Consider a larger ledger disk if longer transaction history is required<br /><br />Accounts and ledger **should not** be stored on the same disk |
| **GPUs**  | Not necessary at this time<br />Operators in the validator community do not use GPUs currently | |

## Compatible Hardware

### CPU

| Manufacturer | Model                              | Base Clock | Max Boost Clock | Cores | Threads | Default TDP | Additional Features                                       |
|--------------|------------------------------------|------------|------------------|-------|---------|-------------|-----------------------------------------------------------|
| **AMD**      | Ryzen™ Threadripper™ PRO 7995WX    | 2.5 GHz    | Up to 5.1 GHz     | 96    | 192     | 350W        | Discrete Graphics Card Required, AVX2 & AVX-512 support   |
| **AMD**      | Ryzen™ Threadripper™ PRO 7985WX    | 3.2 GHz    | Up to 5.1 GHz     | 64    | 128     | 350W        | Discrete Graphics Card Required, AVX2 & AVX-512 support   |
| **AMD**      | Ryzen™ Threadripper™ PRO 7975WX    | 4.0 GHz    | Up to 5.3 GHz     | 32    | 64      | 350W        | Discrete Graphics Card Required, AVX2 & AVX-512 support   |
| **AMD**      | Ryzen™ Threadripper™ PRO 7965WX    | 4.2 GHz    | Up to 5.3 GHz     | 24    | 48      | 350W        | Discrete Graphics Card Required, AVX2 & AVX-512 support   |
| **AMD**      | Ryzen™ Threadripper™ PRO 7955WX    | 4.5 GHz    | Up to 5.3 GHz     | 16    | 32      | 350W        | Discrete Graphics Card Required, AVX2 & AVX-512 support   |
| **AMD**      | Ryzen™ Threadripper™ PRO 7945WX    | 4.7 GHz    | Up to 5.3 GHz     | 12    | 24      | 350W        | Discrete Graphics Card Required, AVX2 & AVX-512 support   |
| **AMD**      | AMD EPYC™ 9274F                     | 3.4 GHz    | N/A               | 24    | 48      | [TDP Spec]  | AVX2 support                                              |
| **AMD**      | AMD EPYC™ 9254                      | 3.1 GHz    | N/A               | 20    | 40      | [TDP Spec]  | Suitable for multi-threaded applications                  |
| **AMD**      | AMD EPYC™ 9354                      | 2.6 GHz    | N/A               | 32    | 64      | [TDP Spec]  | High core count for parallel processing                   |
| **AMD**      | AMD EPYC™ 7443P                     | 3.0 GHz    | N/A               | 28    | 56      | [TDP Spec]  | Designed for robust performance in data centers           |
| **AMD**      | AMD EPYC™ 74F3                      | 3.2 GHz    | N/A               | 24    | 48      | [TDP Spec]  | Optimized for high-performance computing tasks            |

### Storage (NVMe SSDs)

| Manufacturer | Model      | Max IOPS Read | Max IOPS Write |
|--------------|------------|---------------|----------------|
| **Crucial**  | T705       | 650,000       | 600,000        |
| **Samsung**  | 990 Pro    | 2,000,000     | 2,000,000      |
| **Samsung**  | 980 Pro    | 1,000,000     | 1,000,000      |
| **Samsung**  | P9A1/3     | 800,000       | 700,000        |
| **WD**       | SN850X     | 1,000,000     | 1,000,000      |

---

### Notes

- **CPU Selection:** Prioritize CPUs with higher base clock speeds to meet Solana validator performance requirements. Ensure the selected CPU supports at least AVX2 instructions, with AVX-512 providing additional performance benefits. The AMD Ryzen™ Threadripper™ PRO and AMD EPYC™ series listed above are optimized for high-performance and multi-threaded tasks essential for validator operations.

- **Storage Selection:** Choose NVMe SSDs that offer high IOPS to handle the intensive read/write operations necessary for validator nodes. Samsung's Pro series and WD's SN850X are highly recommended for their reliability and performance within the validator community.

- **Compatibility Verification:** Always verify the compatibility of hardware components with the latest Solana software releases. Conduct comprehensive performance testing tailored to your specific validator setup to ensure optimal performance and stability.

- **Memory Considerations:** While not part of the table, remember that **RAM** requirements are crucial. Ensure you have ECC memory and sufficient capacity as per the [Hardware Recommendations](#hardware-recommendations) section. RAM **speed** and DDR4 vs DDR5 are not known to make any significant differences 

Feel free to reach out if you need further assistance or more detailed specifications!
