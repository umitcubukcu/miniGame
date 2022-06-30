import {useState} from 'react'
import ReactDOM from 'react-dom'
import * as FaIcon from 'react-icons/fa';


function LayerGroup() {
  const [ShowLayers, setLayers] = useState();
  const onOff = ()=>{
    setLayers(!ShowLayers)
  };

  return (
      <div className='layer-group relative left-0 top-20 w-96 bg-gradient-to-r from-cyan-600 to-blue-400 z-[100]'>
        <FaIcon.FaBars className='absolute -top-8 text-3xl' onClick={onOff}/>
        <div className={ShowLayers ? 'visible' : 'hidden'}>
          <div className="layers p-2">
            <div className="head flex items-center">
              <FaIcon.FaLayerGroup className="inline text-2xl"/>
              <p className='inline w-full text-left px-5 text-2xl'>Katmanlar</p>
            </div>
            <div className="layer flex justify-between items-center px-2">
              <FaIcon.FaCar className="inline text-2xl text-white"/>
              <p className='inline text-xl w-full text-left px-5'>Araç Muayne İstasyonları</p>
              <input type="checkBox" className='w-4'/>
            </div>
            <div className="layer flex justify-between items-center px-2">
              <FaIcon.FaGlobeEurope className="inline text-2xl text-white"/>
              <p className='inline text-xl w-full text-left px-5'>Ülkeler</p>
              <input type="checkBox" className='w-4'/>
            </div>
            <div className="layer flex justify-between items-center px-2">
              <FaIcon.FaDoorClosed className="inline text-2xl text-white"/>
              <p className='inline text-xl w-full text-left px-5'>Sınır Kapıları</p>
              <input type="checkBox" className='w-4'/>
            </div>
            <div className="layer flex justify-between items-center px-2">
              <FaIcon.FaUserSecret className="inline text-2xl text-white"/>
              <p className='inline text-xl w-full text-left px-5'>Denetleyiciler</p>
              <input type="checkBox" className='w-4'/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LayerGroup