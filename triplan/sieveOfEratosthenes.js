function crible_de_primalite_du_nombre(){
    numberStudied = nombre;
    (numberStudied < 2) ? isItPrime = 'No' : (numberStudied == 2) ? isItPrime = 'Yes' :
    sieveOfEratosthenes(numberStudied);
}

function sieveOfEratosthenes (numberStudied){
        squareRoot = Math.floor(Math.sqrt(numberStudied))
        divisorModulus6 = 'Ã˜' ; divisor = 2
        do{
            remainder = numberStudied % divisor
            if (divisor > 3){
                (divisorModulus6 == 1) ? divisor += 4 : divisor += 2;
                (divisorModulus6 == 1) ? divisorModulus6 = 5 : divisorModulus6 = 1
            }
            if (divisor == 3) divisor = 5
            if (divisor == 2) divisor = 3
        }
        while ( divisor <= squareRoot && remainder != 0)
        (remainder == 0) ? isItPrime = 'No' : isItPrime = 'Yes'
}


// function nombrePremier(){
//     premierValide = 0;
//     for (j = 2; j < Math.sqrt(nombre); j++){
//         if (nombre % j === 0) break;
//         else if(j + 1 > Math.sqrt(nombre)){premierValide = 1;}
//     }
//     if (nombre == 2 || nombre == 3){premierValide = 1;}
// }