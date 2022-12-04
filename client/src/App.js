import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
// import SignUp  from "./components/SignUp"
import Profile from "./components/Profile"
import LandingPage from "./components/LandingPage"
import UserFeed from "./components/UserFeed"
import BuyAndSell from "./components/BuyAndSell"
//import Header from "./components/Header"

import AddNewItem from "./components/AddNewItem"


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/UserFeed" element={<UserFeed />}></Route>
        <Route path="/BuyAndSell" element={<BuyAndSell />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/AddNewItem" element={<AddNewItem />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}
export default App


