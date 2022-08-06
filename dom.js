const inputMessage = document.querySelector(".inputMessage");
const inputMessage2 = document.querySelector(".motiva")
const shareButton = document.querySelector(".shareButton");
const messages = document.querySelector(".messages");
const motiv = document.querySelector(".motiv")
const btns = document.querySelector(".btns");


shareButton.addEventListener("click", function(){
    const message = inputMessage.value;
    
    let list = document.createElement('li');
    list.textContent = message;
    messages.appendChild(list);

    
});
shareButton.addEventListener("click",function(event){
    event.preventDefault();
    inputMessage.value="";
})
shareButton.addEventListener("click",function(event){
    event.preventDefault();
    inputMessage2.value="";
})
btns.addEventListener("click", function(){
    const message2 = inputMessage2.value;

    let list2 = document.createElement('li');
    list2.textContent = message2;
    motiv.appendChild(list2);
})