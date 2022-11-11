function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Sample-Photos/Photographers-ID-Photos/${portrait}`;
   
    let url = new URL('http://127.0.0.1:5501/photographer.html')
    

    function getUserCardDOM() {
        const a = document.createElement( 'a' )
        a.setAttribute("href", url+'?id='+data.id)
        a.style.textAlign = "center";
        a.style.textDecoration = "none";
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.alt = name
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city +", "+ country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        const h5 = document.createElement( 'h5' );
        h5.textContent = price + "€/jour";
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        console.log(a);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}

