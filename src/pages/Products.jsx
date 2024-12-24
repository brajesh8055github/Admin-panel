import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const [productList, setProductList] = useState(products);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleDelete = (index) => {
    const updatedProducts = productList.filter((_, i) => i !== index);
    setProductList(updatedProducts);
  };

  const openEditModal = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const saveEdit = () => {
    const updatedProducts = [...productList];
    updatedProducts[currentIndex] = currentProduct;
    setProductList(updatedProducts);
    closeEditModal();
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setCurrentProduct(null);
    setCurrentIndex(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <Link
        to="/add-product"
        className="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add New Product
      </Link>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Brand</th>
            <th className="p-2">Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2">
                <img src={product.image} alt={product.name} className="h-12" />
              </td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.brand}</td>
              <td className="p-2">${product.price}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">
                <button
                  className="text-blue-600 hover:underline mr-2"
                  onClick={() => openEditModal(product, index)}
                >
                  <MdEdit />
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-red-500 p-6 rounded shadow-lg   w-96">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={currentProduct.name}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={currentProduct.brand}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={currentProduct.price}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="stock"
                placeholder="Stock"
                value={currentProduct.stock}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={currentProduct.image}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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

export default Products;
