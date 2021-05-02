import GenerateCPF from "./GenerateCPF";
import "../public/css/style.css";

(function() {
    const cpf = new GenerateCPF();
    const span = document.querySelector(".cpf");
    const generate = document.querySelector(".generate");

    span.innerHTML = cpf.generate();

    generate.addEventListener( "click", () => {
        const newCPF = cpf.generate();
        span.innerHTML = newCPF;
    } )
})()
