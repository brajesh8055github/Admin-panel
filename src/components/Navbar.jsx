import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Logo</div>
      <ul className="flex gap-4">
        <NavLink to="/" className="hover:text-gray-300">Dashboard</NavLink>
        <NavLink to="/products" className="hover:text-gray-300">Products</NavLink>
        <NavLink to="/add-product" className="hover:text-gray-300">AddProducts</NavLink>
        <NavLink to="/users" className="hover:text-gray-300">Users</NavLink>
        <NavLink to="/orders" className="hover:text-gray-300">Orders</NavLink>
        <NavLink to="/notifications" className="hover:text-gray-300">
          Notifications <span className="ml-1 bg-red-600 text-sm px-2 rounded-full">3</span>
        </NavLink>
        <NavLink to="/settings" className="hover:text-gray-300">Settings</NavLink>
        <NavLink to="/login" className="hover:text-gray-300">Login</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
