const button = document.querySelector('.btn1');


button.addEventListener('click', () => {

    const card_name = prompt('Write your name!')
    const card_content = prompt('White few word about yourself')

    const user_name = document.querySelector('.userName')
    const user_content = document.querySelector('.userContent')
   
    user_name.textContent = card_name
    user_content.textContent = card_content
});

