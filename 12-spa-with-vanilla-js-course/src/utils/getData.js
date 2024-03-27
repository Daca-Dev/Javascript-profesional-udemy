const BASE_URL = 'https://rickandmortyapi.com/api/character/';

async function getData(id) {
  const apiUrl = id ? `${BASE_URL}${id}` : BASE_URL;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('#getData:', error);
  }
}

export default getData;