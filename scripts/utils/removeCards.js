// Au clique supprimer la liste node comprenant toute les cards dans l'element html galerie 
function removeCards(cards) {
    const btnTrie = document.querySelectorAll(".btn")
    btnTrie.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            for (i of cards) {
                i.remove()
            }
            console.log(i)
            console.log("a l'interieur fonction ==>", e)
        })
    })
}
