import React from 'react'
import NavLink from './NavLink';

const Navigation = () => {

    const navs = [
        {
            name:"How it Works",
        },
        {
            name:"Features",
        },
        {
            name:"About Us",
        },
        {
            name:"Donate Us",
        }
    ]
  
    const classes = "list-none gap-10 flex items-center w-[36rem] z-50 text-lg";
    return (
    

    <div>
      
      <ul className={classes}>

            {navs.map((nav)=>(
                <li className="link ">
                    <NavLink name={nav.name} />
                </li>
            ))}
                    
      </ul>
  
      
      </div>

    
  )
}

export default Navigation