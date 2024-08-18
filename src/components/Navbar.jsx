import React from 'react'

const Navbar = () => {
  const [isInverted, setIsInverted] = React.useState(true);

  
  const handleClick = () => {
    setIsInverted(!isInverted);
    document.body.style.backgroundColor = isInverted ? '#1a202c' : 'rgb(140, 178, 225)';
    document.body.style.color = isInverted ? 'black' : 'initial';
    document.getElementById('lol').style.backgroundColor = isInverted ? '#C8A1E0' : 'rgb(191 219 254)';
  }

  
 

  return (
    <nav className='flex justify-between align-middle bg-blue-400 text-white py-2 pr-16 '>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>TaskBook</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='text-2xl cursor-pointer hover:font-bold transition-all'>Tasks</li>
        <li onClick={() => window.open("https://www.github.com/nottysukku", "_blank")} className='text-2xl cursor-pointer hover:font-bold transition-all'>About Us</li>
      </ul>
      <img className='cursor-pointer relative right-6' src="src\assets\icons8-dark-mode-50.png" alt="darkmode" onClick={handleClick} style={{ filter: isInverted ? 'invert(1)' : 'none' }}></img>
    </nav>
  )
}

export default Navbar
