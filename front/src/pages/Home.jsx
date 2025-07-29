import NavBar from "../components/navBar";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import TopBooks from "../components/TopBooks";

function Home() {
  return (
    <>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <NavBar />
        <Banner />
        <TopBooks />
        <Footer />
      </div>
    </>
  );
}

export default Home;
