//Pantallas
const noItemsScreen = document.getElementById("noItemsScreen")
const productListScreen = document.getElementById("productListScreen")
const productDetailsScreen = document.getElementById("productDetailsScreen")

//modal
var addProductScreen = new bootstrap.Modal(document.getElementById('addProductScreen'), {})

//Botones
const addProductButton = document.getElementById("addProductButton")
const cancelProductButton = document.getElementById("cancelProductButton")
const saveProductButton = document.getElementById("saveProductButton")
const exitProductDetailsScreen = document.getElementById("productDetailsScreen__exitButton")

//Campos
const productDetailsScreen__img = document.getElementById("productDetailsScreen__img")
const productDetailsScreen__name = document.getElementById("productDetailsScreen__name")
const productDetailsScreen__description = document.getElementById("productDetailsScreen__description")

//Inputs
let prouctNameField = document.getElementById("prouctNameTextField")
let productTypeSelectField = document.getElementById("productTypeSelect")
let productDescriptionField = document.getElementById("productDescription")

//List
let productList = document.getElementById("productListScreen__list")

//begin
let savedProduct = saveProductButton.addEventListener('click', function() {
        //Inputs
        let prouctNameInput= prouctNameField.value
        let productTypeSelectInput = productTypeSelectField.value
        let productDescriptionInput = productDescriptionField.value
        //Borrado de campos
        prouctNameField.value = ''
        productTypeSelectField.selectedIndex = 0
        productDescriptionField.value = ''
        //Cerrado el modal
        addProductScreen.hide()
        let newProduct = `<li data-name="${prouctNameInput}" 
                              data-icon="${productTypeSelectInput}" 
                              data-info="${productDescriptionInput}" 
                              class="list-group-item productListScreen__item" >
                                <img class="productListScreen__img" 
                                     src="${productTypeSelectInput}" 
                                     alt="${prouctNameInput}">
                                <p class="productListScreen__name">${prouctNameInput}</p>
                                <button onclick="click_product(this)" 
                                        type="button" 
                                        class="btn btn-success" 
                                        id="productListScreen__detailButton">i
                                </button>
                          </li>`
        productList.innerHTML += newProduct
        noItemsScreen.style.display = 'none'
        productListScreen.style.display = 'block'
})


function click_product(elem){
        productListScreen.style.display = 'none'
        productDetailsScreen.style.display = 'block'
        productDetailsScreen__img.src = elem.parentNode.getAttribute('data-icon')
        productDetailsScreen__name.innerHTML = elem.parentNode.getAttribute('data-name')
        productDetailsScreen__description.innerHTML = elem.parentNode.getAttribute('data-info')
}

exitProductDetailsScreen.addEventListener('click',function (){
        productDetailsScreen.style.display = 'none'
        productListScreen.style.display = 'block'
})
//end