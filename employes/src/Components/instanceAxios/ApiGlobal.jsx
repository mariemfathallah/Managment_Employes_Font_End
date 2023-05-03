
import axios from 'axios'



const instanceAxios = axios.create({
    baseURL : 'http://localhost:4000',
})

instanceAxios.interceptors.request.use((request)=>{
    const token = localStorage.getItem('token')
    if(token){

        request.headers.Authorization = `Bearer ${token}`
    }
    return request
},
(error)=>{
    return Promise.reject(error)
}
)

instanceAxios.interceptors.response.use(function(response){
    return response;
},
function(error){
    //  if(error.response.status === 401){
    //     //redirect to login page if unauthorized
    //     window.location.href ='/'
    //  }
     return Promise.reject(error)
}
)


export default instanceAxios