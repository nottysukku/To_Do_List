import React from 'react';

const Navbar = () => {
  const [isInverted, setIsInverted] = React.useState(false);

  // Function to handle toggle
  const handleClick = () => {
    const newInvertedState = !isInverted; // Invert the current state
    setIsInverted(newInvertedState);
    const lolElement = document.getElementById('lol');

    // Update body styles based on the new state
    document.body.style.backgroundColor = newInvertedState ? '#1a202c' : 'rgb(140, 178, 225)';
    document.body.style.color = newInvertedState ? 'black' : 'initial';
    lolElement.style.backgroundColor = newInvertedState ? '#C8A1E0' : 'rgb(191 219 254)';
  };

  return (
    <nav className='flex flex-wrap justify-between items-center bg-blue-400 text-white py-2 px-4'>
      <div className="logo">
        <span className='font-bold text-xl mx-2 sm:mx-4'>TaskBook</span>
      </div>
      <ul className="flex gap-4 mx-4 lg:mx-8 flex-1 justify-center ">
        <li className='text-lg sm:text-2xl cursor-pointer hover:font-bold transition-all'>Tasks</li>
        <li 
          onClick={() => window.open("https://www.github.com/nottysukku", "_blank")} 
          className='text-lg sm:text-2xl cursor-pointer hover:font-bold transition-all'
        >
          About Us
        </li>
      </ul>
      {/* SVG Icon for Dark/Light Mode Toggle */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 32 32"
        className='cursor-pointer' 
        onClick={handleClick} 
        style={{ filter: isInverted ? 'invert(1)' : 'none', fill: 'currentColor', transition: 'filter 0.3s' }}
      >
        <g fill="none" fillRule="evenodd" transform="translate(-440 -200)">
          <path 
            fill="currentColor" 
            fillRule="nonzero" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            d="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z" 
            transform="translate(354.5 192)"
          ></path>
          <polygon points="444 228 468 228 468 204 444 204"></polygon>
        </g>
      </svg>
    </nav>
  );
};

export default Navbar;
