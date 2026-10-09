export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">Selamat datang di panel pengelola toko.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm">Total Produk</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm">Total Penjualan</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
}