const axios = require('axios');
const fakerAPI = process.env.FAKER_API;

exports.generateTitles = async (tasks) => {
  const url = `${fakerAPI}?quantity=${tasks}`;
  const { data } = await axios.get(url);
  return data;
}
