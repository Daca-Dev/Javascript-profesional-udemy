import getData from "../utils/getData";

async function Home() {
  const characters = await getData();
  const { results } = characters;

  const view = `
    <div class="Characters">
    ${results
      .map((character) => {
        const { id, image, name } = character;

        return `<article class="Character-item">
        <a href="#/${id}">
          <img src="${image}" alt="${name}">
          <h2>${name}</h2>
        </a>
      </article>`;
      })
      .join("")}
    </div>
    `;

  return view;
}

export default Home;
