const myImage = document.querySelector("img");

    //imagem do gato que muda ao clicar

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "site/imagens/gato2.jpg") {
        myImage.setAttribute("src","site/imagens/gato1.jpg");
    }else{
        myImage.setAttribute("src","site/imagens/gato2.jpg");
    }
};

    //declaração de variaveis

let myButton = document.querySelector("button");
let myHeading =document.querySelector("h1");

    //saudação personalizada

    function setUserName(){
        const myName = prompt("Por favor, digite o seu nome");
        if(!myName){
            setUserName();
        }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = `Cuzinho de casada, ${myName}`;
        }
    }

    //Inicialização

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cuzinho de casada, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};