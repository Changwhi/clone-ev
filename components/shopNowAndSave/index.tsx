import VehicleCard from '@/components/shopNowAndSave/vehicleCard';
import ComparisonCard from '@/components/shopNowAndSave/comparisonCard';

export default function CompareAndCalculator() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Shop now & save</h1>
      <p className="text-center text-gray-600 mb-8">
        Explore the cost of ownership across all electric vehicles
      </p>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <VehicleCard
          imageUrl="/path-to-image/kia-ev6.jpg"
          title="2024 Kia EV6"
          price="$45,950"
          link="#"
        />
        <VehicleCard
          imageUrl="/path-to-image/chevrolet-bolt-euv.jpg"
          title="2023 Chevrolet Bolt EUV"
          price="$27,800"
          link="#"
        />
        <ComparisonCard />
        <VehicleCard
          imageUrl="/path-to-image/hyundai-kona-electric.jpg"
          title="2023 Hyundai Kona Electric"
          price="$33,550"
          link="#"
        />
        <VehicleCard
          imageUrl="/path-to-image/chevrolet-bolt-ev.jpg"
          title="2023 Chevrolet Bolt EV"
          price="$26,500"
          link="#"
        />
        <VehicleCard
          imageUrl="/path-to-image/ford-mustang-mach-e.jpg"
          title="2023 Ford Mustang Mach-E"
          price="$39,895"
          link="#"
        />
        <VehicleCard
          imageUrl="/path-to-image/bmw-ix.jpg"
          title="2024 BMW iX"
          price="$87,100"
          link="#"
        />
        <VehicleCard
          imageUrl="/path-to-image/mercedes-eqe.jpg"
          title="2024 Mercedes-Benz EQE"
          price="$74,900"
          link="#"
        />
      </div>
    </div>
  );
}
