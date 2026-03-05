import { Provider } from './hardware';

export interface RingProviders {
  ring: string;
  description: string;
  regions: string;
  providers: Provider[];
}

export const doubleZeroRings: RingProviders[] = [
  {
    ring: 'Ring 2',
    description: 'United States, Canada and India',
    regions: 'United States, Canada and India',
    providers: [
      { name: 'Latitude', link: 'https://latitude.sh' },
      { name: 'Edgevana', link: 'https://srv.edgevana.com/solana-validator-servers' },
      { name: 'Teraswitch', link: 'https://teraswitch.com/bare-metal/' },
      { name: 'Vultr', link: 'https://www.vultr.com/pricing/#bare-metal' },
      { name: 'Cherry', link: 'https://www.cherryservers.com/bare-metal-dedicated-servers' },
      { name: 'velia.net', link: 'https://www.velia.net' },
      { name: 'Koddos', link: 'https://www.koddos.net' },
    ],
  },
  {
    ring: 'Ring 3',
    description: 'South America, Singapore, Hong Kong and Tokyo',
    regions: 'South America, Singapore, Hong Kong and Tokyo',
    providers: [
      { name: 'Koddos', link: 'https://www.koddos.net' },
      { name: 'Edgevana', link: 'https://srv.edgevana.com/solana-validator-servers' },
      { name: 'Latitude', link: 'https://latitude.sh' },
      { name: 'Cherry', link: 'https://www.cherryservers.com/bare-metal-dedicated-servers' },
    ],
  },
];
