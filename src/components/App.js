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
const [bestNFTs, setBestNFTs] = useState([])
const [isOpen, setIsOpen] = useState(false)
    
  

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

    const openModal = () => {
        setIsOpen(true)
    }

  return (
    <div className='container'>
      <NavBar />
      <Switch>
        <Route exact path="/NFTForm">
          <NFTForm NFTs={NFTs} setNFTs={setNFTs} />
        </Route>
        <Route exact path="/Best">
          <Best NFTs={NFTs} bestNFTs={bestNFTs} openModal={openModal} />
        </Route>
        <Route exact path="/MyNFTs">
          <MyNFTs  NFTs={NFTs} openModal={openModal} isOpen={isOpen} />
        </Route>
        <Route exact path="/">
          <Home NFTs={NFTs} openModal={openModal} />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
