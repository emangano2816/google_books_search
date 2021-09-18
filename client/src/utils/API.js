import axios from "axios";

// The getBooks method retrieves books from the Google Books API
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function(query) {
    return axios.get("https://googleapis.com/v1/volumes?", { params: { q: query } });
  }
};
