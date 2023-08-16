import { fetchBreeds, fetchCatByBreed } from './api/cat-api';
import { MarkupI } from './markup/markup';

const ref = {
  input: '.breed-select',
  card: '.cat-info',
  loader: '.loader',
};

const catInterface = new MarkupI(ref);

document.addEventListener('DOMContentLoaded', addDataToSelect);
catInterface.input.addEventListener('change', onShowCardCat);

function addDataToSelect() {
  fetchBreeds()
    .then(data => {
      catInterface.createMarkUpForSelect(data);
      catInterface.showSelect();
    })
    .catch(() => {
      catInterface.showError('select');
      catInterface.hiddenSelect();
    })
    .finally(() => catInterface.toggleLoader());
}

function onShowCardCat(evt) {
  catInterface.hiddenCard();
  catInterface.toggleLoader();

  fetchCatByBreed(evt)
    .then(data => {
      catInterface.createMarkUpCard(data);
      catInterface.showCard();
    })
    .catch(() => {
      catInterface.hiddenCard();
      catInterface.showError('card');
    })
    .finally(() => catInterface.switchShowLoader());
}