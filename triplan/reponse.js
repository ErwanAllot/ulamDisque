function conversion_en_cercle(abscisse, ordonnee, nombre, couleur){
    // function conversion_en_cercle(){
    echo = document.getElementById('echo');
    
    rayon = Math.sqrt(nombre*314);
    // echo.innerHTML += rayon + '<br>';

    correspondance(abscisse, ordonnee, rayon, couleur);
}

function correspondance(abscisse, ordonnee, rayon, couleur){
    if(abscisse == 0){
        if(ordonnee >= 0){
            conversion_x = abscisse; 
            conversion_y = rayon;
        }
        else {
            conversion_x = abscisse; 
            conversion_y = (-1 * rayon);
        }
    }
    else if(ordonnee == 0){
        if(abscisse >= 0){
            conversion_x = rayon; 
            conversion_y = ordonnee;
        }
        else {
            conversion_x = (-1 * rayon); 
            conversion_y = ordonnee;
        }
    }
    else{
        coefficient = ordonnee / abscisse;
        second_degre = coefficient**2 + 1;
        zero_degre = - (rayon**2);
        delta =  0 - 4 * second_degre * zero_degre;

        x_1 = (0 + Math.sqrt(delta)) / (2 * second_degre);
        y_1 = x_1 * coefficient;

        x_2 = (0 - Math.sqrt(delta)) / (2 * second_degre);
        y_2 = x_2 * coefficient;

        if((Math.sign(x_1) == Math.sign(abscisse))){
            conversion_x = x_1; 
            conversion_y = y_1;
        }
        else{
            conversion_x = x_2; 
            conversion_y = y_2;
        }        
    }
    // conversion_x && conversion_y 
    vecteur = 'translateX(' + conversion_x + 'px) translateY(' + conversion_y +'px)';
    // edition_atome(vect_Cercle, 'green');
    // couleur = 'black';
    edition_atome(vecteur, couleur);
}