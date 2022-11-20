import dataImg from '../database/database-img.json';

import { refs } from './refs';



export function getImgs() {
    console.log(dataImg);

    const gallery = dataImg.map(img => `<li>
  <img src="${img}" alt="${img}"> <button type="button">Save</button>
</li>`).join('');
    
    refs.list.innerHTML = gallery;
};