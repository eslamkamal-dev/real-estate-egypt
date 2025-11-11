export default function PropertyCard({ property }) {
  return (
    <div className="border rounded shadow p-2">
      <img src={property.image || '/uploads/default.jpg'} alt={property.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p>{property.area} | {property.price}</p>
      <p>{property.city}</p>
    </div>
  );
}
