let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("please Enter Task")
    }else{
        let newElement = document.createElement("ul");
        newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElement.remove()
        }
    }
}
