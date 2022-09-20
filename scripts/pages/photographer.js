//Mettre le code JavaScript lié à la page photographer.html
async function getUserData() {
    const requette = await fetch('http://127.0.0.1:5500/data/photographers.json');
    const doc = await requette.json();
    let params = new URLSearchParams(window.location.search);
    const idLocation = params.get('id');
    const media = [];

    try {
        var photographer = doc.photographers.find(c => c.id == idLocation);
        console.log(photographer);
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




async function dataDOM() {
    // réception de la data 
    const data = await getUserData()
    console.log(data)
    const photographer = data.photographer
    const medias = data.media
    const headerSection = document.querySelector('.photograph-header')
    const potographInfo = document.querySelector('.photograph-info')
   

   
    //mise en placedes éléments du DOM (header)      
    const picture = `assets/photographers/Sample-Photos/Photographers-ID-Photos/${photographer.portrait}`;

    //data du header 

    const imgProfil = document.createElement('img')
    imgProfil.setAttribute("src", picture)
    imgProfil.className = "photo-profil"
    const nom = document.createElement('h2')
    nom.textContent = photographer.name
    const city = document.createElement('h3')
    city.textContent = photographer.city + ', ' + photographer.country
    const texte = document.createElement('p')
    texte.textContent = photographer.tagline

    headerSection.appendChild(imgProfil)
    potographInfo.appendChild(nom)
    potographInfo.appendChild(city)
    potographInfo.appendChild(texte)
    console.log(headerSection)

    //data de l'encoche prix et nombre de like du photographe
    const encoche = document.getElementsByClassName( 'encoche' );
    const likePhotographer = document.getElementsByClassName('nb-like');
    const imgCoeur = document.getElementsByClassName( 'img-coeur' );
    const tarifJournalier = document.querySelector( '.tarif-journalier' );
    tarifJournalier.textContent =  photographer.price + ' / jour';
    console.log(likePhotographer)



    
  
    // mise en place des photos
    const prenom = photographer.name.substring(0, photographer.name.indexOf(' '))
    let images;   
    medias.forEach( media => {
        images = media.image
        var oeuvres = `assets/photographers/Sample-Photos/${prenom}/${images}`;
        const galerie = document.querySelector('.galerie')
        const card = document.createElement('div')
        card.className = "card-container";

        const img = document.createElement('img')
        img.className = "photos-galerie"
        img.setAttribute("src", oeuvres)

        const title = document.createElement('h3')
        title.textContent = media.title

        galerie.appendChild(card)
        card.appendChild(img)
        card.appendChild(title)

    })


    return headerSection

}
dataDOM()