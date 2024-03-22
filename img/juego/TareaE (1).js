function dados() {
    let contadorRondas = 0; let dd1 = 0; let dd2 = 0; let num = 0; let cont11 = -1; let cont22 = -1;
    let cont33 = -1; let cont44 = -1; let cont55 = -1; let cont66 = -1;

    let d1 = parseFloat(document.getElementById('player1').value);
    dd1 = 12 - d1;
    let d2 = parseFloat(document.getElementById('player2').value);
    dd2 = 12 - d2;

    if (contadorRondas <= 3) {

        if (dd1 >= 0 && dd2 >= 0) {
            contadorRondas++;
        } else {
            alert("Escoger correctamente la cantidad de dados, por favor");
        }

    } else {
        alert("3 rondas completadas, el gandor es: ")
    }

    for (let j = 0; j < d1; j++) {
        num = 0;
        for (let i = 0; i < 6; i++)
            num = (Math.floor(Math.random() * 6) + 1);
    
        document.getElementById("D11").innerHTML = num;
        if (num === 1) {
            document.getElementById("D11").innerHTML = '<img src="../../img/tareaE/DADO1.png">';
        }
            else if (num === 2) {
                document.getElementById("D22").innerHTML = '<img src="../../img/tareaE/DADO2.png">';
            
            }
            else if (num === 3) {
                document.getElementById("D33").innerHTML = '<img src="../../img/tareaE/DADO3.png">';
            }
            else if (num === 3) {
                document.getElementById("D44").innerHTML = '<img src="../../img/tareaE/DADO4.png">';
        }
    
    }
    }

    for (let k = 0; k < d1; k++) {
        num = 0;
        for (let h = 0; h < 6; h++)
            num = (Math.floor(Math.random() * 6) + 1);
        document.getElementById("Resultados2").innerHTML = num;

    }


