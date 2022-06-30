import {React,useState} from 'react'
import BottomSide from './bottomSide/bottomSide'
import LayerGroup from './layerGroup/layerGroup'
import TopSide from './topSide/topSide'

function Home() {
  return (
    <>
        <TopSide/>
        <LayerGroup/>
        <BottomSide/>
    </>
  )
}

export default Home