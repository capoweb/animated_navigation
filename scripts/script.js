
const navigation = document.querySelector('.navigation')
const toggleMenu = document.querySelector('.toggle-menu')

    toggleMenu.onclick = function (){
        navigation.classList.toggle('active')
        console.log('click')
    }