import axios from "axios";
// const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const baseUrl = "https://dictionaryapi.com/api/v3/references/collegiate/json/";
const apiKey = "4d0c6efb-8080-480f-a2c3-a91c9ed27a7d";

export const getWord = async (inputWord) => {
  // const { data } = await axios.get(`${baseUrl}${inputWord}`);
  const { data } = await axios.get(`${baseUrl}${inputWord}?key=${apiKey}`);

  // console.log(data);
  return data;
};
