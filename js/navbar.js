const myTopMenu = document.querySelector('.myMenu');
const weCloseMenu = document.querySelector('.closeMenu');
const weOpenMenu = document.querySelector('.openMenu');
const navLinks = document.querySelectorAll('.list-item');

function show() {
  myTopMenu.style.display = 'flex';
  myTopMenu.style.top = '0';
}

function close() {
  myTopMenu.style.top = '-110%';
}

weOpenMenu.addEventListener('click', show);
weCloseMenu.addEventListener('click', close);

let index = 0;
const { length } = navLinks;
for (; index < length; index += 1) {
  navLinks[index].addEventListener('click',
    () => {
      myTopMenu.style.top = '-110%';
    });
}