import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN || "https://emerge-final-vhp9.vercel.app";

const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export default fetchData;
