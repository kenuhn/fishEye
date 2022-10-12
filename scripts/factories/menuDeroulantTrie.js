function displayBtn() {
    const btnTrie = document.querySelectorAll(".btn") //on selectionne les deux boutons: popularité et titre
    const arrowDown = document.querySelector("#arrow-down")
    const arrowUp = document.querySelector("#arrow-up")
    const btnContenant = document.querySelector(".btn-container-trie")      
    btnTrie.forEach((btn) => { 
        if (btn.style.display == "block"){
             btn.style.display = "none"
             arrowUp.style.display ="inline"
             arrowDown .style.display ="none"
             btnContenant.style.borderRadius = " 3px 3px 3px 3px"
            
            }
        else {
            btn.style.display = "block"
            arrowUp.style.display ="none"
            arrowDown .style.display ="inline" 
            btnContenant.style.borderRadius = " 3px 3px 0px 0px"
        }})

}