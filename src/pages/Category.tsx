import { useParams } from 'react-router-dom';
import { CategoryType } from '../data/hardware';
import HardwareTable from '../components/HardwareTable';
import Notes from '../components/Notes';
import { agaveCPUs, agaveNotes } from '../data/agave';
import { frankendancerCPUs, frankendancerNotes } from '../data/frankendancer';
import { enterpriseGen5, enterpriseGen4, consumerDrives, storageNotes } from '../data/storage';

export default function Category() {
  const { type } = useParams<{ type: CategoryType }>();

  const getCategoryData = () => {
    switch (type) {
      case 'agave':
        return {
          name: 'Agave',
          description: 'The standard Solana validator client',
          cpus: agaveCPUs,
          notes: agaveNotes,
        };
      case 'frankendancer':
        return {
          name: 'Frankendancer',
          description: 'A hybrid validator combining Agave and Firedancer components',
          cpus: frankendancerCPUs,
          notes: frankendancerNotes,
        };
      case 'firedancer':
        return {
          name: 'Firedancer',
          description: 'A high-performance validator implementation built from the ground up',
          cpus: [],
          notes: 'Firedancer is a next-generation validator implementation. Hardware recommendations are similar to Frankendancer.',
        };
      default:
        return {
          name: 'Unknown',
          description: '',
          cpus: [],
          notes: '',
        };
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="min-h-screen bg-solana-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">{categoryData.name}</h1>
        <p className="text-xl text-gray-300 mb-8">{categoryData.description}</p>

        {categoryData.notes && (
          <Notes content={categoryData.notes} title="Important Information" />
        )}

        {categoryData.cpus && categoryData.cpus.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recommended CPUs</h2>
            <HardwareTable cpus={categoryData.cpus} />
          </section>
        )}

        {/* Storage Section - shown for all categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Storage Recommendations</h2>
          
          <Notes content={storageNotes} />

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Enterprise Gen 5 (PCIe 5.0)</h3>
            <HardwareTable storage={enterpriseGen5} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Enterprise Gen 4 (PCIe 4.0)</h3>
            <HardwareTable storage={enterpriseGen4} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Consumer Drives</h3>
            <HardwareTable storage={consumerDrives} />
          </div>
        </section>
      </div>
    </div>
  );
}

