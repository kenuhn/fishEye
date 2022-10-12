function afficheHeader(photographer) {
    const headerSection = document.querySelector('.photograph-header')
    const potographInfo = document.querySelector('.photograph-info')
    const picture = `assets/photographers/Sample-Photos/Photographers-ID-Photos/${photographer.portrait}`;

    const imgProfil = document.createElement('img')
    imgProfil.setAttribute("src", picture)
    imgProfil.setAttribute("alt", photographer.portrait)
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

}