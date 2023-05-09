parametres();
if(un == 1) afficher_le_premier_element();
(fast == 0)? fastAndFurious() : myLoop();

function myLoop() {       
    setTimeout(function() {   
        etude_des_spirales_ulam_atomes();
        nombre = nombre + 1;            
        if (nombre < max) {myLoop();}                       
    }, time)
}

function fastAndFurious(){
    while(nombre < max){
        etude_des_spirales_ulam_atomes();
        nombre = nombre + 1;   
    }
}

                  
function etude_des_spirales_ulam_atomes(){

    algorithmes_Ulam();

    if(afficher_la_serie_des_nombres == 'N'){
        if(premier_coloree_dans_N == 1){
            couleur_Triangle = 'black';
            couleur_Carre = 'black';
            couleur_Hexagone = 'black';
            crible_de_primalite_du_nombre(); 
            if (isItPrime == 'Yes'){
                couleur_Triangle = 'red';
                couleur_Carre = 'red';
                couleur_Hexagone = 'red';
                rang_Prime += 1;
            }
        }
        edition();
    }
    if(afficher_la_serie_des_nombres == 'P'){
        crible_de_primalite_du_nombre(); 
        if (isItPrime == 'Yes'){
            edition();
            rang_Prime += 1;
        }
    }

    fin();

    if(effacer_au_fur_et_a_mesure > 0){
        setTimeout(effacement,time*effacer_au_fur_et_a_mesure);
    }
    
}

function algorithmes_Ulam(){
    ulam_carre();
    ulam_Hexa();
    
    if (atomiqueOuMoleculaire == 'atomique'){ulam_Tri_atomique();}
    if (atomiqueOuMoleculaire == 'moleculaire'){ulam_Tri_moleculaire();}
}

function effacement(){
    document.getElementById("atome_A").remove();
}

function edition(){
    if (afficher_triangle == 1){
        vect_Tri = 'translateX(' + coord_Tri_X + 'px) translateY(' + coord_Tri_Y +'px)';
        if (atomiqueOuMoleculaire == 'moleculaire' && dualite == 1){
            if (polarite == 'haut') {couleur_Triangle = 'red';}
            if (polarite == 'bas') {couleur_Triangle = 'blue';}
        }
        edition_atome(vect_Tri, couleur_Triangle);
    }
    if(afficher_carre == 1){
        vect_Carre = 'translateX(' + coord_Cube_X + 'px) translateY(' + coord_Cube_Y +'px)';
        edition_atome(vect_Carre, couleur_Carre);
    }
    if(afficher_hexagone == 1){
        vect_Hexa = 'translateX(' + coord_Hexa_X + 'px) translateY(' + coord_Hexa_Y +'px)';
        edition_atome(vect_Hexa, couleur_Hexagone);
    }
    if(afficher_somme == 1){fusion();}
    if(afficher_yyy == 1){somme_yyy();}
    if(afficher_aire == 1){somme_aire();}
    if(afficher_un_volume_special == 1){volume_special();}
    
    // if(afficher_la_conversion_triangle_cercle == 1){
    //     conversion_en_cercle(coord_Tri_X, coord_Tri_Y, nombre);
    // }
    // if(afficher_la_conversion_carre_cercle == 1){
    //     conversion_en_cercle(coord_Cube_X, coord_Cube_Y, nombre);
    // }
    // if(afficher_la_conversion_hexagone_cercle == 1){
    //     conversion_en_cercle(coord_Hexa_X, coord_Hexa_Y, nombre);
    // }

    if(afficher_la_conversion_triangle_cercle == 1){
        conversion_en_cercle(coord_Tri_X, coord_Tri_Y, nombre, couleur_Triangle);
    }
    if(afficher_la_conversion_carre_cercle == 1){
        conversion_en_cercle(coord_Cube_X, coord_Cube_Y, nombre, couleur_Carre);
    }
    if(afficher_la_conversion_hexagone_cercle == 1){
        conversion_en_cercle(coord_Hexa_X, coord_Hexa_Y, nombre, couleur_Hexagone);
    }

}

function fin(){
    niveau_carre = niveau_carre + 1;
    niveau_Hexa = niveau_Hexa + 1;
    niveau_Tri = niveau_Tri + 1;
}


function afficher_le_premier_element(){
    if(afficher_la_serie_des_nombres == 'N'){
        nombre = 1; edition(); nombre = 2;
    }
}

