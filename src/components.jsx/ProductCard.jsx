import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between group">
      <div>
        {/* Kontainer Gambar Produk Rill */}
        <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 flex items-center justify-center p-2">
          <img 
            src={p.img} 
            alt={p.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300 rounded-md" 
          />
        </div>

        {/* Informasi Produk */}
        <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full">
          {p.category_name}
        </span>
        <h2 className="font-semibold text-gray-800 text-base mt-2 line-clamp-1">{p.name}</h2>
        <p className="text-pink-600 font-bold text-lg mb-2">Rp {p.price.toLocaleString()}</p>
      </div>

      <div>
        <Link 
          to={`/product/${p.slug}`} 
          state={p} 
          className="text-gray-500 hover:text-pink-600 text-xs font-medium block mb-3 text-right underline"
        >
          Lihat Detail →
        </Link>
        <button 
          onClick={() => addToCart(p)} 
          className="w-full py-2.5 bg-pink-500 text-white font-medium text-sm rounded-lg hover:bg-pink-600 transition active:scale-95 shadow-sm"
        >
          + Keranjang
        </button>
      </div>
    </div>
  );
}