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
