// getting all requred Element 
const inputbox = document.querySelector(".inputfiled input")
const addBtn = document.querySelector(".inputfiled button")
const toboList = document.querySelector(".todolist")
const deledtAllBtn = document.querySelector(".footer button")
inputbox.onkeyup = ()=>{
let userData = inputbox.value; //getting User entered value 
if(userData.trim() != 0){ //If user Values arenot only Space يعني لو مفيش مسافات في كلام 
addBtn.classList.add("active") //active The Add Button 
}else{
   addBtn.classList.remove("active")//unactive The Add Button 
}

}
showTasks()// callling showTasks Function

// if user Click On The Add Botton   لو المستخدم ضغط عل أضافه 
addBtn.onclick = () =>{
    let userData =inputbox.value; //getting User entered value 
    let getLocalStorage = localStorage.getItem("New Tobo");// getting LocalStorage
    
    if (getLocalStorage == null){ //if localStorage Empet  لو اللوكل استوردج فضيه 

        listarr =[]//Create Blank Array 
    }else{

        listarr = JSON.parse(getLocalStorage)//transforming js string to Json Opject
    }
    listarr.push(userData) //push Or Adding User Data   

localStorage.setItem("New Tobo", JSON.stringify(listarr))//transforming js Opject to Json String

showTasks()// callling showTasks Function
addBtn.classList.remove("active")//unactive The Add Button 
}


//function  to add tasks list in side ul  
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Tobo");// getting LocalStorage
    if (getLocalStorage == null){ //if localStorage Empet  لو اللوكل استوردج فضيه 

        listarr =[]//Create Blank Array 
    }else{

        listarr = JSON.parse(getLocalStorage)//transforming js string to Json Opject
    }if(listarr.length > 0){//if listarr length greater then 0
    deledtAllBtn.classList.add("active")// add class active 
    }else{
        deledtAllBtn.classList.remove("active")//remove  class active 
    }
    const pendingNumber = document.querySelector(".bendingNumber")
    pendingNumber.textContent =  listarr.length;//passing the lenght value in pendingNumber
let newliTag = "";
listarr.forEach((element,index )=> {
    newliTag +=`<li> ${element} <span onclick="deletetask(${index})" ><ion-icon name="trash-outline"></ion-icon></span></li>`
});
toboList.innerHTML = newliTag // Adding New Li Tag To Ul Tag
inputbox.value = "";//once task add leave the imput filed blonk
}


// delete task function 
function deletetask(index){

    let getLocalStorage = localStorage.getItem("New Tobo");// getting LocalStorage
    listarr = JSON.parse(getLocalStorage)//transforming js string to Json Opject
    listarr.splice(index, 1)//delete or REmove the particule indexed li 
//after remove the  li again updata the local storage

    localStorage.setItem("New Tobo", JSON.stringify(listarr))//transforming js Opject to Json String

showTasks()// callling showTasks Function

}
// delete all tasks function 
deledtAllBtn.onclick= () =>{

listarr=  []// empet an array 
//after delete all tasks  again updata the local storage

localStorage.setItem("New Tobo", JSON.stringify(listarr))//transforming js Opject to Json String

showTasks()// callling showTasks Function


}


