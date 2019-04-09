import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3053a3979d529d472db033e0f5410ce160d810ff5e191bab9f726ba9edc299cc"
  }
});
