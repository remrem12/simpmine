import axios from "axios"

export const getReplyMessage = (text: string) => 
  axios.get(`https://simsumi.herokuapp.com/api?text=${text}&lang=vi`)