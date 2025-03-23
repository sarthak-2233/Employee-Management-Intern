import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbWorldWww } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const images = [
  "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/01/202502191099986199.png",
  "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
  "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/01/20250219474581099.png",
  "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/01/202502192027007184.png"
];

const Login = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Continuous Left-to-Right Slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startPosition = 0;

    const slide = () => {
      startPosition -= 1; // Adjust speed by changing this value
      if (startPosition <= -slider.scrollWidth / 2) {
        startPosition = 0;
      }
      slider.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(slide);
    };

    requestAnimationFrame(slide);
  }, []);

  // Handle Login Button Click
  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      navigate('/admin-dashboard');
    } else {
      alert('Empty Credentials');
    }
  };

  return (
    <div 
      className="relative flex flex-col items-center h-screen justify-center 
                 bg-gradient-to-b from-gray-100 from-1/2 to-gray-100 to-1/2 overflow-hidden"
    >
      {/* Continuous Left-to-Right Slider */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex w-max"
          style={{ whiteSpace: 'nowrap' }}
        >
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <div key={index} className="w-screen h-full shrink-0">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <h2 
        className="text-white text-3xl z-10"
        style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
        }}
      >
        National Information Center
      </h2>

      {/* Login Form */}
      <div className="border shadow p-6 w-80 bg-white rounded-lg z-10">
        <h2 className="text-2xl font-bold mb-4">LOGIN</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-teal-600 hover:underline">
            Forgot password
          </a>
        </div>

        {/* Button with onClick for navigation */}
        <button 
          type="button" 
          onClick={handleLogin}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </div>

      <div className='absolute bg-white bottom-60 right-0 w-[140px] h-auto p-4 shadow-lg rounded-lg border border-gray-200'>
    <h1 className="text-lg font-semibold text-teal-600 mb-2 border-b pb-1">Social Links</h1>
  
    <div className="flex flex-col gap-4 items-center justify-between">
      <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-transform transform hover:scale-110">
      <TbWorldWww size={24} />
      </a>
    
    <a href="https://x.com/meity_nicsi?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-transform transform hover:scale-110">
      <FaXTwitter size={24} />
    
    </a>
    <a href="https://www.youtube.com/nationalinformaticscentre" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-transform transform hover:scale-110">
      <FaYoutube size={24} />
    </a>
    </div>
</div>
        {/**About US */}
        
        <div className='absolute bottom-40 left-20 bg-white h-[250px] w-[300px] overflow-auto shadow-lg rounded-lg border border-gray-200 '>
  <h1 className="text-lg font-semibold text-teal-600 p-3 border-b border-gray-300 sticky top-0 bg-white z-10">
    About Us
  </h1>
  <div className="p-3">
    <p className="text-gray-700 text-sm leading-relaxed">
      National Informatics Centre (NIC) under the Ministry of Electronics and Information Technology (MeitY) is the technology partner of the Government of India. NIC was established in the year 1976 with the objective to provide technology-driven solutions to Central and State Governments. NIC's mandate includes:
    </p>
    
    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
      <li>Design and Develop IT Systems for the Government</li>
      <li>Provide ICT Infrastructure to the Government</li>
      <li>Explore & Advise on use of Emerging Technologies</li>
    </ul>
    
    <p className="mt-3 text-sm">
      For more information: 
      <a 
        href="https://www.nic.in/mandate/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-teal-600 hover:underline hover:text-teal-700 ml-1"
      >
        Click Here
      </a>
    </p>
  </div>
</div >
          {/**Footer */}
          <footer className="absolute bottom-0  w-full bg-gray-100 border-t border-gray-300 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-3 md:mb-0">
            <h2 className="text-teal-700 font-semibold text-lg">Sarthak Sharma</h2>
            <p className="text-gray-600 text-sm">Intern</p>
          </div>
          <div className="text-center md:text-right text-gray-500 text-sm">
            © {new Date().getFullYear()} Sarthak Sharma. All rights reserved.
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Login;
