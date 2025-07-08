import NavBar from "../../components/navBar";
import Category from "../../components/Category";
import Footer from "../../components/Footer";

function Categories() {
  return (
    <>
      <NavBar />
      <div className='min-h-screen'>
        <Category />
      </div>
      <Footer />
    </>
  );
}

export default Categories;
