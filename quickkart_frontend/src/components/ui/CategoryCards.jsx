import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/products?category=${category.id}`} className="block border rounded hover:shadow-lg transition overflow-hidden">
      <img src={category.image} alt={category.name} className="h-40 w-full object-cover" />
      <div className="p-2 text-center font-semibold">{category.name}</div>
    </Link>
  );
}
