import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderNavigation = () => {

    const [isActive, setActive] = useState(false);

    const toggleBurger = () => {
        setActive(current => !current);
    }

    const active = isActive ? 'nav-active' : '';

    return (
        <div className="relative">
            <div className="hidden sm:flex items-center">
                <nav>
                    <ul className="flex">
                        <NavLink to={'/'} className="mr-3 font-ubuntu font-medium text-lg text-black">Home</NavLink>
                        <NavLink to={'/about-us'} className="mr-3 font-ubuntu font-medium text-lg text-black ">About Us</NavLink>
                        <NavLink to={'/what-we-do'} className="mr-3 font-ubuntu font-medium text-lg text-black">What We Do</NavLink>
                    </ul>
                </nav>

                <a href="" className="button-about-us">Contact Us</a>
            </div>

            <div className={`sm:hidden menu-burger ${active}`} onClick={toggleBurger}>
                <span className={`menu-burger__line left ${active}`}></span>
                <span className={`menu-burger__line centre ${active}`}></span>
                <span className={`menu-burger__line right ${active}`}></span>
            </div>
        </div>
    )
}

export { HeaderNavigation };