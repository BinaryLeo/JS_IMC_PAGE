const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {//Listening
    e.preventDefault()//prevent to reset;
    const input_peso = e.target.querySelector('#peso');
    const input_altura = e.target.querySelector('#altura');
    const peso = Number(input_peso.value);
    const altura = Number(input_altura.value);
    if (!peso) {
        setresultado('Peso Inválido', false);//if value <> expected, return false
        return;
    }
    if (!altura) {
        setresultado('Altura Inválida', false);//if value <> expected, return false
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu imc é ${imc} (${nivelImc}).`;
    setresultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5]; // inverse
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { //calc the imc
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function create_p() {
    const p = document.createElement('p'); // Create a paragraph
    return p;
}
function setresultado(msg, isValid) {//
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // add element
    const p = create_p();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else{
        p.classList.add('bad'); 
    }
    p.innerHTML = msg; // receive msg
    resultado.appendChild(p);//Insert element inside 'resultado' in html
}