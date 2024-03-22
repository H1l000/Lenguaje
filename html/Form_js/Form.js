function sumador() {
    let dd1 = document.getElementById('d1').value;
    let dd2 = document.getElementById('d2').value;
    document.getElementById("res").innerHTML = parseInt(dd1) + parseInt(dd2);
}

function divisor() {
    let rr1 = document.getElementById('r1').value;
    let rr2 = document.getElementById('r2').value;

    if (parseInt(rr1) > 0) {
        document.getElementById("ress").innerHTML = parseInt(rr1) / parseInt(rr2);
    }
    else {
        alert("Aquí no es posible dividir con 0 o con números negativos");
    }
}

function ecuacion2() {
    let rr1 = parseFloat(document.getElementById('e1').value);
    let rr2 = parseFloat(document.getElementById('e2').value);
    let rr3 = parseFloat(document.getElementById('e3').value);
    let laraiz = Math.sqrt(Math.pow(rr2, 2) - 4 * rr1 * rr3);
    let xP, xD;
    if (laraiz > 0) {
        xP = (-rr2 + laraiz) / (2 * rr1);
        xD = (-rr2 - laraiz) / (2 * rr1);
    }
    else if (laraiz < 0) {
        laraiz = 0;
        xP = (-rr2 + laraiz) / (2 * rr1);
        xD = (-rr2 - laraiz) / (2 * rr1);
    }

    document.getElementById("resss").innerHTML = xP;
    document.getElementById("ressss").innerHTML = xD;
}


function ejercicioDeLosArrays() {
    let alumnos1 = ["Juan", "Hilario", "Omar", "Fabiolo", "Capo"];
    let alumnos2 = ["Kevin", "Juan", "Suman", "Irene", "Fabiolo"];
    let alumnos3 = ["Juan", "Hilario", "Brais", "Isaac", "Fabiolo"];
    let alumnos4 = ["Hilario", "Antonio", "Juan", "Suman", "Juanvi"]

    let rj1 = document.getElementById('rj1').value;
    let rj2 = document.getElementById('rj2').value;
    let a1 = document.getElementById('A1').textContent;

    let coincidencias = [];
    console.log("Antes del primer if: rj1 = " + rj1 + " a1: " + a1);

    if (rj1 === "1" && rj2 === "2" || rj1 === "2" && rj2 === "1") {

        for (let i = 0; i < alumnos1.length; i++) {
            for (let j = 0; j < alumnos2.length; j++) {
                if (alumnos1[i] === alumnos2[j]) {

                    coincidencias.push(alumnos1[i]);
                }
            }
        }
    }

    else if (rj1 === "1" && rj2 === "3" || rj1 === "3" && rj2 === "1") {

        for (let i = 0; i < alumnos1.length; i++) {
            for (let j = 0; j < alumnos3.length; j++) {
                if (alumnos1[i] === alumnos3[j]) {
                    coincidencias.push(alumnos1[i]);
                }
            }
        }
    }

    else if (rj1 === "1" && rj2 === "4" || rj1 === "4" && rj2 === "1") {

        for (let i = 0; i < alumnos1.length; i++) {
            for (let j = 0; j < alumnos4.length; j++) {
                if (alumnos1[i] === alumnos4[j]) {
                    coincidencias.push(alumnos1[i]);
                }
            }
        }
    }

    else if (rj1 === "2" && rj2 === "3" || rj1 === "3" && rj2 === "2") {

        for (let i = 0; i < alumnos2.length; i++) {
            for (let j = 0; j < alumnos3.length; j++) {
                if (alumnos2[i] === alumnos3[j]) {
                    coincidencias.push(alumnos2[i]);
                }
            }
        }
    }

    else if (rj1 === "2" && rj2 === "4" || rj1 === "4" && rj2 === "2") {

        for (let i = 0; i < alumnos2.length; i++) {
            for (let j = 0; j < alumnos4.length; j++) {
                if (alumnos2[i] === alumnos4[j]) {
                    coincidencias.push(alumnos2[i]);
                }
            }
        }
    }

    else if (rj1 === "3" && rj2 === "4" || rj1 === "4" && rj2 === "3") {

        for (let i = 0; i < alumnos3.length; i++) {
            for (let j = 0; j < alumnos4.length; j++) {
                if (alumnos3[i] === alumnos4[j]) {
                    coincidencias.push(alumnos3[i]);
                }
            }
        }
    }

    else if (rj1 === "1" && rj2 === "1") {
        for (let i = 0; i < alumnos1.length; i++) {
            coincidencias.push(alumnos1[i]);
        }
    }

    else if (rj1 === "2" && rj2 === "2") {
        for (let i = 0; i < alumnos2.length; i++) {
            coincidencias.push(alumnos2[i]);
        }
    }

    else if (rj1 === "3" && rj2 === "3") {
        for (let i = 0; i < alumnos3.length; i++) {
            coincidencias.push(alumnos3[i]);
        }
    }

    else if (rj1 === "4" && rj2 === "4") {
        for (let i = 0; i < alumnos4.length; i++) {
            coincidencias.push(alumnos4[i]);
        }
    }
    document.getElementById("ResultadoArrays").innerHTML = coincidencias;
}


function hacerCuadrado() {
    let c2 = document.getElementById('c2').value;
    let contador = 0;
    if (parseInt(c2) > 0) {
 
        for (let i = 0; i <= c2; i++) {
                contador++;
            for (let i = 0; i <= c2; i++) {
                if (contador === c2){
                    document.getElementById("cuadrado").innerHTML = "<br>";
                }
  document.getElementById("cuadrado").innerHTML += "*";   
    }
}
    }
}

