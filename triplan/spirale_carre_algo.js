function ulam_carre(){
    if (mod4 == 1){coord_Cube_X = coord_Cube_X + (1 * unite);}
    if (mod4 == 2){coord_Cube_Y = coord_Cube_Y - (1 * unite);}
    if (mod4 == 3){coord_Cube_X = coord_Cube_X - (1 * unite);}
    if (mod4 == 4){coord_Cube_Y = coord_Cube_Y + (1 * unite);}
    if (niveau_carre == force_carre){
        if (mod4 == 2 || mod4 == 4){force_carre = force_carre + 1}
        if (mod4 == 4){mod4 = 0}
        niveau_carre = 0;
        mod4 = mod4 + 1;
    }
}