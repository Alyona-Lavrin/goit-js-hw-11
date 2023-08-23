import axios from 'axios';

const API_KEY = '38967386-5d6c7a2c5bfd9f2a9016c5b13';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }

  async fetchSearch() {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
    );
    return await response.data;
  }

  resetPageToDefault() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}