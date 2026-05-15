import { StorageDrive } from './hardware';

export const enterpriseGen5: StorageDrive[] = [
  { manufacturer: 'Phison', model: 'X200E', size: '6.40 TB', sequentialRead: '14,800 MB/s', sequentialWrite: '8,700 MB/s', randomRead: '3,200K IOPS', randomWrite: '880K IOPS' },
  { manufacturer: 'Solidigm', model: 'D7-PS1030', size: '6.40 TB', sequentialRead: '14,500 MB/s', sequentialWrite: '10,000 MB/s', randomRead: '3,000K IOPS', randomWrite: '800K IOPS' },
  { manufacturer: 'SanDisk', model: 'SN861', size: '6.40 TB', sequentialRead: '13,700 MB/s', sequentialWrite: '7,500 MB/s', randomRead: '3,300K IOPS', randomWrite: '800K IOPS' },
  { manufacturer: 'Phison', model: 'X200E', size: '3.20 TB', sequentialRead: '14,800 MB/s', sequentialWrite: '8,600 MB/s', randomRead: '3,300K IOPS', randomWrite: '790K IOPS' },
  { manufacturer: 'Solidigm', model: 'D7-PS1030', size: '3.20 TB', sequentialRead: '14,500 MB/s', sequentialWrite: '8,200 MB/s', randomRead: '3,100K IOPS', randomWrite: '716K IOPS' },
  { manufacturer: 'SanDisk', model: 'SN861', size: '3.20 TB', sequentialRead: '13,700 MB/s', sequentialWrite: '7,200 MB/s', randomRead: '3,300K IOPS', randomWrite: '665K IOPS' },
  { manufacturer: 'Micron', model: '9550 MAX', size: '6.40 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '10,000 MB/s', randomRead: '3,300K IOPS', randomWrite: '640K IOPS' },
  { manufacturer: 'Kioxia', model: 'CM7-V', size: '3.20 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,750 MB/s', randomRead: '2,700K IOPS', randomWrite: '600K IOPS', notes: 'There have been a few reports of Kioxia\'s being unreliable on the discord, so proceed with caution.' },
  { manufacturer: 'Kioxia', model: 'CM7-V', size: '6.40 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,750 MB/s', randomRead: '2,450K IOPS', randomWrite: '550K IOPS', notes: 'There have been a few reports of Kioxia\'s being unreliable on the discord, so proceed with caution.' },
  { manufacturer: 'Micron', model: '9550 MAX', size: '3.20 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,000 MB/s', randomRead: '3,000K IOPS', randomWrite: '540K IOPS' },
  { manufacturer: 'SanDisk', model: 'SN861', size: '7.68 TB', sequentialRead: '13,700 MB/s', sequentialWrite: '7,500 MB/s', randomRead: '3,300K IOPS', randomWrite: '430K IOPS' },
  { manufacturer: 'Solidigm', model: 'D7-PS1010', size: '7.68 TB', sequentialRead: '14,500 MB/s', sequentialWrite: '10,000 MB/s', randomRead: '3,000K IOPS', randomWrite: '400K IOPS' },
  { manufacturer: 'Kioxia', model: 'CD8P-V', size: '3.20 TB', sequentialRead: '12,000 MB/s', sequentialWrite: '5,500 MB/s', randomRead: '1,900K IOPS', randomWrite: '400K IOPS', notes: 'There have been a few reports of Kioxia\'s being unreliable on the discord, so proceed with caution.' },
  { manufacturer: 'Kioxia', model: 'CD8P-V', size: '6.40 TB', sequentialRead: '12,000 MB/s', sequentialWrite: '5,500 MB/s', randomRead: '2,000K IOPS', randomWrite: '400K IOPS', notes: 'There have been a few reports of Kioxia\'s being unreliable on the discord, so proceed with caution.' },
  { manufacturer: 'Phison', model: 'X200P', size: '7.68 TB', sequentialRead: '14,800 MB/s', sequentialWrite: '8,700 MB/s', randomRead: '3,200K IOPS', randomWrite: '390K IOPS' },
  { manufacturer: 'Micron', model: '9550 PRO', size: '7.68 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '10,000 MB/s', randomRead: '3,300K IOPS', randomWrite: '380K IOPS' },
  { manufacturer: 'SanDisk', model: 'SN861', size: '3.84 TB', sequentialRead: '13,700 MB/s', sequentialWrite: '7,200 MB/s', randomRead: '3,300K IOPS', randomWrite: '330K IOPS' },
  { manufacturer: 'Phison', model: 'X200P', size: '3.84 TB', sequentialRead: '14,800 MB/s', sequentialWrite: '8,600 MB/s', randomRead: '3,300K IOPS', randomWrite: '320K IOPS' },
  { manufacturer: 'Solidigm', model: 'D7-PS1010', size: '3.84 TB', sequentialRead: '14,500 MB/s', sequentialWrite: '8,200 MB/s', randomRead: '3,100K IOPS', randomWrite: '315K IOPS' },
  { manufacturer: 'Kioxia', model: 'CM7-R', size: '3.84 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,750 MB/s', randomRead: '2,700K IOPS', randomWrite: '310K IOPS', notes: 'There have been a few reports of Kioxia\'s being unreliable on the discord, so proceed with caution.' },
  { manufacturer: 'Micron', model: '9550 PRO', size: '3.84 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,000 MB/s', randomRead: '3,000K IOPS', randomWrite: '300K IOPS' },
  { manufacturer: 'Kioxia', model: 'CM7-R', size: '7.68 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,750 MB/s', randomRead: '2,450K IOPS', randomWrite: '300K IOPS', notes: 'There have been a few reports of Kioxia\'s being unreliable on the discord, so proceed with caution.' },
  { manufacturer: 'Samsung', model: 'PM1743', size: '7.68 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,000 MB/s', randomRead: '2,500K IOPS', randomWrite: '300K IOPS' },
  { manufacturer: 'Samsung', model: 'PM1743', size: '3.84 TB', sequentialRead: '14,000 MB/s', sequentialWrite: '6,000 MB/s', randomRead: '2,500K IOPS', randomWrite: '280K IOPS' },
  { manufacturer: 'AWS', model: '3rd gen AWS Nitro SSDs', size: 'up to 7.5 TB', sequentialRead: '', sequentialWrite: '', randomRead: '', randomWrite: '', notes: 'Recommended for running RPC nodes on AWS only'},
];

export const enterpriseGen4: StorageDrive[] = [
  { manufacturer: 'Samsung', model: 'PM9A1', size: '2.00 TB', sequentialRead: '7,000 MB/s', sequentialWrite: '5,200 MB/s', randomRead: '1,000K IOPS', randomWrite: '850K IOPS' },
  { manufacturer: 'Micron', model: '7450', size: '3.84 TB', sequentialRead: '6,800 MB/s', sequentialWrite: '5,300 MB/s', randomRead: '1,500K IOPS', randomWrite: '550K IOPS' },
  { manufacturer: 'Samsung', model: 'PM9A3', size: '3.84 TB', sequentialRead: '6,900 MB/s', sequentialWrite: '4,100 MB/s', randomRead: '1,000K IOPS', randomWrite: '180K IOPS' },
  { manufacturer: 'Samsung', model: 'PM9A3', size: '1.92 TB', sequentialRead: '6,800 MB/s', sequentialWrite: '2,700 MB/s', randomRead: '850K IOPS', randomWrite: '130K IOPS' },
];

export const consumerDrives: StorageDrive[] = [
  { manufacturer: 'Samsung', model: '9100 PRO', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '14,700 MB/s', sequentialWrite: '13,400 MB/s', randomRead: '1,850K IOPS', randomWrite: '2,600K IOPS' },
  { manufacturer: 'SanDisk', model: 'WD_BLACK SN8100', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '14,900 MB/s', sequentialWrite: '14,000 MB/s', randomRead: '2,300K IOPS', randomWrite: '2,400K IOPS' },
  { manufacturer: 'Crucial', model: 'T710', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '14,500 MB/s', sequentialWrite: '13,800 MB/s', randomRead: '2,200K IOPS', randomWrite: '2,300K IOPS' },
  { manufacturer: 'Kingston', model: 'FURY Renegade G5', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '14,700 MB/s', sequentialWrite: '14,000 MB/s', randomRead: '2,200K IOPS', randomWrite: '2,200K IOPS' },
  { manufacturer: 'Micron', model: '4600', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '14,500 MB/s', sequentialWrite: '12,000 MB/s', randomRead: '2,100K IOPS', randomWrite: '2,100K IOPS' },
  { manufacturer: 'Crucial', model: 'T705', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '14,500 MB/s', sequentialWrite: '12,700 MB/s', randomRead: '1,550K IOPS', randomWrite: '1,800K IOPS' },
  { manufacturer: 'Seagate', model: 'FireCuda 540', size: '> 2 TB', generation: 'Gen 5', sequentialRead: '10,000 MB/s', sequentialWrite: '10,000 MB/s', randomRead: '1,490K IOPS', randomWrite: '1,500K IOPS' },
  { manufacturer: 'SanDisk', model: 'WD_BLACK SN850X', size: '> 2 TB', generation: 'Gen 4', sequentialRead: '7,300 MB/s', sequentialWrite: '6,600 MB/s', randomRead: '1,200K IOPS', randomWrite: '1,000K IOPS' },
  { manufacturer: 'Samsung', model: '980 Pro', size: '> 2 TB', generation: 'Gen 4', sequentialRead: '7,000 MB/s', sequentialWrite: '5,100 MB/s', randomRead: '1,000K IOPS', randomWrite: '1,000K IOPS' },
];

export const storageNotes = `Drives are mainly recommended based on performance figures from the manufacturer. All tables are sorted by the claimed random write performance (IOPS), as this is an essential property for Solana validators.

Consumer drives are less suitable for Solana validators, because they are designed for lighter workloads and have lower write endurance compared to enterprise drives. Minimum 2 TB per drive is recommended. Larger drives offer increased write endurance, which is crucial for handling the intensive read/write operations of Solana validators.

**NOTE:** The Samsung 990 PRO has been reported to have severe endurance issues, and is therefore not recommended.`;

