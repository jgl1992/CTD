const apiURL = "https://open-meteo.com/";

try {
  const response = await fetch(apiURL);
  if(!response.ok) {
    throw new Error('http error! status: ${response.status}');
  }
  
const data = await response.json(); // or response.text()
  console.log('collected data: ', data);
  return data; // return the data if needed
} catch (Error) {
  console.error ('fetch error:', error);
}
fetchdata from api();

   
