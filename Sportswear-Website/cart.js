const data = [
    {
        productName: "Áo Đi Biển Adidas",
        brand: "Adidas",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 1,
    },
    {
        productName: "Áo Louis Vuitton",
        brand: "Louis Vuitton",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 2,
    },
    {
        productName: "Áo Đi Biển Gucci",
        brand: "Gucci",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 3,
    },
    {
        productName: "Áo Hermès",
        brand: "Hermès",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 4,
    },
    {
        productName: "Áo Đi Biển Prada",
        brand: "Prada",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 5,
    },
    {
        productName: "Áo Phông Chanel",
        brand: "Chanel",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 6,
    },
    {
        productName: "Áo Nam Versace",
        brand: "Versace",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 7,
    },
    {
        productName: "Áo Balenciaga",
        brand: "Balenciaga",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 8,
    },
    {
        productName: "Áo Nam Fila",
        brand: "Fila",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 9,
    },
    {
        productName: "Áo Moschino",
        brand: "Moschino",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 10,
    },
    {
        productName: "Áo Christian Dior",
        brand: "Christian Dior",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 11,
    },
    {
        productName: "Áo Burberry",
        brand: "Burberry",
        quantity: 1,
        price: "10.000.000đ",
        pattern: "T-Shirt",
        id: 12,
    },
]


const tbody = document.querySelector("tbody");
const ip = document.querySelectorAll("input");
document.querySelector(".btn-update").setAttribute("disabled" ,true);

function init() {

    if(localStorage.getItem("data")) {
        const data = JSON.parse(localStorage.getItem("data"));
        renderHTML(data);
        return;
    }
    localStorage.setItem("data",JSON.stringify(data));
    renderHTML(data);
}

function renderHTML(arr) {
//     let html = "";
//     for (const product of arr) {
//     html += ` <tr>
//     <th scope="row">${product.id}</th>
//     <td>${product.productName}</td>
//     <td>${product.brand}</td>
//     <td>${product.quantity}</td>
//     <td>${product.price}</td>
//     <td>${product.pattern}</td>
//     <td>
//       <button type="button" class="btn btn-success" style="margin-top: 5px;"onclick="editProduct(${product.id})">Edit</button>
//     </td>
//     <td>
//       <button type="button" class="btn btn-danger"style="margin-top: 5px;"onclick="deleteProduct(${product.id})">Remove</button>
//     </td>
//   </tr>
//     `;
// }


// tbody.innerHTML = html;

/// Hàm cấp cao
 const html = arr.map((product)=> {
    return ` <tr>
    <th scope="row">${product.id}</th>
    <td><a href="./product.html">${product.productName}</a></td>
    <td>${product.brand}</td>
    <td>${product.quantity}</td>
    <td>${product.price}</td>
    <td>${product.pattern}</td>
    <td>
      <button type="button" class="btn btn-success" style="margin-top: 5px;"onclick="editProduct(${product.id})">Edit</button>
    </td>
    <td>
      <button type="button" class="btn btn-danger"style="margin-top: 5px;"onclick="deleteProduct(${product.id})">Remove</button>
    </td>
  </tr>
    `;
 })
 tbody.innerHTML = html.join("");
}

//// Delete
function deleteProduct(id) {
    const index = data.findIndex((product)=> {
        return product.id == id
    })
    data.splice(index,1);
    localStorage.setItem("data",JSON.stringify(data));
    renderHTML(data);
}
///// Add Product
function addProduct() {
   
    const newProduct = {
        productName: ip[0].value,
        brand: ip[1].value,
        quantity: ip[2].value,
        price: ip[3].value,
        pattern: ip[4].value,
        id: data.length+1,
    }
    data.push(newProduct);

    

    renderHTML(data);
        ip[0].value = "",
        ip[1].value = "",
        ip[2].value = "",
        ip[3].value = "",
        ip[4].value = ""
}

function getIndex(id) {
    let index = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            index = i;
            break;
        }
    }
    return index;
}

/// Edit Product
function editProduct(id) {
    let index = getIndex(id);
    const {productName, brand, quantity, price, pattern} = data[index];
    ip[0].value = productName,
    ip[1].value = brand,
    ip[2].value = quantity,
    ip[3].value = price,
    ip[4].value = pattern


    ip[5].value = index;

    document.querySelector(".btn-update").removeAttribute("disabled");
    document.querySelector(".btn-add").setAttribute("disabled" ,true);
}

/// Update Product
function updateProduct() {

    
    let index = ip[5].value;
    data[index].productName = ip[0].value;
    data[index].brand = ip[1].value;
    data[index].quantity = ip[2].value;
    data[index].price = ip[3].value;
    data[index].pattern = ip[4].value;
    
    ip[5].value = "";
    renderHTML(data);
        ip[0].value = "",
        ip[1].value = "",
        ip[2].value = "",
        ip[3].value = "",
        ip[4].value = ""
    document.querySelector(".btn-add").removeAttribute("disabled");
    document.querySelector(".btn-update").setAttribute("disabled" ,true);

}
init();