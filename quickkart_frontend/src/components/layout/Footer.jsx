import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-jordy-blue-600 text-white mt-10">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        {/* QuickKart Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">QuickKart</h2>
          <p className="text-sm">Your one-stop shop for everything, delivered fast and easy.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
            <li><Link to="/cart" className="hover:text-yellow-300">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-yellow-300">Wishlist</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: support@quickkart.com</p>
          <p className="text-sm">Phone: +91 8893670851</p>
          <p className="text-sm">Address: 123 Market Street, India</p>
        </div>
      </div>

      <div className="border-t border-olive-500 text-center py-4 text-sm">
        © {new Date().getFullYear()} QuickKart. All Rights Reserved.
      </div>
    </footer>
  );
}
