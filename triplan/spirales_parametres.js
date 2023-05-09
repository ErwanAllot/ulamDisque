function parametres(){
    nombre = 2; 
    
    coord_Tri_X = 0; coord_Tri_Y = 0; vent_Tri = 'est'; polarite = 'haut';
    force_Tri = 3; mod2 = 1; mod3 = 1; niveau_Tri = 1;
    
    coord_Hexa_X = 0; coord_Hexa_Y = 0; vent_Hexa = 'est';
    force_Hexa = 1; mod6 = 1; niveau_Hexa = 1;
    
    coord_Cube_X = 0; coord_Cube_Y = 0;
    force_carre = 1; mod4 = 1; niveau_carre = 1;
    
    couleur = 'red';
    
    root = document.querySelector(':root');
    root.style.setProperty('--echelle', unite + 'px');
}
