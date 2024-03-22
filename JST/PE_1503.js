function calcFact() {
    let f = document.getElementById('f').value;
    let contador = 0; let operacion;

    for (let i = f; i <= 0; i--) {
        operacion = 0;
        operacion = i * (i - 1)
        contador = contador + operacion
    }
    document.getElementById("r1").innerHTML = contador;
}


function calcPot(){
    let t = document.getElementById('t').value;
    let t2 =document.getElementById('t2').value;
    let r = 0;

    for (let i = 0; i <= t2; i++) {
        r = t * t;
    }
    document.getElementById("r2").innerHTML = r;
}


/* Según yo lo ve, deberían funcionar pero no funcionan */

