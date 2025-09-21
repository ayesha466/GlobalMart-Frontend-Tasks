
const products = [
  { id: 1, name: "iPhone 15 Pro", price: 258999, desc: "Apple flagship smartphone." },
  { id: 2, name: "High Heel", price: 8000, desc: "Elegant heels for occasions." },
  { id: 3, name: "Makeup Table", price: 45000, desc: "Modern wooden vanity table." },
  { id: 4, name: "Skincare Tool", price: 2000, desc: "Gentle daily skincare device." },
  { id: 5, name: "BP Machine", price: 20000, desc: "Digital blood pressure monitor." },
  { id: 6, name: "Cooking Oil (3L)", price: 1995, desc: "Healthy canola cooking oil." },
  { id: 7, name: "LEGO Bricks", price: 8000, desc: "Creative building toy set." },
  { id: 8, name: "Atomic Habits", price: 1500, desc: "Book by James Clear." },
  { id: 9, name: "Bike Helmet", price: 5500, desc: "Safety helmet for cycling." },
  { id: 10, name: "Travel Backpack", price: 7000, desc: "Durable travel backpack." },
];

let cart = [];

const viewBtns = document.querySelectorAll(".view-btn");
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalAdd = document.getElementById("modal-add");
const modalClose = document.getElementById("modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const cartSidebar = document.getElementById("cart-sidebar");
const cartClose = document.getElementById("cart-close");
const cartOverlay = cartSidebar.querySelector(".cart-overlay");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let currentProductId = null;


viewBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = parseInt(btn.dataset.id);
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentProductId = product.id;
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = `PKR ${product.price.toLocaleString()}`;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);


modalAdd.addEventListener("click", () => {
  if (!currentProductId) return;
  const product = products.find(p => p.id === currentProductId);
  cart.push(product);
  updateCartUI();
  closeModal();
});


cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("show");
  cartSidebar.setAttribute("aria-hidden", "false");
});
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function closeCart() {
  cartSidebar.classList.remove("show");
  cartSidebar.setAttribute("aria-hidden", "true");
}

function updateCartUI() {
  cartCount.textContent = cart.length;

 
  cartItemsList.innerHTML = "";

  
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - PKR ${item.price.toLocaleString()}`;

    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.style.marginLeft = "8px";
    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCartUI();
    });

    li.appendChild(removeBtn);
    cartItemsList.appendChild(li);
  });

  cartTotal.textContent = `Total: PKR ${total.toLocaleString()}`;
}
