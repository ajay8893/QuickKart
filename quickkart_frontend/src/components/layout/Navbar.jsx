import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Heart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-jordy-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          QuickKart
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Orders
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/cart"
            className="hover:text-yellow-300 relative"
          >
            <ShoppingCart size={22} />
            {/* Cart Item Count */}
            <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs px-1 rounded-full">
              0
            </span>
          </NavLink>

          <NavLink to="/wishlist" className="hover:text-yellow-300">
            <Heart size={22} />
          </NavLink>

          <NavLink to="/login" className="hover:text-yellow-300">
            <User size={22} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
