import axios from 'axios'

const url = 'https://pixabay.com/api/';
const key = 'key=13715060-24eeea3cb0e3c072e592f8198';

const getImagesByUserSearch = async (userSearch) => {
   const resp = await axios.get(`${url}?${key}&q=${userSearch}=photo&`);
   let dataJ = ''
   await resp.data.hits.map(item => dataJ = [...dataJ, item])
   return dataJ;
};

export default getImagesByUserSearch;
