import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

function Category() {
  const base = import.meta.env.VITE_API_BASE_URL;

  const [items, setItems] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  useEffect(() => {
    axios
      .get(`${base}/api/book`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const filteredItems = items.filter((item) => {
    const categoryMatch =
      categoryFilter === "All" || item.category === categoryFilter;
    const ratingMatch =
      ratingFilter === "All" || item.rating === parseInt(ratingFilter);
    const priceMatch =
      priceFilter === "All" ||
      (priceFilter === "<500" && item.price < 500) ||
      (priceFilter === "500-1000" && item.price >= 500 && item.price <= 1000) ||
      (priceFilter === ">1000" && item.price > 1000);
    const availabilityMatch =
      availabilityFilter === "All" ||
      (availabilityFilter === "in" && item.available === true) ||
      (availabilityFilter === "out" && item.available === false);

    return categoryMatch && ratingMatch && priceMatch && availabilityMatch;
  });

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
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/5 w-full md:border-r-1 '>
            <h1 className='font-semibold text-2xl my-5'>FILTERS</h1>
            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Categories</h2>
              <div className='mb-4 text-lg w-full '>
                {[
                  "All",
                  "Biography",
                  "Comedy",
                  "Fiction",
                  "History",
                  "Kenyan",
                  "Science",
                  "Thriller",
                ].map((option) => (
                  <label key={option}>
                    <br />
                    <input
                      type='radio'
                      name='category'
                      value={option}
                      checked={categoryFilter === option}
                      onChange={() => setCategoryFilter(option)}
                      className='mx-3 '
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Rating</h2>
              <div className='mb-4 text-lg w-full'>
                {["All", "1", "2", "3", "4", "5"].map((option) => (
                  <label key={option}>
                    <br />
                    <input
                      type='radio'
                      name='rating'
                      value={option}
                      checked={ratingFilter === option}
                      onChange={() => setRatingFilter(option)}
                      className='mx-3'
                    />
                    {option === "All" ? "All" : `${option} Star Rating`}
                  </label>
                ))}
              </div>
            </div>

            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Price</h2>
              <div className='mb-4 text-lg w-full'>
                {["All", "<500", "500-1000", ">1000"].map((option) => (
                  <label key={option}>
                    <br />
                    <input
                      type='radio'
                      name='price'
                      value={option}
                      checked={priceFilter === option}
                      onChange={() => setPriceFilter(option)}
                      className='mx-3'
                    />
                    {option === "<500"
                      ? "Below 500"
                      : option === "500-1000"
                      ? "From 500 to 1000"
                      : option === ">1000"
                      ? "Above 1000"
                      : "All"}
                  </label>
                ))}
              </div>
            </div>
            <div className='border-t-1 py-4'>
              <h2 className='text-xl  font-semibold'>Availability</h2>
              <div className='mb-4 text-lg w-full'>
                {[
                  { label: "All", value: "All" },
                  { label: "In Stock", value: "in" },
                  { label: "Out of Stock", value: "out" },
                ].map(({ label, value }) => (
                  <label key={value}>
                    <br />
                    <input
                      type='radio'
                      name='availability'
                      value={value}
                      checked={availabilityFilter === value}
                      onChange={() => setAvailabilityFilter(value)}
                      className='mx-3'
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className='px-5 w-full'>
            <div className='w-full justify-end flex'>
              <div className='dropdown dropdown-start m-5'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn-outline border-1  p-2 rounded-2xl w-52'
                >
                  Sort by <i className='fas fa-arrow-down ml-30'></i>
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='grid md:grid-cols-5 '>
              {filteredItems.map((book, index) => (
                <Cards item={book} key={book._id || index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
