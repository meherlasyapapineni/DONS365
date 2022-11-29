import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import Profile from "./components/Profile"
import cors from "cors"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
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






