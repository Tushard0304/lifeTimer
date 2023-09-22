let isDOBopen = false;
let DOB ;
const setiEl = document.getElementById("set-i");
const setcEl = document.getElementById("set-c");
const firstcontEl = document.getElementById("firstcont");
const secondcontEl = document.getElementById("secondcont");
const dobinputEl = document.getElementById("dobinput");
const dobbtnEl = document.getElementById("dobbtn");
const yearEl = document.getElementById("years");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");



const toogleDOBselector =  () => {
    
    if(isDOBopen){
        setcEl.classList.add("hide");
    }
    else{
        setcEl.classList.remove("hide");
    }
    isDOBopen = !isDOBopen

};

//toogleDOBselector();

const setDOBhandler = () => {
    DOB = dobinputEl.value;
    if(DOB){
        firstcontEl.classList.add("hide") 
        secondcontEl.classList.remove("hide")

    }
    else{
        firstcontEl.classList.remove("hide") 
        secondcontEl.classList.add("hide")
    }
}

//setDOBhandler();


const updateAge = () => {
    const currentage = new Date();
    const datediff = currentage - DOB
    const year = Math.floor(datediff / (1000*60*60*24*365))
    const month = Math.floor(datediff / (1000*60*60*24*365))%12
    const day = Math.floor(datediff / (1000*60*60*24))%30
    const hour = Math.floor(datediff / (1000*60*60))%24
    const minute = Math.floor(datediff / (1000*60))%60
    const second = Math.floor(datediff / 1000) % 60

    //yearEl.innerHTML = year;
}
updateAge();


setiEl.addEventListener('click',toogleDOBselector);
dobbtnEl.addEventListener('click',setDOBhandler);


// const tooglesecondcont = () => {
//     if(isDOBopen){
//         secondcontEl.classList.add("hide");
//     }
//     else{
//         secondcontEl.classList.remove("hide");
//     }
//     isDOBopen = !isDOBopen
// }




