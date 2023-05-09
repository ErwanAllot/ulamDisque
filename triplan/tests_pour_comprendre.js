
// plus tard; étude de la moyenne_____________
function fusion(){
    fusX = (coord_Cube_X + coord_Hexa_X + coord_Tri_X);
    fusY = (coord_Cube_Y + coord_Hexa_Y + coord_Tri_Y);
    vect_Fusion = 'translateX(' + fusX + 'px) translateY(' + fusY +'px)';
    
    if (atomiqueOuMoleculaire == 'moleculaire' && dualite == 1){
        if (polarite == 'haut') {couleur_Triangle = 'red';}
        if (polarite == 'bas') {couleur_Triangle = 'blue';}
    }
    edition_atome(vect_Fusion, couleur_Triangle);
    
}

function somme_yyy(){

    xxx = coord_Tri_X + coord_Cube_X + coord_Hexa_X;
    yyy = coord_Tri_Y + coord_Cube_Y + coord_Hexa_Y;

    vect_somme_aire = 'translateX(' + rang_Prime + 'px) translateY(' + yyy +'px)';
    if (atomiqueOuMoleculaire == 'moleculaire' && dualite == 1){
        if (polarite == 'haut') {couleur_Triangle = 'red';}
        if (polarite == 'bas') {couleur_Triangle = 'blue';}
    }
    edition_atome(vect_somme_aire, couleur_Triangle);
    
}

function somme_aire_a_remettre(){ //triangle
    aire_Tri = Math.sqrt(coord_Tri_X*coord_Tri_X + coord_Tri_Y*coord_Tri_Y);
    aire_Totale = aire_Tri;
    aire_Totale = Math.round(aire_Totale);

    vect_somme_aire = 'translateX(' + rang_Prime*10 + 'px) translateY(' + aire_Totale +'px)';

    if (atomiqueOuMoleculaire == 'moleculaire' && dualite == 1){
        if (polarite == 'haut') {couleur_Triangle = 'red';}
        if (polarite == 'bas') {couleur_Triangle = 'blue';}
    }
    edition_atome(vect_somme_aire, couleur_Triangle);
    
}


function somme_aire(){ //triangle
    aire_Tri = Math.sqrt(coord_Tri_X*coord_Tri_X + coord_Tri_Y*coord_Tri_Y);
    aire_Hexagone = Math.sqrt(coord_Hexa_X**2 + coord_Hexa_Y**2);
    aire_Carre = Math.sqrt(coord_Cube_X**2 + coord_Cube_Y**2);

    aire_Totale = aire_Tri + aire_Hexagone + aire_Carre;
    aire_Totale = Math.round(aire_Totale);


    vect_somme_aire = 'translateX(' + nombre*5 + 'px) translateY(' + aire_Totale +'px)';

    if (atomiqueOuMoleculaire == 'moleculaire' && dualite == 1){
        if (polarite == 'haut') {couleur_Triangle = 'red';}
        if (polarite == 'bas') {couleur_Triangle = 'blue';}
    }
    edition_atome(vect_somme_aire, couleur_Triangle);
    
}


