export default function FilterBar({ properties, setFiltered }) {
  const handleCity = e => {
    const city = e.target.value;
    setFiltered(city === '' ? properties : properties.filter(p => p.city === city));
  };
  return (
    <div className="mb-4">
      <label className="ml-2">اختر المدينة:</label>
      <select onChange={handleCity} className="border p-1 rounded">
        <option value=''>كل المدن</option>
        <option value='القاهرة'>القاهرة</option>
        <option value='الإسكندرية'>الإسكندرية</option>
        <option value='الجيزة'>الجيزة</option>
        <option value='الساحل'>الساحل</option>
      </select>
    </div>
  );
}
