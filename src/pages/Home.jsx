import { useNavigate } from "react-router-dom";
    const Home = () => {
      const navigate = useNavigate();

  const goToExplore = () => {
    navigate('/cities');
  };
      return (        
        <div className="w-full bg-[#121212] text-[#f5f5f5] overflow-hidden">          
          {/* Navigation */}
          <nav className="flex justify-between items-center w-full h-[12vh] bg-[#1f1f1f] px-10 shadow-md">
            <h1 className="font-poppins font-bold text-4xl text-[#37bc9b] hover:text-[#ff4081] transition-colors">
              GoTravel 
            </h1>
            <div className="relative">
              <div className="w-[30px] h-[25px] bg-[url('./img/menuu1.jpg')] cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute top-[12vh] right-0 w-[250px] h-[90vh] bg-[#333] rounded-lg p-6 transform translate-x-full opacity-0 transition-transform duration-500">
                <a href="index.html" className="block mb-5 text-xl text-[#37bc9b] hover:text-[#ff4081] transition-colors">Home</a>
                <a href="places.html" className="block mb-5 text-xl text-[#37bc9b] hover:text-[#ff4081] transition-colors">Places</a>
                <a href="contact.html" className="block mb-5 text-xl text-[#37bc9b] hover:text-[#ff4081] transition-colors">Contact</a>
              </div>
            </div>
          </nav>
    
          {/* Main Section */}
          <main className="flex flex-col lg:flex-row justify-between items-center w-full h-[85vh] px-20 py-10">
            <div className="flex flex-col max-w-[50%] lg:text-left text-center">
              <h1 className="text-6xl lg:text-left text-center font-poppins text-[#37bc9b] uppercase mb-4 tracking-wide leading-snug">Never Stop to</h1>
              <h2 className="text-2xl lg:text-left text-center mb-4">Travel...</h2>
              <p className="text-lg text-[#bbbbbb] max-w-[600px] leading-relaxed mb-8">
              Immerse yourself in the timeless beauty of India, a land where every sunrise brings new wonders. From the snow-clad peaks of the Himalayas to the golden beaches of Goa, India’s landscapes are as diverse as they are breathtaking. Marvel at the grandeur of the Taj Mahal bathed in moonlight, wander through the lush tea gardens of Kerala, or sail on the serene waters of Kashmir’s Dal Lake. Every region bursts with color, from Rajasthan’s vibrant festivals to the serene temples of Varanasi. India’s natural splendor, paired with its deep cultural heritage, offers a travel experience that will ignite your senses and fill your heart with unforgettable moments. Embark on a journey to discover India’s beauty, and let its charm captivate you.
              </p>
              <a >
                <button className="bg-[#37bc9b] text-white text-lg uppercase px-6 py-3 rounded-full hover:bg-transparent hover:text-[#37bc9b] border-2 border-[#37bc9b] transition-all shadow-lg hover:shadow-xl" onClick={goToExplore}>Explore</button>
              </a>
            </div>
            <div className="flex justify-center items-center mt-10 lg:mt-0">
              <img src="src/img/India/India.jpg" alt="India" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </main>
    
          {/* Footer */}
          <footer className="w-full bg-[#1f1f1f] py-6 flex flex-col lg:flex-row justify-between items-center px-10 gap-8 shadow-lg">
            <div className="flex space-x-6">
              <a href="#" target="_blank"><i className="fab fa-github text-3xl text-[#37bc9b] hover:text-[#ff4081] transition-colors"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram text-3xl text-[#37bc9b] hover:text-[#ff4081] transition-colors"></i></a>
            </div>
            <div className="text-[#bbbbbb]">
              <span>Made by</span> <p id="contri" className="inline">Dev Sharma</p>
            </div>
          </footer>
        </div>
      );
    };
    
    export default Home;
  
