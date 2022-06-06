import "./styles.css";
import {BrowserRouter} from 'react-router-dom'
import { AllRoutes } from "./Pages/AllRoutes";
import { Provider } from "react-redux";
import {store} from "../src/Redux/store"

console.log(store)


export default function App() {
  return <Provider store={store}>

    <BrowserRouter>


  <AllRoutes></AllRoutes>


</BrowserRouter>
  </Provider>
  
 
}


