//function permettant de liker ou de disliker un élement 

function likeMedia(elLikes, media, medias) {
    const likePhotographer = document.querySelector(".nb-like")
    let mediaLike = false;
    elLikes.addEventListener("click", () => {
        if (mediaLike == false) {
            media.likes = media.likes + 1

            elLikes.firstChild.data = media.likes + (" ")
            console.log(media.likes)
            console.log(likePhotographer)
            mediaLike = true;
            let totalLike = 0;
            medias.forEach((media) => {
                totalLike = media.likes + totalLike
            })
            likePhotographer.textContent = totalLike
        } else {

            media.likes = media.likes - 1

            elLikes.firstChild.data = media.likes + (" ")
            console.log(media.likes)
            console.log(likePhotographer)
            mediaLike = false;
            let totalLike = 0;
            medias.forEach((media) => {
                totalLike = media.likes + totalLike
            })
            likePhotographer.textContent = totalLike
        }
    })
}