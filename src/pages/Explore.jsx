import { useParams, useLocation } from 'react-router-dom';
import { rajasthan, madhyaPradesh } from '../data/statesData';

const Explore = () => {
  const { cityId } = useParams(); // Extract cityId from URL
  const location = useLocation();
  const { city, state } = location.state || {}; // Use location state if available

  // Choose data based on the selected state
  const stateData = state === "Rajasthan" ? rajasthan : madhyaPradesh;

  // Find the specific city data using cityId
  const cityData = stateData.find(city => city.id === parseInt(cityId));

  if (!cityData) {
    return <div>City not found</div>;
  }

  return (
    <section className="bg-gray-100 py-16 px-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        Explore {cityData.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src={cityData.image}
              alt={cityData.name}
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {cityData.name}
            </h3>
            <p className="text-gray-600 mb-4">{cityData.description}</p>
            <a
              className="inline-block px-6 py-3 text-black border border-black rounded-full shadow-md transition-colors hover:bg-black hover:text-white hover:border-white"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
