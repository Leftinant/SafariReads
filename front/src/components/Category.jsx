import Cards from "./Cards";
import list from "../assets/list.json";

function Category() {
  const fictionData = list.filter((data) => data.category === "fiction");
  const comedyData = list.filter((data) => data.category === "comedy");
  const historyData = list.filter((data) => data.category === "history");
  const horrorData = list.filter((data) => data.category === "horror");

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white  bg-white text-black'>
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
          <h1 className='font-semibold text-xl'>Fiction</h1>
          <div className='grid md:grid-cols-4'>
            {fictionData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Comedy</h1>
          <div className='grid md:grid-cols-4'>
            {comedyData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>History</h1>
          <div className='grid md:grid-cols-4'>
            {historyData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Horror</h1>
          <div className='grid md:grid-cols-4'>
            {horrorData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
