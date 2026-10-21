```javascript
/* =====================================================
   SHIV KERANA GENERAL STORE
   SHOPPING CART SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    let cart = [];


    /* =========================================
       ADD TO CART
    ========================================= */

    const addButtons = document.querySelectorAll(".add-cart");

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const name = this.dataset.name;
            const price = Number(this.dataset.price);

            const existingProduct = cart.find(
                item => item.name === name
            );


            if (existingProduct) {

                existingProduct.quantity++;

            } else {

                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });

            }


            updateCart();

            // Scroll to cart
            document.querySelector("#cart").scrollIntoView({
                behavior: "smooth"
            });


            // Button feedback
            const originalText = this.innerHTML;

            this.innerHTML = "✓ Added";

            setTimeout(() => {

                this.innerHTML = originalText;

            }, 1000);

        });

    });


    /* =========================================
       UPDATE CART
    ========================================= */

    function updateCart() {

        const cartItems = document.querySelector("#cart-items");

        const cartCount = document.querySelector("#cart-count");

        const cartTotal = document.querySelector("#cart-total");


        let totalItems = 0;

        let totalPrice = 0;


        cart.forEach(function (item) {

            totalItems += item.quantity;

            totalPrice +=
                item.price * item.quantity;

        });


        cartCount.textContent = totalItems;

        cartTotal.textContent = totalPrice;


        /* Empty cart */

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">

                    🛒

                    <h3>Cart abhi empty hai</h3>

                    <p>
                        Products mein se kuchh items add karein.
                    </p>

                </div>
            `;

            return;
        }


        /* Cart HTML */

        cartItems.innerHTML = "";


        cart.forEach(function (item, index) {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-info">

                    <div class="cart-item-icon">
                        🛒
                    </div>

                    <div>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ₹${item.price} each
                        </p>

                    </div>

                </div>


                <div class="quantity">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <div class="item-price">

                    ₹${item.price * item.quantity}

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})">

                    🗑️

                </button>

            `;


            cartItems.appendChild(cartItem);

        });

    }


    /* =========================================
       INCREASE QUANTITY
    ========================================= */

    window.increaseQuantity = function (index) {

        cart[index].quantity++;

        updateCart();

    };


    /* =========================================
       DECREASE QUANTITY
    ========================================= */

    window.decreaseQuantity = function (index) {

        if (cart[index].quantity > 1) {

            cart[index].quantity--;

        } else {

            cart.splice(index, 1);

        }

        updateCart();

    };


    /* =========================================
       REMOVE PRODUCT
    ========================================= */

    window.removeFromCart = function (index) {

        cart.splice(index, 1);

        updateCart();

    };


    /* =========================================
       WHATSAPP ORDER
    ========================================= */

    const orderButton =
        document.querySelector("#order-button");


    orderButton.addEventListener("click", function () {

        if (cart.length === 0) {

            alert(
                "Please pehle cart mein product add karein 🛒"
            );

            return;
        }


        let message =
            "Namaste Shiv Kerana General Store! 👋%0A%0A" +
            "Mujhe ye products order karne hain:%0A%0A";


        cart.forEach(function (item) {

            message +=
                "• " +
                item.name +
                " × " +
                item.quantity +
                " = ₹" +
                (item.price * item.quantity) +
                "%0A";

        });


        let total = cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


        message +=
            "%0A💰 Total: ₹" +
            total +
            "%0A%0A" +
            "Please order confirm kar dijiye. 🙏";


        /*
        IMPORTANT:
        Neeche APNA WHATSAPP NUMBER dalein.

        Example:
        919918082460

        India ke liye 91 lagana hai.
        + ya spaces mat lagana.
        */

        const phoneNumber = "919918082460";


        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            message;


        window.open(
            whatsappURL,
            "_blank"
        );

    });


    /* =========================================
       INITIAL CART
    ========================================= */

    updateCart();

});
```
