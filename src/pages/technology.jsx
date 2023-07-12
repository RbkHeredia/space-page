import { GlobalContext } from '../provider/provider';
import '../styles/layout/_layout.scss';
import '../styles/pages/tech.scss';
import { useContext, useState } from 'react';

export default function Tech () {
  const {technology} = useContext(GlobalContext);
  const [n, setN] = useState(0);

  const handleN = (num) => {
    setN(num-1);
  }

  return(
    <div className="container-tech">
      <div className='row-tech'>
        <h2>03 &nbsp;{technology.title}</h2>
      </div>
      <div className="cont-tech">
        <div className="order2">
          <Menu handleN={handleN}/>
        </div>
        <div className="order3">
          <h3>The terminology</h3>
          <h4>{technology.tech[n].name}</h4>
          <p>{technology.tech[n].description}</p>
        </div>
        <div className="order1">
          <img src={technology.tech[n].images.portrait}/>
        </div>
      </div>
    </div>
  )
}

const Menu = ({ handleN }) =>{
  return(
    <div className='cont-btn'>
      {[1,2,3].map((num)=>
        <button key={num} className='btn-num' onClick={()=>handleN(num)}>{num}</button>
      )}
    </div>
  )
}