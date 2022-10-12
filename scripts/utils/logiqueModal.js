// Fonction permettant d'ouvrir le modal des médias
async function logiqueModalMedia(medias) {
    const recupEl = await afficheGalerie(medias)
    const elImg = recupEl.img
    const elVideos = recupEl.video
    const tabData = elImg.concat(elVideos)

    //Pour chaque éléments images au clique ouvre le modal affiche son contenue et permet de naviguer entre les médias (vidéos compris)
    for (i = 0; i < elImg.length; i++) {
        elImg[i].addEventListener("click", (e) => {
            openModalmedia(),
            contenueModalPhoto(e.target), //e.target cible l'élement img 
            navigateMedia(tabData, e.target)
        })
    }
    //Pour chaque éléments vidéos au clique ouvre le modal affiche son contenue et permet de naviguer entre les médias (images compris)
    for (videoData of elVideos) {
        videoData.addEventListener("click", (e) => {
            openModalmedia(),
            contenuModalVideo(e.target), //e.target cible l'élement video 
            navigateMedia(tabData, e.target)
        })
    }

}

// Fonction qui ouvre le modal
function openModalmedia() {
    const modalMedia = document.querySelector(".modal-media")
    const closeBtn = document.querySelector(".close-modal-media")
    modalMedia.setAttribute('aria-hidden', 'false')
    closeBtn.focus()
    modalMedia.style.display = "grid"
}

// Fonction qui ferme le modal 
function closeModalMedia() {
    const modalMedia = document.querySelector(".modal-media")
    modalMedia.style.display = "none"
    const videoModal = document.querySelector(".video-modal-media")
    videoModal.style.display = "none"
    const imgModal = document.querySelector(".img-modal-media")
    imgModal.style.display = "none"
    modalMedia.setAttribute('aria-hidden', 'true')
}


// Fonction affichant le contenu du modal
// prends en argument l'element html slectionné par l'utilisateur pour ouvrir le modal.
function contenuModalVideo(media) {
    const videoModal = document.querySelector(".video-modal-media")
    const imgModal = document.querySelector(".img-modal-media")
    //lorsque  le modal img est ouvert on refermeme modal video et vice et versa
    videoModal.style.display = "block"
    imgModal.style.display = "none"
    videoModal.setAttribute("src", media.src)
    videoModal.type = "video/mp4"
    let titreModal = document.querySelector(".titre-modal-media")
    // on recherche dans les parents l'element html qui nous convient le titre et le nombre de like qui lui est propre
    titreModal.textContent = media.parentElement.children[1].children[0].firstChild.data
    //titreModal.textContent = media.parentElement.innerText.substring(0, lastIndex)
    let nbLike = document.querySelector(".nb-like-modal-media")
    nbLike.textContent = media.parentElement.children[1].children[0].children[0].firstChild.data
    console.log(videoModal)
}
// Fonction affichant le contenu du modal
function contenueModalPhoto(elMedia) { // prends en argument l'element html cliqué par l'utilisateur pour ouvrir le modal.

    const imgModal = document.querySelector(".img-modal-media")
    const videoModal = document.querySelector(".video-modal-media")
    imgModal.setAttribute("src", elMedia.src)
    //lorsque  le modal img est ouvert on refermeme modal video et vice et versa
    imgModal.style.display = "block"
    videoModal.style.display = "none"
    // on recherche dans les parents l'element html qui nous convient le titre et le nombre de like qui lui est propre
    let titreModal = document.querySelector(".titre-modal-media")
    titreModal.textContent = elMedia.parentElement.children[1].children[0].firstChild.data
    let nbLike = document.querySelector(".nb-like-modal-media")
    nbLike.textContent = elMedia.parentElement.children[1].children[0].children[0].firstChild.data

}