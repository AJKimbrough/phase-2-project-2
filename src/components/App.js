//import logo from './../logo.svg';
import './../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Best from "./Best";
import MyNFTs from "./MyNFTs";
import NFTForm from './NFTForm';



function App() {
const [NFTs, setNFTs] = useState([])
const [images, setImages] = useState([])
const [bestImages, setBestImages] = useState([])
const [myNFTImages, setMyNFTImages] = useState([])
const [bestNFTs, setBestNFTs] = useState([])


  const onAddNFT = (newNFT) => {
    setNFTs([...NFTs, newNFT])
  }

useEffect(() => {
  fetch("http://localhost:3000/NFTs")
  .then((r) => r.json())
  .then((data) => {
    setImages(data)
  })
}, [])
const img = images.map(image => image.img)


useEffect(() => {
  fetch("http://localhost:3000/Best")
  .then((r) => r.json())
  .then((data) => {
    setBestImages(data)
  })
}, [])
const bestImg = bestImages.map(image => image.img)

useEffect(() => {
  fetch("http://localhost:3000/Best")
  .then((r) => r.json())
  .then((data) => {
    setBestNFTs(data)
  })
}, [])


useEffect(() => {
  fetch("http://localhost:3000/NFTs")
  .then((r) => r.json()).then((data) => {
    setNFTs(data)
  })
}, [])
//const nft = NFTs.map(nft=> console.log(nft.name))




useEffect(() => {
  fetch("http://localhost:3000/myNFTs")
  .then((r) => r.json())
  .then((data) => {
    setMyNFTImages(data)
  })
}, [])
const myNFTImg = myNFTImages.map(image => image.img)

  return (
    <div className='container'>
      
      <NavBar />
      <Switch>
        <Route exact path="/NFTForm">
          <NFTForm onAddNFT={onAddNFT} NFTs={NFTs} setNFTs={setNFTs} />
        </Route>
        <Route exact path="/Best">
          <Best bestImg={bestImg} NFTs={NFTs} bestNFTs={bestNFTs} />
        </Route>
        <Route exact path="/MyNFTs">
          <MyNFTs onAddNFT={onAddNFT} myNFTImg={myNFTImg} NFTs={NFTs} setNFTs={setNFTs} />
        </Route>
        <Route exact path="/">
          <Home img={img} NFTs={NFTs} setNFTs={setNFTs} onAddNFT={onAddNFT} />
          
        </Route>
        </Switch>
        
    </div>
  );
}

export default App;
