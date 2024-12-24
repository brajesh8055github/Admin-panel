import  { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Payment Gateway");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Payment Gateway":
        return (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">API Key:</label>
              <input
                type="text"
                placeholder="Enter API Key"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Secret Key:</label>
              <input
                type="password"
                placeholder="Enter Secret Key"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case "Shipping Options":
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="font-medium mr-4">Free Shipping:</label>
              <input
                type="checkbox"
                className="w-6 h-6 accent-blue-500 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Flat Rate:</label>
              <input
                type="number"
                placeholder="Enter Flat Rate"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case "Tax Settings":
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="font-medium mr-4">Enable Tax:</label>
              <input
                type="checkbox"
                className="w-6 h-6 accent-blue-500 rounded"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Tax Percentage:</label>
              <input
                type="number"
                placeholder="Enter Tax Percentage"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        <div className="flex border-b mb-6">
          {["Payment Gateway", "Shipping Options", "Tax Settings"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-medium ${
                  activeTab === tab
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        {renderTabContent()}
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
