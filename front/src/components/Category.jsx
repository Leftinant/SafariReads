import Cards from "./Cards";
import list from "../assets/list.json";

function Category() {
  const fictionData = list.filter((data) => data.category === "Fiction");
  const comedyData = list.filter((data) => data.category === "Comedy");
  const historyData = list.filter((data) => data.category === "History");
  const horrorData = list.filter((data) => data.category === "Thriller");
  const kenyaData = list.filter((data) => data.category === "Kenyan");
  const scienceData = list.filter((data) => data.category === "Science");
  const bioData = list.filter((data) => data.category === "Biography");

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 dark:bg-slate-900 dark:text-white  bg-white text-black'>
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
          <div className='grid md:grid-cols-5'>
            {fictionData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Comedy</h1>
          <div className='grid md:grid-cols-5'>
            {comedyData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>History</h1>
          <div className='grid md:grid-cols-5'>
            {historyData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Thriller</h1>
          <div className='grid md:grid-cols-5'>
            {horrorData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Kenyan</h1>
          <div className='grid md:grid-cols-5'>
            {kenyaData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Science</h1>
          <div className='grid md:grid-cols-5'>
            {scienceData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
          <h1 className='font-semibold text-xl'>Biography</h1>
          <div className='grid md:grid-cols-5'>
            {bioData.map((item) => (
              <Cards item={item} key={item.id} size='small' />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
