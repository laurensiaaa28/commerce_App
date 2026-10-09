import { products } from "../../utils/data";
import ProductCard from "../../components/Productcard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} p={item} />
        ))}
      </div>
    </div>
  );
}