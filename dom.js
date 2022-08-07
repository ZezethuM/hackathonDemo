const inputMessage = document.querySelector(".inputMessage");
const inputMessage2 = document.querySelector(".motiva")
const shareButton = document.querySelector(".shareButton");
const messages = document.querySelector(".messages");
const motiv = document.querySelector(".motiv")
const btns = document.querySelector(".btns");

let array = localStorage.getItem("mes") ? JSON.parse(localStorage.getItem("mes")) : [];
for(i = 0; i < array.length; i++){
    let list = document.createElement('li');
    list.textContent = array[i];
    messages.appendChild(list);
}
let newArray = localStorage.getItem("mesa") ? JSON.parse(localStorage.getItem("mesa")) : [];
for(i = 0; i < newArray.length; i++){
    let list2 = document.createElement('li');
    list2.textContent = newArray[i];
    motiv.appendChild(list2);
}
shareButton.addEventListener("click", function(){
    const message = inputMessage.value;
    array.push(message);   
    localStorage.setItem('mes',JSON.stringify(array));
    let list = document.createElement('li');
    list.textContent = message;
    messages.appendChild(list);

    
});
shareButton.addEventListener("click",function(event){
    event.preventDefault();
    inputMessage.value="";
})
btns.addEventListener("click",function(event){
    event.preventDefault();
    inputMessage2.value="";
})
btns.addEventListener("click", function(){
    const message2 = inputMessage2.value;
    newArray.push(message2);
    localStorage.setItem('mesa',JSON.stringify(newArray));
    let list2 = document.createElement('li');
    list2.textContent = message2;
    motiv.appendChild(list2);
})