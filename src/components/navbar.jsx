import { useContext, useState } from "react"
import { GlobalContext } from "../provider/provider";
import logo from '/assets/shared/logo.svg';
import burger from '/assets/shared/icon-hamburger.svg';
import { Link } from "react-router-dom";
import '../styles/components/navbar.scss';

export default function Navbar(){
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () =>{
    setOpenNav(!openNav)
  }
  return(
    <header className="header-navbar">
      <Logo />
      
      <Line />
      <Nav openNav={openNav}/>
      <IconBurger handleNav={handleNav}/>
    </header>
  )
}

const Logo = () =>{
  return(
    <img src={logo} className="logo-nav"/>
  )
}

const IconBurger = ({ handleNav }) =>{
  return(
    <button className="burger" onClick={handleNav}>
      <img src={burger} />
    </button>
    
  )
}

const Line = () => {
  return(
    <div className="line-nav"></div>
  )
}

const Nav = ({ openNav }) => {
  const { header } = useContext(GlobalContext);

  return(
    <nav className={` ${openNav && 'active'}` }>
      <ul className="list-nav">
        {header.map ((li) =>
          <Link key={li.id} to={li.href} style={{color:'white', textDecoration:'none'}}>{li.id}&nbsp; {li.title}</Link>
        )}
      </ul>
    </nav>
  )
}