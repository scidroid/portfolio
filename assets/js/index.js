const container = document.querySelector("#blog");

const addElement = (title, img, slug, description, url) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<article><a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${slug}" loading="lazy" decoding="async"><h3>${title}</h3><p>${description}</p></a></article>`
  );
};

fetch("https://dev.to/api/articles?username=scidroid")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let index = 0; index < resp.length && index < 4; index++) {
      addElement(
        resp[index].title,
        resp[index].cover_image,
        resp[index].slug,
        resp[index].description,
        resp[index].url
      );
    }
  })
  .catch((err) => {
    console.error(err);
    addElement(
      "API error",
      null,
      null,
      "check your internet connection",
      "https://dev.to/api/articles?username=scidroid"
    );
  });
