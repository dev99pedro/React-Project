import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

function Button({children, type, onClick, buttonStyle, buttonSize}){

    const STYLE=['btn--primary', 'btn--outline']
    const SIZE= ['btn--medium', 'btn--large']

    const checkbuttonStyle= STYLE.includes(buttonStyle)? buttonStyle : STYLE[0]
    const checkbuttonSize= SIZE.includes(buttonSize)? buttonSize : SIZE[0]

    return(
        <Link className="btn-mobile" to="/sign-up">
         <button onClick={onClick} type={type} className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}>
            {children}
         </button>
        </Link>
    )
    
}

export default Button