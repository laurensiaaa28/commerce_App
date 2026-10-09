import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <header className="bg-white p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border rounded-lg bg-white">
          <option>Semua Kategori</option>
          <option>Elektronik</option>
        </select>
      </header>
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 MyShop E-Commerce | All Rights Reserved</p>
      </footer>
    </div>
  );
}