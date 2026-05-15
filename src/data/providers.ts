import { Provider } from './hardware';

export const providers: Provider[] = [
  { name: 'Latitude', link: 'https://latitude.sh' },
  { name: 'Edgevana', link: 'https://srv.edgevana.com/solana-validator-servers' },
  { name: 'Teraswitch', link: 'https://teraswitch.com/bare-metal/' },
  { name: 'Vultr', link: 'https://www.vultr.com/pricing/#bare-metal' },
  { name: 'Cherry', link: 'https://www.cherryservers.com/bare-metal-dedicated-servers' },
  { name: 'DedicatedNodes', link: 'https://www.dedicatednodes.io/solana-nodes/' },
  { name: 'Allnodes', link: 'https://www.allnodes.com/hosting' },
  { name: '3NV', link: 'https://3nv.io/' },
  { name: 'velia.net', link: 'https://www.velia.net/shop/region/frankfurt-am-main' },
  { name: 'AWS', link: 'https://aws.amazon.com/' },
];

export const providerNotes = `More providers available: [Marinade ISP list](https://app.marinade.finance/network/isps/?countries=&direction=descending&sorting=stake)

#### Notes to consider for renting:

- DO NOT USE **OVH**. They may have the widest server availability but also the poorest understanding of Solana's network needs. You will randomly get blackholed and support is absolutely useless.
- DO NOT USE **hetzner**. They may shut you down without notice.
- Check reviews on the Solana Discord for your specific provider.
- Ensure you are not running within a virtual machine (VM).
- Verify the speed and uplink of the provider; low latency is crucial.
- Ask the provider about the hardware specifications, focusing on higher RAM frequencies.
- Before using your validator, confirm that all hardware components are functioning as expected.
- While running nodes on AWS is technically feasible, it incurs higher costs. This option should only be considered when cost is secondary to other critical factors, such as specific compliance requirements, application proximity, or elasticity needs. Talk to your AWS account manager about discounts. 

#### Free to test for beginners

Some providers offer a test phase before you commit to renting with them, often as a playground to explore running a Solana node. You can check the list, which we update frequently with new providers.

- [CherryServers](https://www.cherryservers.com/bare-metal-dedicated-servers)
- [DedicatedNodes](https://www.dedicatednodes.io/solana-nodes) - any of the instant servers`;

