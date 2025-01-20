// Function to fetch data from a given URL and execute a callback with the data
const getData = (file, callback) => {
  fetch(file, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// Function to fetch data from the OMDB API
export const Fetch = async () => {
  const apiKey = "91e34a07"; 
  const movieId = "tt3896198"; 
  const url = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`; 

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export default getData;
