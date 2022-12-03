import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import SignIn from "./components/SignIn"
// import Profile from "./components/Profile"
// import cors from "cors"
import BuyAndSell from "./components/BuyAndSell"
import SignIn from "./components/SignIn"
import LandingPage from "./components/LandingPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/buysell" element={<BuyAndSell />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
// function App() {
//   const [isUserLoggedIn, setUserLoggedIn] = useState(true)
//   const userAuthentication = () => {
//     setUserLoggedIn(!isUserLoggedIn)
//   }
//   return (
//     <div className="App">
//       <PageHeader isUserLoggedIn = {isUserLoggedIn} userAuthentication = {userAuthentication }/>
//     </div>
//   );
// }
// export default App;






