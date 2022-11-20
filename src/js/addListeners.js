import Notiflix from 'notiflix';
import { refs } from './refs';

refs.list.addEventListener('click', saveImg);

function saveImg(e) {
    if (e.target.tagName !== 'BUTTON') return;

    const adresImg = e.target.closest('li').querySelector('img').src

    localStorage.setItem('save-img', adresImg);

    Notiflix.Notify.success('Yoooo!');

    console.log(adresImg)
}