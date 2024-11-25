import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "3ZpcXmrNcwmI19B6zYsgC6S-9THt9IDomqg0MNXrIRQ";

export async function fetchImages(searchWord, page) {
  const response = await axios.get(`/search/photos?client_id=${API_KEY}`, {
    params: {
      query: searchWord,
      page: page,
      per_page: 16,
      orientation: "landscape",
    },
  });

  return response.data;
}
