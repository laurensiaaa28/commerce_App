import { useCart } from "../../utils/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">Keranjang belanjaan kamu kosong.</h2>
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Belanja Sekarang</Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>
      <div className="divide-y">
        {cart.map((item) => (
          <div key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-500">Rp {item.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                className="w-16 p-1 border rounded text-center"
              />
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline text-sm">
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold">Total: Rp {total.toLocaleString()}</span>
        <Link to="/checkout" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Lanjut ke Checkout
        </Link>
      </div>
    </div>
  );
}