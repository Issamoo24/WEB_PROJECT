import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemTable.css';

const ItemTable = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', price: '', mf_date: '', exp_date: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/item'); // Ensure this URL is correct
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to fetch items');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put(`http://localhost:8080/api/item/${form.id}`, form); // Ensure this URL is correct
      } else {
        await axios.post('http://localhost:8080/api/item', form); // Ensure this URL is correct
      }
      setForm({ id: '', name: '', price: '', mf_date: '', exp_date: '' });
      fetchItems();
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form');
    }
  };

  const handleEdit = (item) => {
    setForm(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/item/${id}`); // Ensure this URL is correct
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Failed to delete item');
    }
  };

  return (
    <div className="item-table">
      <h2>Item List</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleFormSubmit} className="item-form">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="date"
          name="mf_date"
          value={form.mf_date}
          onChange={handleInputChange}
          placeholder="Manufacture Date"
          required
        />
        <input
          type="date"
          name="exp_date"
          value={form.exp_date}
          onChange={handleInputChange}
          placeholder="Expiry Date"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacture Date</th>
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.mf_date}</td>
              <td>{item.exp_date}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
