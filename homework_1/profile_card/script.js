const previous_btn = document.querySelector('.previous')
const next_btn = document.querySelector('.next')
const profile_cards = document.querySelectorAll('.profile-card')

let counter = 0



function button_handler() {

    next_btn.addEventListener('click', () => {

    if (counter < profile_cards.length - 1) {
        
        profile_cards[counter].classList.add('hidden')
        counter++
        profile_cards[counter].classList.remove('hidden')
    } else {
        alert('Нету следущих карточек')
    }
    

})

    previous_btn.addEventListener('click', () => {
        if (counter > 0) {
            profile_cards[counter].classList.add('hidden')
            counter--
            profile_cards[counter].classList.remove('hidden')
        } else {
            alert('Нету преведущих карточек')
        }
    })

}

button_handler()