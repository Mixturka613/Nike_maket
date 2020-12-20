//ANIMATION BOTH

let both = document.querySelector('.img-both');

document.addEventListener('mousemove', event => {
    let speed = both.getAttribute('data-speed');
    both.style.transform = `rotate(${event.clientX * speed / 1000}deg)`
})

//OPEN MENU

let shadow = document.querySelector('.hystmodal__shadow');
let modal = document.querySelector('.menu-right');

let openMenu = document.querySelector('#open-menu').addEventListener('click', event => {
    shadow.classList.add('active-shadow');

    modal.style.display = 'flex';
    document.body.classList.add('modal-open');

    document.querySelector('#close-modal').addEventListener('click', () => {
        closeMenu()
    })

    document.addEventListener('keydown', event => {
        console.log(event)
        if (event.key === 'Escape') {
            closeMenu();
        }
    })
})

function closeMenu() {
    shadow.classList.remove('active-shadow');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}