# GlobalMart - Task 2  
**Adding Life to the Page (Advanced CSS & JavaScript DOM)**

---

## 📌 Overview  
This task extends **Task-1 (static homepage)** by adding **JavaScript interactivity**.  
The goal is to make the e-commerce homepage more engaging with:  
- A **Product Modal** that shows details.  
- A **Shopping Cart** with dynamic updates.

---

## ✨ Features Implemented  

1. **DOM Manipulation**  
   - JavaScript selects and modifies DOM elements.  
   - Event listeners added to buttons (`View Details`, `Add to Cart`, `Cart`).  

2. **Product Modal**  
   - Each product card now includes a **View Details** button.  
   - Clicking opens a modal with:  
     - Product name  
     - Description  
     - Price  
     - "Add to Cart" button  
   - Modal closes by clicking **X** or background overlay.  

3. **Shopping Cart**  
   - 🛒 Cart icon with counter in the header.  
   - Clicking **Add to Cart** updates the counter.  
   - **Cart Sidebar** opens when clicking cart icon:  
     - Shows all added products.  
     - Displays running total.  
     - Items can be removed with ✕ button.  

---

## 📂 Folder Structure  

Task-2/
│── index.html # Homepage with modal & cart integration
│── style.css # Styles (extended from Task-1, added modal/cart)
│── script.js # JavaScript interactivity (modal + cart logic)
│── README.md # Documentation
└── assets/ # Copied images/logo from Task-1


---

## 🛠️ How to Run Locally  

1. Open this folder in VS Code:  
   ```powershell
   cd D:\GlobalMart-Nexus-Tasks\Task-2
2.Open index.html in a browser (double-click or use Live Server).
3.Test features:

Click View Details → Opens modal with product info.

Click Add to Cart → 🛒 counter updates.

Click 🛒 Cart icon → Sidebar opens with items + total.

Remove items with ✕.


✅ Expected Outcome

Homepage layout remains identical to Task-1.

Each product card has View Details button.

Modal opens with correct product info.

Cart updates dynamically when items are added.

Sidebar shows items and total price.

Fully responsive design consistent with Task-1.
