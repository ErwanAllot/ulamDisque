function ulam_Tri_atomique(){

    switch(vent_Tri){
        case 'est' :
            coord_Tri_X = coord_Tri_X + (1 * unite);
        break;
        case 'nord_ouest' :
            coord_Tri_X = coord_Tri_X - (1/2 * unite);
            coord_Tri_Y = coord_Tri_Y - (1 * unite); 
        break;
        case 'sud_ouest' :
            coord_Tri_X = coord_Tri_X - (1/2 * unite);
            coord_Tri_Y = coord_Tri_Y + (1 * unite); 
        break;
    }


    if (niveau_Tri == mod2){
        mod2 = mod2 + 1; 
        niveau_Tri = 0;
        switch(vent_Tri){
            case 'est' : vent_Tri = 'nord_ouest'; break;
            case 'nord_ouest' : vent_Tri = 'sud_ouest';break;
            case 'sud_ouest' : vent_Tri = 'est';break;
        }
    }
    // niveau_Tri += 1;
}