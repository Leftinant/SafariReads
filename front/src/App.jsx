import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact";
import CheckOut from "./pages/Checkout";

function App() {
  return (
    <>
      <Toaster position='bottom-right' reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
