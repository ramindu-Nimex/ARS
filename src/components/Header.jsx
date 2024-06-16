import { Button, Navbar } from "flowbite-react"
import { FaMoon, FaSun } from "react-icons/fa";
import ars from '/ars.png'
import { Link, useLocation } from "react-router-dom"

const Header = () => {
   const path = useLocation().pathname
  return (
    <Navbar className="border-b-2 sticky top-0 bg-slate-200 shadow-md z-40">
      <div>
         <img src={ars} alt="logo" width='100' />
      </div>
      <div className="flex gap-2 md:order-2">
         <Button className="w-12 h-10 inline text-indigo-800" color="gray" pill>
            <FaMoon />
         </Button>
         <Link to='/'>
            <Button gradientDuoTone='purpleToPink' outline>
               Get Started
            </Button>
         </Link>
         <Navbar.Toggle className="text-sm" />
      </div>
      <Navbar.Collapse>
         <Navbar.Link active={path === "/"} as={'div'}>
            <Link to="/" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">Home</Link>
         </Navbar.Link>
         <Navbar.Link active={path === "/about"} as={'div'}>
            <Link to="/about" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">About Us</Link>
         </Navbar.Link>
         <Navbar.Link active={path === "/services"} as={'div'}>
            <Link to="/services" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">Our Services</Link>
         </Navbar.Link>
         <Navbar.Link active={path === "/partners"} as={'div'}>
            <Link to="/partners" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">Our partners</Link>
         </Navbar.Link>
         <Navbar.Link active={path === "/testimonials"} as={'div'}>
            <Link to="/testimonials" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">Testimonials</Link>
         </Navbar.Link>
         <Navbar.Link active={path === "/chairmenMsg"} as={'div'}>
            <Link to="/chairmenMsg" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">Chairman's Message</Link>
         </Navbar.Link>
         <Navbar.Link active={path === "/contact"} as={'div'}>
            <Link to="/contact" className="text-indigo-800 font-semibold hover:text-indigo-900 hover:underline">Contact Us</Link>
         </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header