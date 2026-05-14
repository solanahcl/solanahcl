import { NetworkCard } from './hardware';

export const networkCards: NetworkCard[] = [
    // Intel E810 Series
    {
        manufacturer: 'Intel',
        model: 'E810-XXVDA2',
        speed: '25 GbE',
        ports: 2,
        media: 'both',
        notes: 'Native XDP and AF_XDP zero-copy support. SFP28 connections.'
    },
    {
        manufacturer: 'Intel',
        model: 'E810-CQDA2',
        speed: '100 GbE',
        ports: 2,
        media: 'both',
        notes: 'Top-tier Intel NIC with full XDP support. QSFP28 connections.'
    },
    // NVIDIA/Mellanox ConnectX Series
    {
        manufacturer: 'NVIDIA/Mellanox',
        model: 'ConnectX-6 / ConnectX-7',
        speed: '100+ GbE',
        ports: 2,
        media: 'both',
        notes: 'mlx5 driver with excellent AF_XDP zero-copy support. More expensive than Intel E810 options.'
    },
    // Budget-friendly options
    {
        manufacturer: 'Intel',
        model: 'X550-T2',
        speed: '10 GbE',
        ports: 2,
        media: 'copper',
        notes: 'Reliable 10GbE option with XDP support via ixgbe driver.'
    },
];

export const networkNotes = `Network interface cards with native XDP (eXpress Data Path) driver support are essential for Agave validators running version 3.0.9+. XDP accelerates Turbine packet processing by bypassing the Linux networking stack.

**Recommended:** 25 GbE or higher with native XDP driver support.
- Intel E810 series
- NVIDIA/Mellanox ConnectX-6 or ConnectX-7. Uses the mlx5 driver with excellent zero-copy support, but is more expensive.

**Minimum:** 10 GbE symmetric connection. Higher speeds recommended for mainnet validators.

NICs are listed by speed tier. Optical/SFP connections typically offer better performance than copper for 25GbE+.`;
