import '../styles/pages/crew.scss';
import { GlobalContext } from '../provider/provider';
import '../styles/layout/_layout.scss';
import { useContext, useState } from 'react';

export default function Crew () {
  const {crew} = useContext(GlobalContext);
  const [n, setN] = useState(0);

  const handleW = (id) =>{
    setN(id)
  }

  return(
    <div className="container-crew">
      <div className="row">
        <div className='column'>
          <div className="title">
            <h2>02 &nbsp;{crew.title}</h2>
          </div>
          <div className='info'>
            <h3>{crew.menu[n].role}</h3>
            <h4>{crew.menu[n].name}</h4>
            <p>{crew.menu[n].bio}</p>
          </div>
          <div className='buttons'>
            <Menu handleW={handleW}/>
          
          </div>
        </div>
        <div className="column order2">
          <img src={crew.menu[n].image}/>
        </div>
      </div>
    </div>
  )
}

const Menu = ({ handleW }) =>{
  return(
    <div className='menu-crew'>
      {[0,1,2,3].map((num)=>
        <button key={num} className='btn-circle' onClick={()=>handleW(num)}></button>
      )}
    </div>
  )
  
}