import Content from "./Content";
import Cards from "./Cards";
function Home() {
  return (
    <>
      <div className="relative h-[90vh] w-[100%]">
        <div>
          <img
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="home"
            className="h-full w-full absolute object-cover"
          />
        </div>

        <div className="absolute flex flex-col justify-center items-center w-[30%] top-60 left-60">
          <h1 className="text-5xl font-extrabold">Let us find your</h1>
          <h1 className="text-[#E01C48] text-5xl font-extrabold mb-6">
            Forever Food.
          </h1>
          <p className="text-[1.1rem] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex gap-6 -ml-28 mt-6">
            <button
              type="button"
              className="rounded-sm bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 px-14 py-3"
            >
              Search Now
            </button>
            <button
              type="button"
              className="rounded-sm bg-white text-sm font-semibold text-red-600 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 px-14 py-3"
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      <Content />
      <Cards />
    </>
  );
}

export default Home;