import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

function Category() {
  const [items, setItems] = useState([]);
  const base = import.meta.env.VITE_API_BASE_URL;
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Fiction",
    "Comedy",
    "History",
    "Thriller",
    "Kenyan",
    "Science",
    "Biography",
  ];

  const getCount = (category) => {
    if (category === "All") return items.length;
    return items.filter((book) => book.category === category).length;
  };

  useEffect(() => {
    axios
      .get(`${base}/api/book`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <>
      <div className='max-w-screen container mx-auto md:px-30 px-5 dark:bg-slate-900 dark:text-white  bg-white text-black'>
        <div className='pt-30 pb-10 border-b-2'>
          <h1 className='text-4xl font-semibold'>
            Begin Your Literary{" "}
            <span className='text-yellow-500'>Safari 🦒.</span>
          </h1>
          <p className='my-7 text-lg md:mr-150'>
            Embark on an enriching journey through Safari Reads', where every
            book is a doorway, every page a whisper from another world. Wander
            through our thoughtfully curated collections—where timeless tales
            and fresh perspectives lie in wait, eager to be found. Let your
            imagination roam through jungles of fiction, deserts of history,
            oceans of mystery, and the soaring skies of fantasy.
          </p>
        </div>
        <div className='flex'>
          <div className='md:w-1/5 w-2/3 border-r-1 '>
            <h1 className='font-semibold text-2xl my-5'>FILTERS</h1>
            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Categories</h2>
              <div className='mb-4 text-lg w-full'>
                {categories.map((cat) => (
                  <label key={cat} className='w-full flex items-center gap-2'>
                    <input
                      type='radio'
                      name='category'
                      value={cat}
                      checked={filter === cat}
                      onChange={() => setFilter(cat)}
                      className='my-1 mx-3'
                    />
                    {cat}
                    <span className='ml-auto mr-3 w-5 h-5 rounded-full badge badge-sm badge-outline'>
                      {getCount(cat)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Price</h2>
            </div>
            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Availability</h2>
            </div>
          </div>

          <div className='p-5 w-full'>
            <div className='grid md:grid-cols-6 '>
              {filteredItems.map((item) => (
                <Cards item={item} key={item.id} className='mx-auto' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
