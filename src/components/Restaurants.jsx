import { useState } from "react";
import data from "../Restaurant.js";
import { ImSpoonKnife, ImLocation } from "react-icons/im";

function Restaurants() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8">
      <input
        type="text"
        placeholder="Search restaurant....."
        className="w-full border py-2 px-4 rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search restaurant"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems
          .filter((card) =>
            card.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((card) => (
            <div
              key={card._id.$oid}
              className="border shadow-lg rounded-xl overflow-hidden"
            >
              <div className="p-4">
                <h1 className="text-xl  mb-2">{card.name} ⭐⭐⭐⭐⭐</h1>
                <div className="flex items-center mb-2">
                  <ImLocation className="mr-2" />
                  <p>{card.address}, {card["address line 2"]}</p>
                </div>
                <p className="mb-4">{card.outcode} {card.postcode}</p>
                <div className="bg-gray-100 p-4">
                  <div className="flex items-center text-green-400">
                    <ImSpoonKnife className="mr-2" />
                    <h1>{card.type_of_food}</h1>
                  </div>
                  <a
                    href={card.URL}
                    className="block text-blue-500 mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Menu
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex gap-2 text-2xl py-4">
          {Array(Math.ceil(data.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  currentPage === index + 1 ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Restaurants;
