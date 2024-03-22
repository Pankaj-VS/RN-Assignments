async function fetchData() {
  try {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default fetchData;
