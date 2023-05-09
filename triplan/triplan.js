function volume_special(){
    aire_Tri = coord_Tri_X*coord_Tri_Y;
    aire_Hexagone = coord_Hexa_X*coord_Hexa_Y;
    aire_Carre = coord_Hexa_X*coord_Hexa_Y;

    volume_Tri = aire_Tri * (coord_Hexa_X + coord_Cube_Y);
    volume_Hexagone = aire_Hexagone * (coord_Tri_X + coord_Cube_Y);

    volume_Tri = Math.round(volume_Tri);
    volume_Hexagone = Math.round(volume_Hexagone);

    vect_somme_aire = 'translateX(' + volume_Tri + 'px) translateY(' + volume_Hexagone +'px)';

    if (atomiqueOuMoleculaire == 'moleculaire' && dualite == 1){
        if (polarite == 'haut') {couleur_Triangle = 'red';}
        if (polarite == 'bas') {couleur_Triangle = 'blue';}
    }
    edition_atome(vect_somme_aire, couleur_Triangle);
}

// idée interessante ou triangle en x et y, carre en y z et hexa en x y