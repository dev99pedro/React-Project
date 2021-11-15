import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from './Button'


function Navbar(props) {

  

    const[click, setClick]=useState(false)

    const handleClick= () =>{
        setClick(!click)
    }



    const closeMobileMenu= () =>{
       setClick(false)
    }


    const[button, setButton]=useState(true)

    function showButton(){
        if(window.innerWidth <=960){ 
            setButton(false)
        } else{
            setButton(true)
        }
    }


    window.addEventListener('resize', showButton)

    useEffect(()=>{
        showButton() 
    }, [])

   
    

    
   

    return (
        <>
            <nav className="navbar">
              <div className="navbar-container">
           
               
                <div className="navbar-logo">
                    <Link to="/" className="navbar-logo"><i onClick={closeMobileMenu} class="fab fa-accusoft"></i></Link>
                </div>

                <div  onClick={handleClick}  className="menu-icon">
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>

                <ul className ={click? 'nav-menu active' : 'nav-menu'}>
                    <li onClick={closeMobileMenu} className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    
                    <li  onClick={closeMobileMenu} className="nav-item">
                        <Link to="/services" className="nav-links">
                            Services
                        </Link>
                    </li>

                    <li  onClick={closeMobileMenu}  className="nav-item">
                        <Link to="/products" className="nav-links">
                            Products
                        </Link>
                    </li>

                    <li  onClick={closeMobileMenu} className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile">
                            Sign-up
                        </Link>
                    </li>
                </ul>
            {button && <Button buttonStyle={button && 'btn--primary'}>Sign Up </Button>}
              </div>
            </nav>

         
            
         
        </>   
    )
}

export default Navbar
