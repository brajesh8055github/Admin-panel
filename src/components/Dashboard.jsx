const Dashboard = () => {
  const datas=[
    { title: 'Total Sales', value: "3787683", icon: '💰' },
    { title: 'Top-Selling Products', value: "9", icon: '🔥' },
    { title: 'Pending Orders', value: "99", icon: '📦' },
    { title: 'Low Stock', value: "65", icon: '⚠️' },
]
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {datas.map((card, idx) => (
          <div key={idx} className="p-4 bg-white rounded shadow">
            <div className="text-xl">{card.icon}</div>
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
