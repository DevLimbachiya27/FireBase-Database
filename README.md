# 📦 Inventory Tracking System

## 🚀 Project Overview

The **Inventory Tracking System** is a web application built using **React.js**, **Redux Toolkit**, and **Firebase Realtime Database**.
It allows users to manage product inventory in real time by performing **CRUD operations** (Create, Read, Update, Delete).

The application uses **Redux Toolkit for state management** and **Firebase for real-time data synchronization**, ensuring that all inventory updates appear instantly across the application.

---

## 🛠️ Tech Stack

**Frontend:** React.js (Vite)
**State Management:** Redux Toolkit
**Database:** Firebase Realtime Database
**UI Library:** Material UI
**Middleware:** Redux Thunk

---

## ✨ Features

**1. Add Product**
Users can add new products with details such as:

* Product Name
* Category
* Price
* Stock Quantity

**2. View Products**
All products are displayed in a **Material UI table** with real-time updates from Firebase.

**3. Update Product**
Users can edit product details such as price, category, or stock quantity.

**4. Delete Product**
Products can be removed from the inventory when they are discontinued.

**5. Real-Time Synchronization**
All changes in Firebase are instantly reflected in the UI without refreshing the page.

**6. Low Stock Alert (Optional Feature)**
Products with stock below a certain threshold can be highlighted.

---

## 📂 Project Structure

```
inventory-tracking-system
│
├── src
│   ├── app
│   │   └── store.js
│   │
│   ├── components
│   │   ├── ProductForm.jsx
│   │   └── ProductList.jsx
│   │
│   ├── features
│   │   └── productSlice.js
│   │
│   ├── firebase
│   │   └── firebase.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/inventory-tracking-system.git
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run the Project

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔥 Firebase Setup

1. Go to **Firebase Console**
2. Create a new project
3. Enable **Realtime Database**
4. Copy Firebase configuration
5. Paste it in:

```
src/firebase/firebase.js
```

---

## 📌 Use Case

This system can be used by **retail stores, warehouses, or small businesses** to manage their inventory efficiently.
It allows multiple users to access and update stock data in real time.

---

## 👨‍💻 Author

**Dev Limbachiya**

---

## 📄 License

This project is developed for **learning and educational purposes**.
