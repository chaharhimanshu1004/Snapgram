import "./globals.css"
import { Routes,Route } from 'react-router-dom'
import SigninForm from "./_auth/forms/SigninForm"
import SignupForm from "./_auth/forms/SignupForm"
import { Home } from "./_root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"





const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            <Route element={<AuthLayout/>}>
              <Route path="sign-in" element={<SigninForm/>}/>
              <Route path="sign-up" element={<SignupForm/>}/>
            </Route>
            
            <Route element={<RootLayout/>} >
              <Route index element={<Home/>}/>   {/* index means its the starting page */}
            </Route>
        </Routes>


    </main>
  )
}

export default App
