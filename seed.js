const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');

// Kết nối MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crud_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log(err));

// Dữ liệu mẫu
const sampleSuppliers = [
  { name: 'Vinamilk', address: 'Ho Chi Minh City', phone: '0909123456' },
  { name: 'TH True Milk', address: 'Ha Noi', phone: '0912345678' },
  { name: 'PepsiCo VN', address: 'Da Nang', phone: '0987654321' },
  { name: 'Nestle VN', address: 'Binh Duong', phone: '0933222111' }
];

// Chèn dữ liệu
async function seed() {
  try {
    await Supplier.deleteMany(); // Xóa hết dữ liệu cũ
    await Supplier.insertMany(sampleSuppliers);
    console.log('🌱 Suppliers seeded successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
}

seed();
