import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto';
const API_Key = '4af2d8c7d9bd569d66e895a3c536d632'
class Weather{
    async Weather(){
    return await axios.get(URL,{
        params:{
            units: 'metric',
            APPID: API_Key,
        }})
    };
}

export default new Weather();