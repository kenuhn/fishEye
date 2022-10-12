async function logiqueGalerie() {
    setNewGalerieTitre()
    setNewGalerieLike()
}

logiqueGalerie()
//affiche la galerie. Cette fonction permet deux choses d'afficher la galerie permet aussi de la supprimer
async function afficheGalerie(medias) {
    const data = await getUserData()
    const photographer = data.photographer
    const prenom = photographer.name.substring(0, photographer.name.indexOf(' '))
    const galerie = document.querySelector(".galerie")

    medias.forEach(media => {

        const card = document.createElement('div')
        const title = document.createElement('h3')
        const blockPrixLike = document.createElement("div")
        const likesMedias = document.createElement("p")
        const coeur = document.createElement("i")
        card.className = "card-container";
        title.textContent = media.title
        title.className = "titre-photo-galerie"
        coeur.className = "fa fa-solid fa-heart img-coeur"
        blockPrixLike.className = "block-prix-like"
        likesMedias.className = "likes-medias"
        likesMedias.textContent = media.likes + (' ')
        likesMedias.style.fontWeight = "bolder"
        galerie.appendChild(card)
        if (media.image) {
            let images = media.image
            var oeuvres = `assets/photographers/Sample-Photos/${prenom}/${images}`;
            const img = document.createElement('img')
            img.className = "photos-galerie"
            img.setAttribute("src", oeuvres)
            img.setAttribute("alt", images)
            card.appendChild(img)
        }
        if (media.video) {
            let videos = media.video
            var oeuvres = `assets/photographers/Sample-Photos/${prenom}/${videos}`;
            const elVideo = document.createElement('video')
            elVideo.className = "video-galerie"
            elVideo.setAttribute("src", oeuvres)
            elVideo.type = "video/mp4"
            card.appendChild(elVideo)
            elVideo.addTextTrack("captions", "Captions", "en");
        }
        //titres figurant en dessous des médias photos et vidéos
        card.appendChild(blockPrixLike)
        blockPrixLike.appendChild(title)
        title.appendChild(likesMedias)
        likesMedias.appendChild(coeur)
        likeMedia(likesMedias, media, medias) // Pour chaque médias executer la fonction likeMedia 

    })
    const img = document.getElementsByClassName("photos-galerie")
    const video = document.getElementsByClassName("video-galerie")
    const cards = document.querySelectorAll(".card-container")
    removeCards(cards)
    return ({ img: [...img], video: [...video] })

}

//Fonction affichant la galerie trier par l'ordre alphabétique des titres 
function setNewGalerieTitre() {
    const btnTrie = document.querySelector(".btn-trie-titre")
    btnTrie.addEventListener("click", async (e) => {
        const newMedia = await trieGalerieTitre()
        modalPhoto(newMedia)
    })
}

// Au clique supprimer la liste node comprenant toute les cards dans l'element html galerie 
function removeCards(cards) {
    const btnTrie = document.querySelectorAll(".btn")
    btnTrie.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            for (i of cards) {
                i.remove()
            }
            console.log(i)
            console.log("a l'interieur fonction ==>", e)
        })
    })
}


//Fonction qui trie la galerie dans la galerie dans l'ordre alphabétique avec la méthode en sort 
async function trieGalerieTitre() {
    const data = await getUserData()
    const newMedias = data.media
    newMedias.sort((a, b) => {
        aLow = a.title.toLowerCase()
        bLow = b.title.toLowerCase()
        if (aLow < bLow) { return -1 }
        if (aLow > bLow) { return 1 }
        if (aLow === bLow) { return 0 }
    })
    return newMedias
}
//Fonction qui trie la galerie en fonction du nombre de like 
async function trieGalerieLike() {
    const data = await getUserData()
    const newMedias = data.media
    //trie des medias par like 
    newMedias.sort((a, b) => b.likes - a.likes)
    return newMedias
}

//Fonction affichant la galerie trier par l'ordre alphabétique des titres 
async function setNewGalerieLike() {
    const btnTrie = document.querySelector(".btn-trie-like")
    btnTrie.addEventListener("click", async () => {
        const newMedia = await trieGalerieLike()
        modalPhoto(newMedia)
    })

}