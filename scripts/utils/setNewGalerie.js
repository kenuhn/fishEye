async function logiqueNewGalerie() {
    setNewGalerieTitre()
    setNewGalerieLike()
}
logiqueNewGalerie()

//Fonction affichant la galerie trier par l'ordre alphabétique des titres 
function setNewGalerieTitre() {
    const btnTrie = document.querySelector(".btn-trie-titre")
    btnTrie.addEventListener("click", async (e) => {
        const newMedia = await trieGalerieTitre()
        logiqueModalMedia(newMedia)
    })
}

//Fonction affichant la galerie trier par l'ordre alphabétique des titres 
async function setNewGalerieLike() {
    const btnTrie = document.querySelector(".btn-trie-like")
    btnTrie.addEventListener("click", async () => {
        const newMedia = await trieGalerieLike()
        logiqueModalMedia(newMedia)
    })

}