const productList = document.getElementById("product_List")
const emptyProductListMessage = document.getElementById("noItemsMessage")
const addProductButton = document.getElementById("addProductButton")
const addProductScreen = document.getElementById("addProductScreen")

let currentScreen = "productList"
let cantProductos = 0

// funciones
//cambios de estado

function enable(id){
        if (id=="productList" || id=="addProductScreen"){
                id.style.display = "flex"
        }else{
                id.style.display = "inherit"
        }
}

function disable(id){
        id.style.display = "none"
}

function goAddProductScreen(){
        alert("in")
        disable(productList)
        disable(emptyProductListMessage)
        enable(addProductScreen)
}

// iniciar aplicacion
emptyProductListMessage.style.display = "flex"
addProductButton.style.display = "inherit"




