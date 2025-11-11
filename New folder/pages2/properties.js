import { useState } from 'react';
import properties from '../data/properties/properties';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';

export default function Properties() {
  const [filtered, setFiltered] = useState(properties);
  return (
    <div dir="rtl" className="p-4">
      <h1 className="text-2xl font-bold mb-4">العقارات</h1>
      <FilterBar properties={properties} setFiltered={setFiltered} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );
}
