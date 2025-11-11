export default function Home() {
  return (
    <div dir="rtl" className="p-4">
      <h1 className="text-3xl font-bold mb-4">سوق العقار المصري</h1>
      <nav className="mb-4">
        <a href="/properties" className="mr-2 text-blue-600">العقارات</a>
        <a href="/articles" className="text-blue-600">المقالات</a>
      </nav>
      <p>مرحبا بك في موقع سوق العقار المصري. استعرض العقارات والمقالات يوميًا.</p>
    </div>
  );
}
