const refs = {
  form: document.querySelector("#search-form"),
  gallary: document.querySelector(".gallery"),
};

refs.form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { searchQuery },
  } = event.currentTarget;
  fetchImeges(searchQuery.value);
}

function fetchImeges(name) {
  const options = `key=27417964-9ff1189e4548517b9b88c7801&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`;
  fetch(`https://pixabay.com/api/?${options}`)
    .then((response) => response.json())
    .then(marcupGallaryary)
    .then(renderGallary);
}

function marcupGallaryary(images) {
  console.log(images.hits);
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
