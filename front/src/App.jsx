import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Signup from "./components/Signup";
import Home from "./pages/Home";

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
