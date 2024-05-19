import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

function FoodDetails({ meal }) {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setDetail(data.meals ? data.meals[0] : {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setTimeout(() => {
    fetchData();
    }, 2000);
  }, [id, meal]);

  return (
    <>
    {detail.length === 0 ? <Loader /> : <div className="container mx-auto px-4 py-8 mt-20">
      {detail && (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={detail.strMealThumb}
            alt={detail.strMeal}
            className="w-full h-96 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{detail.strMeal}</h2>
            <p>
              <strong>Category:</strong> {detail.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {detail.strArea}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
              <ul className="list-disc pl-4">
                {Object.keys(detail)
                  .filter(key => key.startsWith("strIngredient") && detail[key])
                  .map(key => (
                    <li key={key}>
                      {detail[`strMeasure${key.slice(-1)}`]} {detail[key]}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Instructions:</h3>
              <p>{detail.strInstructions}</p>
            </div>
            {detail.strYoutube && (
              <div className="mt-4">
                <strong>YouTube Link:</strong>{" "}
                <a
                  href={detail.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Watch Video
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>}
    </>
  );
}

FoodDetails.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default FoodDetails;