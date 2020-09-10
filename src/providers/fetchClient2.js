import axios from 'axios'

const provider = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default provider
