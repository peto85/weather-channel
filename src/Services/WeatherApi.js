const cities = [
  3435910, // Buenos Aires
  3871336, // Santiago
  3936456, // Lima
  3448439 // Sao Paulo
];

function getWeatherForIds(ids = cities) {
  const url = new URL('http://api.openweathermap.org/data/2.5/group');
  url.searchParams.append('APIKEY', '0c84ad8faa1580ffe7efa89d6f2e4939');
  url.searchParams.append('id', ids.join());
  url.searchParams.append('units', 'metric');

  return fetch(url)
    .then(response => response.json())
    .then(data => data.list.map(item => ({
        name: item.name,
        temperature: item.main.temp
      })))
}

export { getWeatherForIds }
