import React from 'react';

const Navbar = () => {
  const [isInverted, setIsInverted] = React.useState(false);
 const newInvertedState = isInverted;
  // Function to handle toggle
  const handleClick = () => {
   
    setIsInverted(!newInvertedState);

    // Update body styles based on the new state
    document.body.style.backgroundColor = newInvertedState ? '#1a202c' : 'rgb(140, 178, 225)';
    document.body.style.color = newInvertedState ? 'black' : 'initial';
    
    // Find element and update its background color
    const lolElement = document.getElementById('lol');
    if (lolElement) {
      lolElement.style.backgroundColor = newInvertedState ? '#C8A1E0' : 'rgb(191 219 254)';
    }
  };

  return (
    <nav className='flex justify-between align-middle bg-blue-400 text-white py-2 pr-16'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>TaskBook</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='text-2xl cursor-pointer hover:font-bold transition-all'>Tasks</li>
        <li onClick={() => window.open("https://www.github.com/nottysukku", "_blank")} className='text-2xl cursor-pointer hover:font-bold transition-all'>About Us</li>
      </ul>
      <img
        id="darkm"
        className='cursor-pointer relative right-6'
        src="src/assets/asd.png"
        alt={isInverted ? "darkmode" : "lightmode"}
        onClick={handleClick}
        style={{ filter: isInverted ? 'invert(1)' : 'none' }}
      />
    </nav>
  );
};

export default Navbar;
