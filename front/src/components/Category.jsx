import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

function Category() {
  const [items, setItems] = useState([]);
  const base = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${base}/api/book`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const fictionData = items.filter((data) => data.category === "Fiction");
  const comedyData = items.filter((data) => data.category === "Comedy");
  const historyData = items.filter((data) => data.category === "History");
  const horrorData = items.filter((data) => data.category === "Thriller");
  const kenyaData = items.filter((data) => data.category === "Kenyan");
  const scienceData = items.filter((data) => data.category === "Science");
  const bioData = items.filter((data) => data.category === "Biography");

  return (
    <>
      <div className='max-w-screen container mx-auto md:px-20 px-5 dark:bg-slate-900 dark:text-white  bg-white text-black'>
        <div className='pt-30 '>
          <h1 className='text-3xl font-semibold'>
            Begin Your Literary{" "}
            <span className='text-yellow-500'>Safari 🦒.</span>
          </h1>
          <p className='my-7'>
            Journey through our curated book categories and discover new
            stories, ideas, and worlds waiting to be explored.
          </p>
        </div>
        <div>
          <h1 className='font-semibold text-4xl my-5'>Fiction</h1>
          <div className='grid md:grid-cols-6'>
            {fictionData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-4xl my-5'>Comedy</h1>
          <div className='grid md:grid-cols-6'>
            {comedyData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-4xl my-5'>History</h1>
          <div className='grid md:grid-cols-6'>
            {historyData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-4xl my-5'>Thriller</h1>
          <div className='grid md:grid-cols-6'>
            {horrorData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-4xl my-5'>Kenyan</h1>
          <div className='grid md:grid-cols-6'>
            {kenyaData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-4xl my-5'>Science</h1>
          <div className='grid md:grid-cols-6'>
            {scienceData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-4xl my-5'>Biography</h1>
          <div className='grid md:grid-cols-6'>
            {bioData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
