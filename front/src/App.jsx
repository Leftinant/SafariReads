import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import Categories from "./assets/categories/Categories";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
