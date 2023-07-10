import { GlobalContext } from '../provider/provider';
import '../styles/layout/_layout.scss';
import '../styles/pages/destination.scss';
import { useContext, useState } from 'react';


export default function Destination () {
  const {destination} = useContext(GlobalContext);
  const [n, setN] = useState(0);

  const handleW = (id) =>{
    setN(id)
  }
  return(
    <div className='container-dest'>
      <div className="row">
        <div className="column">
          <h2>01 &nbsp;{destination.title}</h2>
          <img src={destination.world[n].image} className='world-image'/>
        </div>
        <div className="column">
          <Nav handleW={handleW}/>
          <h3 className='world-name'>{destination.world[n].name}</h3>
          <p>{destination.world[n].description}</p>
          <div className="line-dest"></div>
          <div className='row-dest'>
            <Info info={destination.world[n].distance} title='AVG distance'/>
            <Info info={destination.world[n].travel} title='EST. travel time'/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Nav = ({ handleW }) => {
  const {destination} = useContext(GlobalContext);
  return(
    <nav>
      <ul className='ul-dest'>
        {destination.menu.map(({id, title})=>
          <button className='link-button' onClick={()=>handleW(id)} key={id}>{title}</button>
        )}
      </ul>
    </nav>
  )
}

const Info = ({ info, title }) =>{
  return(
    <div className='info-dest'>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  )
}