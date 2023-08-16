import axios from 'axios';
import { MarkupI } from '../markup/markup';
import { API_KEY, URL_SELECT, URL_BREED_ID } from '../consts'

const catApi = axios.create();
catApi.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return catApi
    .get(URL_SELECT)
    .then(response => response.data)
    .catch(() => MarkupI.showError('select'));
}

function fetchCatByBreed(evt) {
  const { value } = evt.target;
  return catApi
    .get(URL_BREED_ID, {
      params: {
        breed_ids: value,
      },
    })
    .then(response => response.data)
    .catch(() => MarkupI.showError('card'));
}

export { fetchBreeds, fetchCatByBreed };