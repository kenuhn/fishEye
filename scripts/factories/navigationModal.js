
// Fonction permettant de naviguer entre les médias d'une même page 

function navigateMedia(tabMedia, mediaSelectionne) {
    //trouver l'index du media que l'on a séléctionné 
    let indexMedia = tabMedia.indexOf(mediaSelectionne)
    const flecheDroite = document.querySelector(".fleche-droite")
    const flecheGauche = document.querySelector(".fleche-gauche")
    var newMedia;
    // Une fois l'index trouvée on incremente 1 à l'indexSelectionné 
    flecheDroite.addEventListener("click", () => {
        // si l'index du media selectionné est inferieur au dernière index du tableau incremente 1 à l'index du media selectionné
        if (indexMedia < tabMedia.length - 1) {
            indexMedia++
            console.log(tabMedia.length)
            newMedia = tabMedia[indexMedia]
            console.log(indexMedia)
            console.log(newMedia)
            verifContenueModalmedia (newMedia)
          
        } else { // Sinon indexmedia reviens au première index du tableau donc Zero 
            indexMedia = 0
            newMedia = tabMedia[indexMedia]
            //repetition de code à corriger ultérieurement‡
            verifContenueModalmedia (newMedia)
            console.log(indexMedia)
            console.log(newMedia)
        }
    })

    flecheGauche.addEventListener("click", () => {
        if (indexMedia == 0) {
            indexMedia = tabMedia.length - 1
            newMedia = tabMedia[indexMedia]
            console.log(indexMedia)
            console.log(newMedia)
            verifContenueModalmedia (newMedia)
            
        } else {
            --indexMedia
            newMedia = tabMedia[indexMedia]
            verifContenueModalmedia (newMedia)
            console.log(indexMedia)
            console.log(newMedia)
        }
    })


    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 39) {
            if (indexMedia < tabMedia.length - 1) {
                indexMedia++
                newMedia = tabMedia[indexMedia]
                console.log(indexMedia)
                console.log(newMedia)
                verifContenueModalmedia (newMedia)
            } else {
                indexMedia = 0
                newMedia = tabMedia[indexMedia]
                //repetition de code à corriger ultérieurement‡
                verifContenueModalmedia (newMedia)
                console.log(indexMedia)
                console.log(newMedia)
  
            }
        }
    })


    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 37) {
            if (indexMedia == 0) {
                indexMedia = tabMedia.length - 1
                newMedia = tabMedia[indexMedia]
                console.log(indexMedia)
                console.log(newMedia)
                verifContenueModalmedia (newMedia) 
            } else {
                --indexMedia
                newMedia = tabMedia[indexMedia]
                verifContenueModalmedia (newMedia) 
                console.log(indexMedia)
                console.log(newMedia)
            }

        }

    })
}



function verifContenueModalmedia (media) {
    if (media.className === "video-galerie") {
        contenuModalVideo(media)
     }
     if (media.className === "photos-galerie") {
         contenueModalPhoto(media)
     }
}

