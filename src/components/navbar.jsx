import { useContext } from "react"
import { GlobalContext } from "../provider/provider";
import logo from '/assets/shared/logo.svg';
import { Link } from "react-router-dom";
import '../styles/components/navbar.scss';

export default function Navbar(){
  return(
    <header className="header-navbar">
      <Logo />
      <Line />
      <Nav />
    </header>
  )
}

const Logo = () =>{
  return(
    <img src={logo} className="logo-nav"/>
  )
}

const Line = () => {
  return(
    <div className="line-nav"></div>
  )
}

const Nav = () => {
  const { header } = useContext(GlobalContext);

  return(
    <nav>
      <ul className="list-nav">
        {header.map ((li) =>
          <Link key={li.id} to={li.href} style={{color:'white', textDecoration:'none'}}>{li.id}&nbsp; {li.title}</Link>
        )}
      </ul>
    </nav>
  )
}