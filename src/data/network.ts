import { NetworkCard } from './hardware';

export const networkCards: NetworkCard[] = [
    // High-confidence / preferred families
    {
        manufacturer: 'NVIDIA/Mellanox',
        model: 'ConnectX-5 / ConnectX-6 Lx',
        driver: 'mlx5',
        afXdpWithoutZeroCopy: 'Works',
        afXdpWithZeroCopy: 'Works',
        notes: 'Operator reports: mlx5 works with XDP + ZC on kernel 6.8. ConnectX-6 Lx worked after kernel 6.17 upgrade. Highest-confidence family in the discussion.'
    },
    {
        manufacturer: 'Intel',
        model: '700 series',
        driver: 'i40e',
        afXdpWithoutZeroCopy: 'Works',
        afXdpWithZeroCopy: 'Works',
        notes: 'Operator report: i40e works with XDP + ZC on kernel 6.8.'
    },
    {
        manufacturer: 'Intel',
        model: 'I210',
        driver: 'igb',
        afXdpWithoutZeroCopy: 'Works',
        afXdpWithZeroCopy: 'Works with caveat',
        notes: 'Caveat: igb requires kernel >= 6.14 for ZC. Field report: I210 on 6.17 enabled ZC but had severe network degradation/high skips, so fall back to non-ZC if unstable.'
    },
    {
        manufacturer: 'Intel',
        model: 'E800 series',
        driver: 'ice',
        afXdpWithoutZeroCopy: 'Works',
        afXdpWithZeroCopy: 'Works',
        notes: 'ice supports native XDP and AF_XDP zero-copy. Caveat: XDP is blocked for frame sizes larger than 3KB.'
    },

    // Mixed / unsupported families
    {
        manufacturer: 'Intel',
        model: 'X540 / X550',
        driver: 'ixgbe',
        afXdpWithoutZeroCopy: 'Works',
        afXdpWithZeroCopy: 'Mixed / unstable',
        notes: 'Alessandro guidance for freeze/link-flap cases: start without ZC while ixgbe is debugged. Stay tuned.'
    },
    {
        manufacturer: 'Broadcom',
        model: 'Broadcom',
        driver: 'bnxt_en',
        afXdpWithoutZeroCopy: 'Works',
        afXdpWithZeroCopy: 'Does not work',
        notes: 'bnxt_en works with XDP, but does not pass the zero-copy flag. Broadcom non-ZC can still be reasonably fast. Get a non-Broadcom NIC when possible.'
    },
    {
        manufacturer: 'Broadcom',
        model: 'BCM5720',
        driver: 'tg3',
        afXdpWithoutZeroCopy: 'No native/driver XDP; generic XDP only at best',
        afXdpWithZeroCopy: 'Does not work',
        notes: 'Broadcom BCM5720 uses the tg3 driver. Treat as unsupported for Agave/AF_XDP performance work: no native XDP and no AF_XDP zero-copy.'
    },
    {
        manufacturer: 'Realtek',
        model: 'Realtek',
        driver: 'r8169',
        afXdpWithoutZeroCopy: 'No native/driver XDP; generic XDP only at best',
        afXdpWithZeroCopy: 'Does not work',
        notes: 'Realtek NICs using r8169 should be treated as unsupported for Agave/AF_XDP performance work: no native XDP and no AF_XDP zero-copy.'
    },
    {
        manufacturer: 'NVIDIA/Mellanox',
        model: 'ConnectX-3',
        driver: 'mlx4_en',
        afXdpWithoutZeroCopy: 'Does not work',
        afXdpWithZeroCopy: 'Does not work',
        notes: 'Driver is no longer supported. Zero-copy does not work. Do not use.'
    },
];

export const networkNotes = `Network interface cards with native XDP (eXpress Data Path) driver support are essential for Agave validators running version 3.0.9+. XDP accelerates Turbine packet processing by bypassing the Linux networking stack.

**Recommended:** 25 GbE or higher with native XDP driver support.
- NVIDIA/Mellanox ConnectX-5 or ConnectX-6 Lx using mlx5.
- Intel 700 series using i40e.
- Intel E800 series using ice.

**Minimum:** 10 GbE symmetric connection. Higher speeds recommended for mainnet validators.

Prefer families that support AF_XDP with zero-copy. If zero-copy is unstable on a specific host, run without ZC before replacing the NIC.

Read more about configuring Agave XDP in the [Agave XDP setup guide](https://www.anza.xyz/blog/agave-xdp-setup-guide).`;
