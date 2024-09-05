import { FC } from 'react';
import { Button } from '@/components/ui/button';

const ComparisonCard: FC = () => {
  return (
    <div className="p-8 bg-blue-900 text-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Compare Between Models</h2>
      <p className="mt-4">
        Explore detailed specifications and ratings between different vehicle models, 
        and find which one delivers the best value to you!
      </p>
      <Button className="mt-6 w-full bg-white text-blue-900 py-3">Compare EVs</Button>
    </div>
  );
};

export default ComparisonCard;
