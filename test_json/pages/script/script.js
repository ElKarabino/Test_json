fetch("products.json")
.then(function(responce){
    return responce.json();
})
.then(function(products){
    let placeholder = document.querySelector(".offer_container");
    let out ="";
    for (let product of products){
        if (product.category == "coffee") {}
        out += `
        <div class="offer_item">
            <div class="offer_item_img_box">
                <img src="${product.img}" alt=${product.name} class="offer_item_img">
            </div>
            <div class="offer_item_text">
                <p class="offer_item_name">${product.name}</p>
                <p class="offer_item_description">${product.description}</p>
                <p class="offer_item_price">${product.price}</p>
            </div>
        </div>
        `;
    }
    placeholder.innerHTML = out;
})