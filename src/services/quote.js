import axios from "axios";

const apiEndpoint = "https://api.adviceslip.com/advice";

export const getQuote = async () => {
  const { data: response } = await axios.get(apiEndpoint);
  return response;
};
