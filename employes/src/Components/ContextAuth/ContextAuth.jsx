
import { createContext} from 'react'
import instanceAxios from '../instanceAxios/ApiGlobal'



const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  

  

  const forgotPassw = async (payload) => {
    const apiResponse = await instanceAxios.post(
      '/auth/forgotPassword',
      payload,
    )
    return apiResponse
  }

  const resetPassw = async (payload) => {
    const apiResponse = await instanceAxios.patch(
      '/auth/requestResetPassword',
      payload
    )
    localStorage.setItem('token', JSON.stringify(apiResponse.data))

  }

  return (
    <AuthContext.Provider value={{  forgotPassw,resetPassw}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext