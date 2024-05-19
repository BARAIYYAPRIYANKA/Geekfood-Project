import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

function Foods() {
  const navigate = useNavigate()
  const [serachResult,setSearchResults] = useState([])
  // const [selectedCountry, setSelectedCountry] = useState("");
  const [Countries, setCountries] = useState([]);
  const[search,setSearch] = useState("")
  const[selectedCountry,setSelectedCountry] = useState("")

  useEffect(() =>{
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data = await response.json();
      const countries = data.meals.map((meal) => meal.strArea);
      setCountries(countries)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        if (selectedCountry !== "") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setSearchResults(data.meals ? data.meals : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [selectedCountry]);
  return (
    <div className='mt-28 mb-20'>
         <h1 className="text-3xl font-bold text-center pt-6 drop-shadow-lg">
        Search your Food Recipe
      </h1>
        <div className="flex gap-5 justify-center my-10">
          
        <input
          type="search"
          className="border-black border-[1px] outline-none rounded-lg px-3 h-[35px]"
          placeholder="Enter food name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border-black border-[1px] outline-none rounded-lg px-3 h-[35px]"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {Countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
       
      </div>
      {serachResult.length === 0 ? <Loader/> : <div className='flex flex-wrap px-20 justify-center items-center gap-20'>
              {serachResult.filter(item => item.strMeal.toLowerCase().includes(search.toLowerCase())).map((meal, index) => (
          <div
            key={meal + index}
            className="w-[300px] h-[290px] overflow-hidden rounded-2xl hover:scale-110 duration-300 hover:shadow-2xl hover:cursor-pointer"
            onClick={() => {
              console.log(meal.idMeal);
              navigate(`/fooddetail/${meal.idMeal}`)
            }}
          >
            <img
              src={meal.strMealThumb}
              className="h-[200px] w-[300px] rounded-2xl "
              alt="meal"
            />
            <div className="flex flex-col px-5 py-1">
              <h2 className="text-xl font-bold capitalize text-[rgb(65,68,73)]">
                {meal.strMeal}
              </h2>
              <p className="text-[rgb(103,106,109)]">{meal.strArea} food</p>
              <p
                className={`flex justify-between ${
                  meal.strCategory == "Vegetarian"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {" "}
                <span>#{meal.strCategory}</span>{" "}
                <span className="bg-[#1D4ED8] text-white font-semibold w-[90px] h-[30px]  rounded-lg flex justify-center items-center">
                  Check
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Foods