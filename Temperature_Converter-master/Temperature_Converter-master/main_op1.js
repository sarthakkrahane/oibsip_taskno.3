
const calcButton = document.getElementById('botonCalculator');
calcButton.addEventListener('click', convert);

function convert() {

    let unit= document.getElementById('unidad').value;
    let temp = document.getElementById('temperatura').value;
    let result = document.getElementById('result');

    if (unit=='Celcius') {
        
        result.innerHTML = `${temp} °C, equals to ${convertCelcius(temp).toFixed(2)} °F`; 

    } else {

        result.innerHTML = `${temp} °F, equals to ${convertFar(temp).toFixed(2)} °C`;

    }

}

function convertCelcius(temp) {

    return (temp * (9 / 5)) + 32
    
} 

function convertFar(temp) {

    return (temp - 32) * (5 / 9)

}


