const userList = document.querySelector('.lists');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(products => {
            console.log(products)
            const li = document.createElement('li');
            const img = document.createElement('img')
            img.src = products.image
            img.style.width = "120px"
            li.innerHTML = `
            <div class="li_left"><div class="product-image"><img src ="${products.image}"></div> </div>
            <div class="li_right">
            <div class="product-title"><strong>Title:</strong> ${products.title}</div>
            <div class="product-price"><strong>Price:</strong> ${products.price}</div>
            <div class="product-description"><strong>Description</strong> ${products.description}</div>
            <div class="product-rating"><strong>Rating:</strong> ${products.rating.count} - ${products.rating.rate}</div>
             </div>
          `;
            userList.appendChild(li)

        })
    });