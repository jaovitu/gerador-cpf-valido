import GenerateCPF from "./GenerateCPF";
import "../public/css/style.css";

const cpf = new GenerateCPF();
const span = document.querySelector(".cpf");
const generate = document.querySelector(".generate");


function copyButtonConfig() {
    const copyButton = document.querySelector(".copy-icon");
    const copyInfoCard = document.querySelector(".copy-info");

    copyButton.addEventListener("click", event => {
        const textInput = document.createElement("input");
        textInput.value = span.textContent;

        document.body.appendChild(textInput);

        textInput.select()
        document.execCommand("copy");

        document.body.removeChild(textInput);

        copyInfoCard.style.marginRight = "157.5px";
        copyInfoCard.style.backgroundColor = "rgb(140, 230, 140)";
        copyInfoCard.textContent = "Copiado!";
    });

    copyButton.addEventListener("mouseover", event => {
        copyInfoCard.textContent = "Clique para copiar";
        copyInfoCard.style.backgroundColor = "cadetblue";
        copyInfoCard.style.visibility = "visible";
        copyInfoCard.style.marginRight = "131px";
    });

    copyButton.addEventListener("mouseleave", event => {
        copyInfoCard.style.visibility = "hidden";
    })
}

span.innerHTML = cpf.generate();
copyButtonConfig();

generate.addEventListener( "click", () => {
    const newCPF = cpf.generate();
    span.innerHTML = newCPF;
} );
