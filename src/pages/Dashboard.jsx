
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-5">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Total Sales</h2>
          <p className="text-2xl mt-2">$10,000</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Products</h2>
          <p className="text-2xl mt-2">120</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-2xl mt-2">540</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Orders</h2>
          <p className="text-2xl mt-2">80</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
