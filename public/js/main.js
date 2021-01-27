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
const exitProductDetailsScreenButton = document.getElementById("productDetailsScreen__exitButton")

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

//Variable para mantener el ultimo producto clickeado
var lastProduct

//begin
if(screenWidth < 1024){
        productDetailsScreen.style.display = 'none'
}else{
        productListScreen.style.display = 'none'
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
        //nuevo producto
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
        
        //Si la pantalla es tablet o desktop al momento de pedir mas info
        if(screenWidth >= 768){
                // se borra el boton
                exitProductDetailsScreenButton.style.display = 'none'
                if(detailsScreenActive){
                        //Si apreta el MISMO boton devuelta, cierra la pantalla, si no actualiza los datos
                        if(elem.parentNode == lastProduct){
                                productDetailsScreen.style.display = 'none'
                                detailsScreenActive = false 
                        }
                }else{
                        //si la pantalla no esta activa, la abre
                        productDetailsScreen.style.display = 'block' 
                        detailsScreenActive = true 
                }
        }else{
                //si al MOMENTO DE INVOCAR es mobile, aparece el boton. Esta asignacion se podria saltear si el usuario durante
                //la sesion conserva el dispositivo
                productDetailsScreen.style.display = 'block' 
                exitProductDetailsScreenButton.style.display = 'block'
        }
        
        lastProduct = elem.parentNode
        productDetailsScreen__img.src = elem.parentNode.getAttribute('data-icon')
        productDetailsScreen__name.innerHTML = elem.parentNode.getAttribute('data-name')
        productDetailsScreen__description.innerHTML = elem.parentNode.getAttribute('data-info')
}

exitProductDetailsScreenButton.addEventListener('click',function (){
        productDetailsScreen.style.display = 'none'
        productListScreen.style.display = 'block'
})
//end

