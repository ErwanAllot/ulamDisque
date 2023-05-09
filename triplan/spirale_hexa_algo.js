function ulam_Hexa(){
    if (niveau_Hexa == 1){
        switch(vent_Hexa){
            case 'est' :
                coord_Hexa_X = coord_Hexa_X + (1 * unite);
                vent_Hexa = 'nord_est';
            break;
            case 'nord_est' :
                coord_Hexa_X = coord_Hexa_X - (1/2 * unite);
                coord_Hexa_Y = coord_Hexa_Y - (1 * unite);
                vent_Hexa = 'nord_ouest';
            break;
            case 'nord_ouest' :
                coord_Hexa_X = coord_Hexa_X - (1 * unite);
                vent_Hexa = 'nord';
            break;
            case 'nord' :
                coord_Hexa_X = coord_Hexa_X - (1/2 * unite);
                coord_Hexa_Y = coord_Hexa_Y + (1 * unite);
                vent_Hexa = 'sud_ouest';
            break;
            case 'sud_ouest' :
                coord_Hexa_X = coord_Hexa_X + (1/2 * unite);
                coord_Hexa_Y = coord_Hexa_Y + (1 * unite);
                vent_Hexa = 'sud_est';
            break;
            case 'sud_est' :
                coord_Hexa_X = coord_Hexa_X + (1 * unite);
                vent_Hexa = 'est';
            break;
        }
    }
    else{
        if (vent_Hexa == 'nord_est'){
            coord_Hexa_X = coord_Hexa_X + (1/2 * unite);
            coord_Hexa_Y = coord_Hexa_Y - (1 * unite);
        }
        if (vent_Hexa == 'nord_ouest'){
            coord_Hexa_X = coord_Hexa_X - (1/2 * unite);
            coord_Hexa_Y = coord_Hexa_Y - (1 * unite);
        }
        if (vent_Hexa == 'nord'){
            coord_Hexa_X = coord_Hexa_X - (1 * unite);
        }
        if (vent_Hexa == 'sud_ouest'){
            coord_Hexa_X = coord_Hexa_X - (1/2 * unite);
            coord_Hexa_Y = coord_Hexa_Y + (1 * unite);
        }
        if (vent_Hexa == 'sud_est'){
            coord_Hexa_X = coord_Hexa_X + (1/2 * unite);
            coord_Hexa_Y = coord_Hexa_Y + (1 * unite);
        }
        if (vent_Hexa == 'est'){
            coord_Hexa_X = coord_Hexa_X + (1 * unite);
        }
    }
    if (niveau_Hexa == force_Hexa){
        if (mod6 == 6){force_Hexa = force_Hexa + 1; mod6 = 0}
        niveau_Hexa = 0;
        mod6 = mod6 + 1;
    }
}