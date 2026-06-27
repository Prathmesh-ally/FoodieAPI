# 🍔 Foodie API - Order Management System

A sleek, responsive, and efficient **Order Management Dashboard** built to handle food orders with ease. This project provides CRUD operations for restaurant orders along with live status updates through a simple and intuitive interface.

---

## ✨ Features

- ✅ **Create Orders** – Easily add new orders with restaurant name, item details, and quantity.
- 📝 **Update Dashboard** – Edit existing orders whenever required.
- ❌ **Delete Orders** – Remove completed or unwanted orders.
- 📊 **Order Status Updates** – Instantly change order status (Preparing, Out for Delivery, Delivered).
- ⚡ **Modern UI** – Clean and responsive dashboard built using EJS and CSS.
- 💾 **UUID-Based IDs** – Unique identifiers for every order.
- 🗂️ **In-Memory Data Storage** – Uses an in-memory array (no database required).

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates), CSS3
- **Architecture:** RESTful API with `method-override`
- **Database:** None (In-memory array)
- **Utilities:** UUID

---

## 📂 Project Structure

```text
foodie-api/
│
├── public/
│   └── style.css          # Stylesheet
│
├── views/
│   ├── index.ejs          # Home page
│   ├── new.ejs            # Create Order page
│   ├── edit.ejs           # Update Order page
│   └── orderList.ejs      # Main Dashboard
│
├── server.js              # Express server
├── package.json           # Project dependencies
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Prathmesh-sAlly/FoodieAPI.git
cd FoodieAPI
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
node server.js
```

Or, if you're using **nodemon**:

```bash
npm run dev
```

---

## 🌐 Access the Application

Open your browser and visit:

```
http://localhost:8080/orders
```

---

## 📌 Available Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/orders` | View all orders |
| GET | `/orders/new` | Create a new order form |
| POST | `/orders` | Add a new order |
| GET | `/orders/:id/edit` | Edit an order |
| PATCH | `/orders/:id` | Update an order |
| DELETE | `/orders/:id` | Delete an order |

---

## 📸 Preview

Add screenshots of your dashboard here.

```text
assets/
├── dashboard.png
├── create-order.png
└── edit-order.png
```

Example:

```markdown
![Dashboard](assets/dashboard.png)
```

---

## 📦 Dependencies

- express
- ejs
- method-override
- uuid

---

## 🔮 Future Improvements

- MongoDB integration
- User Authentication
- Search & Filter Orders
- Pagination
- Order Analytics Dashboard
- Real-time updates using Socket.io

---

## 👨‍💻 Developed By

**Prathmesh Sanap**

GitHub: https://github.com/Prathmesh-sAlly

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
