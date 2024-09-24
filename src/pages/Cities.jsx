import { useNavigate } from "react-router-dom";
import { cities } from "../data/state"; // Assuming you have a list of cities in the data file

const Cities = () => {
  const navigate = useNavigate();

  const goToExplore = (city, state) => {
    navigate(`/explore/${city.id}`, { state: { city, state } }); // Pass city and state as parameters
  };

  return (
    <section className="bg-gray-100 py-16 px-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        States in India
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white border border-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:translate-y-[-10px] hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-64 object-cover transition-transform transform hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {city.name}
              </h3>
              <p className="text-gray-600 mb-4">{city.description}</p>
              <div className="text-green-600 text-xl mb-4">
                Population: {city.population}
              </div>
              <a
                className="inline-block px-6 py-3 text-black cursor-pointer border border-black rounded-full shadow-md transition-colors hover:bg-black hover:text-white hover:border-white"
                onClick={() => goToExplore(city, city.state)} // Pass city and state
              >
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cities;
