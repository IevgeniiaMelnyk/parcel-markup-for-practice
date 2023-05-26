import BSN from 'bootstrap.native';
import { refs } from './refs';

const modal = new BSN.Modal('#myModal1');

const DELAY = 2000;
const MAX_ATTEMPTS = 2;
let counter = 0;
let performed = false;

export function modalShow() {
  openModal();

  refs.modal.addEventListener('hide.bs.modal', openModal);

  refs.performedBtn.addEventListener('click', onPerformedBtnClick);
}

function openModal() {
  if (counter === MAX_ATTEMPTS || performed) {
    return;
  }

  setTimeout(() => {
    modal.show();
    counter += 1;
  }, DELAY);
}

function onPerformedBtnClick() {
  performed = true;
  modal.hide();
}
