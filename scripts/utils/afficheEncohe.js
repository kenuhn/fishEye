function afficheEncoche(medias, photographer) { //data de l'encoche prix et nombre de like du photographe
    const likePhotographer = document.querySelector('.nb-like');
    const tarifJournalier = document.querySelector('.tarif-journalier');
    tarifJournalier.textContent = photographer.price + ' / jour';
    totalLike(likePhotographer, medias)

}
