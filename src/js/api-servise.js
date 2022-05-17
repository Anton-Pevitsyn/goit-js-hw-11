export default class ImagesApiService {
  constructor() {
    this.serchQuery = "";
    this.page = 1;
  }

  fetchImeges() {
    const options = `key=27417964-9ff1189e4548517b9b88c7801&q=${this.serchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
    return fetch(`https://pixabay.com/api/?${options}`).then((r) => r.json());
  }

  get query() {
    return this.serchQuery;
  }

  set query(query) {
    this.serchQuery = query;
  }
}
