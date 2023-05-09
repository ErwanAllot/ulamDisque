function ulam_Tri_moleculaire(){
    (niveau_Tri % 2 == 1)? polarite = 'haut' : polarite = 'bas';
    if (niveau_Tri == 1){ 
        switch(vent_Tri){
            case 'est' :
                coord_Tri_X = coord_Tri_X + (2 * unite);
                vent_Tri = 'nord_ouest';
            break;
            case 'nord_ouest' :
                coord_Tri_X = coord_Tri_X - (1 * unite);
                coord_Tri_Y = coord_Tri_Y - (1 * unite); 
                vent_Tri = 'sud_ouest';
            break;
            case 'sud_ouest' :
                coord_Tri_X = coord_Tri_X - (1 * unite);
                coord_Tri_Y = coord_Tri_Y + (1 * unite); 
                vent_Tri = 'est';
            break;
        }
    }
    else{
        switch(vent_Tri){
            case 'nord_ouest' :
                if(polarite == 'bas'){coord_Tri_X = coord_Tri_X - (1 * unite);}
                else {coord_Tri_Y = coord_Tri_Y - (1 * unite);} 
            break;
            case 'sud_ouest' :
                if(polarite == 'bas'){coord_Tri_Y = coord_Tri_Y + (1 * unite);}
                else {coord_Tri_X = coord_Tri_X - (1 * unite);} 
            break;
            case 'est' :
                coord_Tri_X = coord_Tri_X + (1 * unite);
            break;
        }
    }
    if (niveau_Tri == force_Tri){
        if (mod3 == 3){mod3 = 0}
        force_Tri = force_Tri + 2; 
        niveau_Tri = 0;
        mod3 = mod3 + 1;
        mod2 = 1;
    }
}