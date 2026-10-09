import { useCart } from "../../utils/CartContext";

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Halaman Checkout</h1>
      <div className="mb-6 border-b pb-4">
        <h2 className="font-semibold mb-2">Ringkasan Pesanan</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Tidak ada barang untuk di-checkout.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between py-1 text-sm">
              <span>{item.name} (x{item.qty})</span>
              <span>Rp {(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))
        )}
        <div className="font-bold text-lg mt-4 flex justify-between">
          <span>Total Bayar:</span>
          <span>Rp {total.toLocaleString()}</span>
        </div>
      </div>
      <button
        onClick={() => alert("Pesanan Berhasil Dibuat!")}
        disabled={cart.length === 0}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
      >
        Konfirmasi Pembayaran
      </button>
    </div>
  );
}