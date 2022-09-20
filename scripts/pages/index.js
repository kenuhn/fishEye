    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const url = 'http://127.0.0.1:5500/data/photographers.json'
        const requette =  await fetch(url, {method: 'GET'})
            try{
               const doc =  await requette.json()
               var photographers =  doc.photographers
               console.log(photographers)
            }
            catch (err){
                console.log(err)
            }
        return ({photographers: [...photographers]})
        // et bien retourner le tableau photographers seulement une fois
        
    }
    getPhotographers()
  

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

