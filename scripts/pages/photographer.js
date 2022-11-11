//Mettre le code JavaScript lié à la page photographer.html
// Fonction qui receptionne la data d'un utilisateur en comparant l'id de l'url et les id present dans le document json
async function getUserData() {
    const requette = await fetch('http://127.0.0.1:5501/data/photographers.json');
    const doc = await requette.json();
    let params = new URLSearchParams(window.location.search);
    const idLocation = params.get('id');
    const media = [];

    try {
        var photographer = doc.photographers.find(c => c.id == idLocation);
        //console.log("data du photographe ==>", photographer);
        doc.media.forEach(medias => {
            if (medias.photographerId == idLocation) {
                media.push(medias)
            }
        });
    }
    catch (err) {
        console.log(err)
    }
    return ({ media, photographer })
}

async function firstSetPage() {
    // réception de la data 
    const data = await getUserData()
    console.log(data)
    const photographer = data.photographer
    const medias = data.media

    afficheHeader(photographer)
    afficheEncoche(medias, photographer)
    logiqueModalMedia(medias)
    logiqueModalContact(photographer)
}
firstSetPage()