import ImagesApiService from "./api-servise";

const refs = {
  form: document.querySelector("#search-form"),
  gallary: document.querySelector(".gallery"),
  dtnLoadMore: document.querySelector('button[data-action="loadMore"]'),
};

const imagesApiService = new ImagesApiService();

refs.form.addEventListener("submit", submitForm);
refs.dtnLoadMore.addEventListener("click", loadMore);

function submitForm(event) {
  event.preventDefault();
  imagesApiService.page += 1;
  imagesApiService.query = event.currentTarget.elements.searchQuery.value;
  imagesApiService.fetchImeges().then(marcupGallaryary).then(renderGallary);
}

function loadMore() {
  imagesApiService.fetchImeges().then(marcupGallaryary).then(renderGallary);
}

function marcupGallaryary(images) {
  refs.dtnLoadMore.classList.remove("hidden");
  return images.hits.map(colbackMap).join("");
}

function colbackMap(element) {
  return `<div class="photo-card">
  <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" width="320" height="240" class="foto" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> 
      ${element.likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${element.views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${element.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${element.downloads}
    </p>
  </div>
</div>`;
}

function renderGallary(marcup) {
  refs.gallary.innerHTML = marcup;
}
