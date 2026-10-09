import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen }) {
  return (
    <div className={`${sidebarOpen ? "block" : "hidden"} md:block w-64 bg-gray-800 text-white min-h-screen p-4`}>
      <div className="font-bold text-xl mb-6 pb-2 border-b border-gray-700">Admin Panel</div>
      <nav className="flex flex-col space-y-2">
        <Link to="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/admin/about" className="hover:bg-gray-700 p-2 rounded">About</Link>
        <Link to="/" className="hover:bg-gray-700 p-2 rounded text-gray-400 mt-4">← Ke Toko Utama</Link>
      </nav>
    </div>
  );
}