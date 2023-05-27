import React from 'react'
import { FaFacebook, FaGoogle, FaGooglePlus, FaGooglePlusG, FaLinkedin,FaCartPlus,FaUserCircle,FaTimes,FaOutdent} from 'react-icons/fa'
function Reacthome() {
	function handlebar(){
		const nav1 = document.getElementById('navbar');
		nav1.classList.add('active');
	  }
	  function handlecut(){
		const nav1 = document.getElementById('navbar');
		nav1.classList.remove('active');
	  }
  return (
    <>
      <section id='header'>
        
        <h4 className='logo'><a href='/'></a></h4>
          <div>
            <ul id= 'navbar'>
              <li className='active'><a href="/">Home</a></li>
              {/* <li><a href="./product" >Product</a></li>
              <li><a href="./contact">contact</a></li>
              <li><a href="./about">About</a></li> */}
              <li>
              <a href = "/cart">
              <div className="nav-bag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-handbag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
              </svg>
              <span className="bag-quantity">
                <span>0</span>
              </span>
              </div>
              </a>
              </li>
              <li id='lg-bag'><a href="./login" className='cart'><i><FaUserCircle/></i></a></li>
              <li><a href="#" id='cut' onClick={handlecut}><FaTimes/></a></li>
            </ul>
          </div>
          <div id='mobile'>
          <a href="/" className='cart'><i><FaCartPlus/></i></a>
          <a href="/login" className='cart'><i><FaUserCircle/></i></a>
           <i id='bar' onClick={handlebar}><FaOutdent/></i>
           
          </div>
         </section>
         <section>
            <h1>Welcome to quizzer's club</h1>
         </section>
    </>
  )
}

export default Reacthome
