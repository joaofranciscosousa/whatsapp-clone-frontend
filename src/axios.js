import axios from 'axios'

const instance = axios.create({
    //baseURL: "http://localhost:9000"   LINK PARA LOCALHOST, LINK SEGUINTE PARA APLICAÇÃO REAL
    baseURL: "https://whatsapp-backend123321.herokuapp.com/"
})

export default instance