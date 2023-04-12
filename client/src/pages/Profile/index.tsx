import { Link } from "react-scroll";
import About from "../../components/Profile/About";
import Contact from "../../components/Profile/Contact";
import Portfolio from "../../components/Profile/Portfolio";
import Skills from "../../components/Profile/Skills";
import Work from "../../components/Profile/Work";

const Profile = () => {

    return (
        <div>
            <Portfolio />
            <About />
            <Skills />
            <Work />
            <Contact />
            <div className="hidden lg:flex fixed flex-col bottom-[10%] left-[40%] md:flex">
                <div className="lg:flex md:flex flex-row">
                    <ul className='hidden md:flex'>
                        <li>
                            <Link to='home' smooth={true} duration={500} className="text-white font-bold">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} duration={500} className="text-white font-bold">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' smooth={true} duration={500} className="text-white font-bold">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='work' smooth={true} duration={500} className="text-white font-bold">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' smooth={true} duration={500} className="text-white font-bold">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;