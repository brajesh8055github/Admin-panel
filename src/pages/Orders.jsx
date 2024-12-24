import { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "001",
      customer: "John Doe",
      status: "Pending",
      total: "$100.00",
      date: "2024-12-18",
    },
    {
      id: "002",
      customer: "Jane Smith",
      status: "Shipped",
      total: "$200.00",
      date: "2024-12-17",
    },
  ]);
  const [filter, setFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [trackingID, setTrackingID] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleSaveTrackingID = () => {
    console.log(`Tracking ID for Order ${selectedOrder}: ${trackingID}`);
    setTrackingID("");
    setSelectedOrder(null);
  };

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6">Order Management</h1>

        {/* Filters */}
        <div className="mb-6">
          <label className="mr-4 font-medium">Filter by Status:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        {/* Order List Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">Customer Name</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Total</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="border rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="py-2 px-4">{order.total}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => setSelectedOrder(order.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 mr-2"
                  >
                    Add Tracking ID
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Tracking ID Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">
              Add Tracking ID for Order {selectedOrder}
            </h2>
            <input
              type="text"
              value={trackingID}
              onChange={(e) => setTrackingID(e.target.value)}
              placeholder="Enter Tracking ID"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTrackingID}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
