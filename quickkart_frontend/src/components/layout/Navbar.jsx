import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import Input from '../ui/Input'
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className="w-[100%] bg-jordy-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          QuickKart
        </Link>
        <div className="relative hover:scale-101 border-0 w-64 md:w-96 lg:w-[500px]">
          <Input
          type="text"
          placeholder="Search products"
          className="pl-10 pr-3 h-8 rounded-full bg-jordy-blue-500 border border-transparent  w-full focus:outline-none focus:ring-2 focus:ring-offset-jordy-blue-600 focus:border-transparent transition"/>
          <svg
      className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1110 3a7 7 0 016.65 13.65z"
      />
    </svg>
        </div>
        {/* Menu Links */}
        <div className="hidden md:flex space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-3 py-1 hover:rounded-2xl font-medium overflow-hidden group
            ${isActive ? "text-yellow-300 font-semibold" : "text-white"}`
            }
          >
            {/* Bubble Effect */}
            <span className="absolute inset-0 w-0 h-0 bg-blue-100 rounded-full transition-all duration-500 ease-out 
                  group-hover:w-32 group-hover:h-32 group-hover:top-1/2 group-hover:left-1/2 
                  group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"></span>

            {/* Text */}
            <span className="relative group-hover:text-blue-600">Home</span>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
                `relative px-3 py-1 hover:rounded-2xl font-medium overflow-hidden group 
                ${isActive ? "text-yellow-300 font-semibold" : "text-white"}`
                    }
              >
            <span className="absolute inset-0 w-0 h-0 bg-blue-100 rounded-full transition-all duration-500 ease-out 
                  group-hover:w-32 group-hover:h-32 group-hover:top-1/2 group-hover:left-1/2 
                  group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"></span>
            <span className="relative group-hover:text-blue-600">Products</span>
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
                `relative px-3 py-1 hover:rounded-2xl font-medium overflow-hidden group 
                ${isActive ? "text-yellow-300 font-semibold" : "text-white"}`
                }
            >
            <span className="absolute inset-0 w-0 h-0 bg-blue-100 rounded-full transition-all duration-500 ease-out 
                  group-hover:w-32 group-hover:h-32 group-hover:top-1/2 group-hover:left-1/2 
                  group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"></span>
            <span className="relative group-hover:text-blue-600">Wishlist</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `relative px-3 py-1 hover:rounded-2xl font-medium overflow-hidden group 
              ${isActive ? "text-yellow-300 font-semibold" : "text-white"}`
            }
          >
            <span className="absolute inset-0 w-0 h-0 bg-blue-100 rounded-full transition-all duration-500 ease-out
                  group-hover:w-32 group-hover:h-32 group-hover:top-1/2 group-hover:left-1/2
                  group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"></span>
            <span className="relative group-hover:text-blue-600">Orders</span>
          </NavLink>
        </div>

        {/* Icons + mobile menu button */}
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
          {/* mobile hamburger */}
          <button
            className="md:hidden hover:text-yellow-300 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu drop down */}
      {mobileOpen && (
        <div className="md:hidden bg-jordy-blue-600 px-4 pb-3 space-y-2">
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? "block text-yellow-300 font-semibold" : "block hover:text-yellow-300"
            }
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "block text-yellow-300 font-semibold" : "block hover:text-yellow-300"
            }
            onClick={() => setMobileOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "block text-yellow-300 font-semibold" : "block hover:text-yellow-300"
            }
            onClick={() => setMobileOpen(false)}
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "block text-yellow-300 font-semibold" : "block hover:text-yellow-300"
            }
            onClick={() => setMobileOpen(false)}
          >
            Orders
          </NavLink>

        </div>
      )}
    </nav>
  );
}
