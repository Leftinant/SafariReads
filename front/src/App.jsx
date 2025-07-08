import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import Categories from "./assets/categories/Categories";

function App() {
  return (
    <>
      {/* <Home />
      <Category /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
