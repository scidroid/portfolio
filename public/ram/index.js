for (let page = 0; page < 34; page++) {
  fetch('https://rickandmortyapi.com/api/character/?page=' + page)
    .then(res => res.json())
    .then(res => {
      for (let index = 0; index < 20; index++) {
        document.querySelector('#container').insertAdjacentHTML(
          'beforeend',
          `
            <article>
              <img src="${res.results[index].image}">
              <h3>${res.results[index].name}</h3>
              <p>${res.results[index].origin.name}</p>
            </article>
          `
        );
      }
    });
}
