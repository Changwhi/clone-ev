import { FC } from 'react';
import Image from 'next/image'; // For logos if you have them
import { Button } from '@/components/ui/button';

interface Make {
  name: string;
  logo: string;
}

const popularMakes: Make[] = [
  { name: 'Tesla', logo: 'https://www.ev.com/_next/image?url=https%3A%2F%2Fev-oem-logos.s3.amazonaws.com%2FTesla.png&amp;w=64&amp;q=100' },
  { name: 'Chevrolet', logo: '/chevrolet-logo.png' },
  { name: 'Kia', logo: '/kia-logo.png' },
  { name: 'Ford', logo: '/ford-logo.png' },
];

const allMakes: Make[] = [
  { name: 'Acura', logo: '/acura-logo.png' },
  { name: 'Audi', logo: '/audi-logo.png' },
  { name: 'BMW', logo: '/bmw-logo.png' },
  { name: 'Cadillac', logo: '/cadillac-logo.png' },
  { name: 'Chevrolet', logo: '/chevrolet-logo.png' },
  { name: 'FIAT', logo: '/fiat-logo.png' },
  { name: 'Ford', logo: '/ford-logo.png' },
  { name: 'GMC', logo: '/gmc-logo.png' },
  { name: 'Genesis', logo: '/genesis-logo.png' },
  { name: 'Honda', logo: '/honda-logo.png' },
  { name: 'Hyundai', logo: '/hyundai-logo.png' },
  { name: 'Jaguar', logo: '/jaguar-logo.png' },
];

const ChooseMake: FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Choose make</h2>

      {/* Popular Makes Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Popular makes in US</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {popularMakes.map((make) => (
            <Button key={make.name} className="flex items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-100">
              <Image src={make.logo} alt={make.name} width={30} height={30} className="mr-4" />
              {make.name}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">All makes</h3>
        <div className="space-y-4">
          {allMakes.map((make) => (
            <Button key={make.name} className="w-full flex items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-100">
              <Image src={make.logo} alt={make.name} width={30} height={30} className="mr-4" />
              {make.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseMake;
