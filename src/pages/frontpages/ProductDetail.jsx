import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

export default function ProductDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!state) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">Produk tidak ditemukan.</p>
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-blue-600 text-white rounded">
          Kembali ke Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <img src={state.img} alt={state.name} className="w-full h-64 object-cover rounded-md mb-6" />
      <h1 className="text-2xl font-bold mb-2">{state.name}</h1>
      <p className="text-xl text-blue-600 font-semibold mb-4">Rp {state.price.toLocaleString()}</p>
      <p className="text-gray-600 mb-2"><strong>Kategori:</strong> {state.category_name}</p>
      <p className="text-gray-600 mb-4"><strong>Stok:</strong> {state.stock} unit</p>
      <div className="flex gap-4">
        <button onClick={() => addToCart(state)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Tambah ke Keranjang
        </button>
        <button onClick={() => navigate(-1)} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          Kembali
        </button>
      </div>
    </div>
  );
}