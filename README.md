🍔 Foodie API - Order Management System
A sleek, responsive, and efficient Order Management Dashboard built to handle food orders with full CRUD (Create, Read, Update, Delete) capabilities. This project follows RESTful API principles and uses modern web technologies to provide a seamless user experience.

🚀 Key Features
Create Orders: Easily add new orders with restaurant names, item details, and quantities.

Order Dashboard: A clean, card-based interface to view all active orders.

Real-time Status Updates: Effortlessly change order statuses (Preparing, Out For Delivery, Delivered).

Order Deletion: Remove completed or cancelled orders from the system with a single click.

Modern UI: Elegant and responsive design using custom CSS.

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript templates), CSS3

Architecture: RESTful API with method-override

Data Handling: In-memory array storage (UUID for unique order identification)

⚙️ How to Run Locally
Follow these steps to get the project up and running on your machine:

Clone the repository:

Bash
git clone https://github.com/YOUR_USERNAME/foodie-api.git
cd foodie-api
Install dependencies:

Bash
npm install
Start the server:

Bash
node server.js
Access the App:
Open your browser and navigate to: http://localhost:8080/orders

📁 Project Structure
foodie-api/
├── public/
│   └── style.css       # Master CSS file
├── views/
│   ├── new.ejs         # Create order page
│   ├── edit.ejs        # Update order status page
│   └── orderlist.ejs   # Main dashboard
├── server.js           # Main Express server logic
└── package.json        # Project dependencies
💡 Future Scope
Adding MongoDB for persistent database storage.

Integrating user authentication (Login/Signup).

Adding order filtering and sorting by status.

👨‍💻 Developed by
Prathmesh Sanap

If you liked this project, feel free to give it a ⭐️!
