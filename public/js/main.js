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

//Listener de resolucion
var isDesktop = window.matchMedia("(min-width: 1024px)")
var isTablet = window.matchMedia("(min-width: 768px)")
var screenWidth = screen.width

//Boolean para que, en la version web, se pueda cerrar la pantalla de detalles volviendo a apretar el boton
var detailsScreenActive = false

//begin
if(screenWidth < 1024){
        productDetailsScreen.style.display = 'none'
}else{
        productListScreen.style.display = 'none'
        exitProductDetailsScreen.style.display = 'none'
}

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
        //desktop
        productListScreen.style.display = 'block'
        noItemsScreen.style.display = 'none'
})


function click_product(elem){
        if(detailsScreenActive == true){
                productDetailsScreen.style.display = 'none'
                detailsScreenActive = false
        }
        else{
                if(screenWidth < 1024){
                        productListScreen.style.display = 'none'
                        productDetailsScreen.style.display = 'block'
                }else{                
                        productDetailsScreen.style.display = 'inline'
                        detailsScreenActive = true
                }
        }

        productDetailsScreen__img.src = elem.parentNode.getAttribute('data-icon')
        productDetailsScreen__name.innerHTML = elem.parentNode.getAttribute('data-name')
        productDetailsScreen__description.innerHTML = elem.parentNode.getAttribute('data-info')
}

exitProductDetailsScreen.addEventListener('click',function (){
        productDetailsScreen.style.display = 'none'
        productListScreen.style.display = 'block'
})
//end

