function edition_atome(vecteur, couleur){
    atome = document.createElement('div');   
    atome.setAttribute("id","atome_A");
    atome.classList.add('atome');
    atome.style.backgroundColor = couleur;
    atome.style.width = cote +'px';
    atome.style.height = cote +'px';
    if(afficher_nombre == 1){atome.innerHTML = nombre;}
    atome.style.transform = vecteur;
    pavage.appendChild(atome);
}