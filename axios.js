import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GRADIWEB_API,
  timeout: 5000,
})

export default instance
