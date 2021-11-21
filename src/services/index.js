import axios from 'axios'
import Cookies from 'js-cookie'

const Token = Cookies.get('access-token')

export const sendToken = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/authentication/accesstoken', data)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const DeleteMember = (data) => {
  return axios
    .delete(process.env.REACT_APP_SECRET_API + '/authentication/delete',{data:data})
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const FetchAllMember = () => {
  return axios
    .get(process.env.REACT_APP_SECRET_API + '/member/all' ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const InsertProducts = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/product/insert', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const DeleteProductByID = (data) => {
  return axios
    .delete(process.env.REACT_APP_SECRET_API + '/product/delete', {data:data} ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const UpdateProduct = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/product/update', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const UpdateStatusProduct = (data) => {
  return axios
    .post(process.env.REACT_APP_SECRET_API + '/product/updatestatus', data ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}

export const FetchAllProduct = () => {
  return axios
    .get(process.env.REACT_APP_SECRET_API + '/product/all' ,{ headers: { Authorization: `${Token}` } })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err)
    })
}
