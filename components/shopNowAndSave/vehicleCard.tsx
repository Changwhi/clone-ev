import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface VehicleCardProps {
  imageUrl: string;
  title: string;
  price: string;
  link: string;
}

const VehicleCard: FC<VehicleCardProps> = ({ imageUrl, title, price, link }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg text-center">
      <Image src={imageUrl} alt={title} width={200} height={100} className="mx-auto" />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600">MSRP</p>
      <p className="text-xl font-bold text-black">{price}</p>
      <a href={link} className="text-blue-600 mt-2 block">View details</a>
      <Button className="mt-4 w-full bg-blue-900 text-white py-2">Custom order</Button>
    </div>
  );
};

export default VehicleCard;