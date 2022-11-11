function displayModal() {
    const modal = document.getElementById("contact_modal");
    const  closeModal = document.querySelector(".close-modal-contact")
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false')
    closeModal.focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true')
}

async function setNameContact(photographer){
    const titreModal = document.querySelector('.titre-modal')
    titreModal.textContent = 'CONTACTEZ-MOI ' + photographer.name;
}


function logiqueModalContact(photographer) {
    setNameContact(photographer)
    /*Element du formulaire séléctionné*/
    const prenom = document.querySelector('.prenom-input');
    const nom = document.querySelector('.nom-input');
    const email = document.querySelector('.email-input')
    const texte = document.querySelector('.text-input')
    const form = document.querySelector('.form-modal')
    /*Selection des erreurs dans le html*/
    const errorPrenom = document.querySelector('.prenom-error')
    const errorNom = document.querySelector('.nom-error')
    const errorEmail = document.querySelector('.email-error')
    const errorText = document.querySelector('.text-error')

    let prenomValue;
    let nomValue;
    let emailValue;
    let texteValue;

    //Fonctions pour vérifier les données entrantes du formulaire.
    function verifPrenom() {
        const regex = new RegExp(/^[a-zA-Z\-]+$/)
        const resultat = regex.test(prenom.value)
        if (resultat == true) {
            errorPrenom.style.display = "none";
            prenomValue = true;
        } else {
            prenomValue = false;
            errorPrenom.style.display = "block";
            errorPrenom.textContent = "il y a une erreur dans la saisie de votre nom";
        }
    }

    function verifNom() {
        const regex = new RegExp(/^[a-zA-Z\-]+$/)
        const resultat = regex.test(nom.value)
        if (resultat == true) {
            nomValue = true;
            errorNom.style.display = "none";
        } else {
            nomValue = false;
            errorNom.style.display = "block";
            errorNom.textContent = "il y a une erreur dans la saisie de votre nom";
        }
    }

    function verifEmail() {
        const regex = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$', 'i')
        const resultat = regex.test(email.value)
        if (resultat == true) {
            emailValue = true;
            errorEmail.style.display = "none";
        } else {
            emailValue = false;
            errorEmail.style.display = "block";
            errorEmail.textContent = "il y a une erreur dans la saisie de votre email";
        }
    }

    function verifText() {
        if (texte.value.length == 0) {
            console.log(texte.value.length)
            errorText.style.display = "block";
            errorText.textContent = "Le champs ne peut pas être vide"
            texteValue = false;
        } else {
            texteValue = true;
            errorText.style.dispaly = "none";
        }
    }

    // Gestion des événements une les donnés entrées : 
    // 1) Évenements a changement
    prenom.addEventListener('change', () => { verifPrenom() })
    nom.addEventListener('change', () => { verifNom() })
    email.addEventListener('change', () => { verifEmail() })
    texte.addEventListener('change', () => { verifText() })

    // 2) Évenements à la soumission 
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        verifPrenom()
        verifNom()
        verifEmail()
        verifText()
        if (texteValue && prenomValue && nomValue && emailValue) {
            console.log(
                "prenom ===> " + prenom.value,
                "nom ===> " + nom.value,
                "email ===> " + email.value,
                "texte ===> " + texte.value
            )
            closeModal()
        } else {
            console.log(
                "valprenom ===> " + prenomValue,
                "valnom ===> " + nomValue,
                "valemail ===> " + emailValue,
                "valtexte ===> " + texteValue ,

            )
        }
    })


}
