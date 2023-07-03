import React from "react";
import Modal from "./Modal";

function Home({ NFTs, openModal }){
  
  const nft = NFTs.map((nft)=> (
      <>
        <img alt="nft logo" src={nft.img} width={250} height={250} key={nft.img} />
        <button key={nft.name} onClick={openModal} className="button">
          {<Modal NFTs={NFTs} name={nft.name} price={nft.price} description={nft.description}/>}
        </button>
      </>
    ))

  return (
      <div className="home-container">
        <h1>Top NFTs on Market</h1>
        {nft} 
        </div>
    )
}

export default Home;