import { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    brand: '',
    price: '',
    stock: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    if (product.name && product.brand && product.price && product.stock) {
      onAddProduct(product);
      setProduct({ image: '', name: '', brand: '', price: '', stock: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleInputChange}
          className="p-2 border rounded sm:col-span-2 lg:col-span-4"
        />
      </div>
      <button
        onClick={handleAddProduct}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
