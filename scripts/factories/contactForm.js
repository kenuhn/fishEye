async function modalDom(){
    const data = await getUserData()
    const photographer = data.photographer;
    const titreModal = document.querySelector('.titre-modal')
    titreModal.textContent = 'CONTACTEZ-MOI ' + photographer.name;
}
modalDom()
