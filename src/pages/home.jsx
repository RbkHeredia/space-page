import { GlobalContext } from '../provider/provider';
import '../styles/layout/layout.scss';
import '../styles/pages/home.scss';
import { useContext } from 'react';

export default function Home() {
  const {home} = useContext(GlobalContext);
  return(
    <div className="container-home">
      <div className="row">
        <div className="column">
          <h1>{home.title} <span className='big-space'>space</span></h1>
          <p>{home.text} </p>
        </div>
        <div className="column">
          <button className='btn-home'>{home.button}</button>
        </div>
      </div>
    </div>
  )
}