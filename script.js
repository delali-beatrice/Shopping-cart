let items = [
    {
        id: 1,
        name: "Headphones",
        price: 50,
        image: "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 0
    },
    {
        id: 2,
        name: "Mouse",
        price: 25,
        image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 0
    },
    {
        id: 3,
        name: "Keyboard",
        price: 75,
        image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 0
    },
    {
        id: 4,
        name: "Ring Light",
        price: 150,
        image: "https://plus.unsplash.com/premium_photo-1684611913202-479ff05703da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 0
    },
    {
        id: 5,
        name: "Webcam",
        price: 200,
        image: "https://images.unsplash.com/photo-1670278458254-0df3f72ab093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quantity: 0
    },
    {
        id:6,
        name: "Flash Drive",
        price: 20,
        image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=800",
        quantity: 0
    }
];

const productGrid = document.getElementById("product-grid");

function displayProducts() { 
    productGrid.innerHTML = "";
    items.forEach(item => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <div class="product-details">
                <h3>${item.name}</h3>
                <p> $ ${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price})" class="btn btn-primary">Add to Cart</button>
                <button onClick="removeFromCart('${item.name}')" class="btn btn-danger">Remove from Cart</button>
            </div>
            `;
            productGrid.appendChild(productCard);
    });
}

displayProducts();

function addToCart(name, price) {

    const item = items.find(item => item.name === name && item.price === price);
    if (item) {
        item.quantity += 1;
        alert(`${item.name} added to cart! 
               Quantity: ${item.quantity}
               Price: $${item.price} * ${item.quantity} = $${item.price * item.quantity}`
            );
    } else {
        alert("Item not found!");
    }

    updateCart();
}

function removeFromCart(name) {
    const item = items.find(item => item.name === name);
    if (!item || item.quantity <= 0) {
        alert(`${name} is not in your cart!`);
        return;
    }

    item.quantity -= 1;
    alert(`${item.name} removed from cart!
               Quantity remaining: ${item.quantity}
               Price: $${item.price} * ${item.quantity} = $${item.price * item.quantity}`
            );

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    cartItems.innerHTML = "";
    let total = 0;
    items.forEach(item => {
        if (item.quantity > 0) {
            const li = document.createElement("li");
            li.className = "cart-item";
            li.textContent = `${item.name} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        }
    });
    totalElement.textContent = total.toFixed(2);
}

updateCart();


