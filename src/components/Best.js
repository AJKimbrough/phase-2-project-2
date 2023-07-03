import React from "react";
import Modal from "./Modal";

function Best({ NFTs, bestNFTs, openModal }){

    const nft = bestNFTs.map((nft)=> (
        <>
        <img alt="nft logo" src={nft.img} width={250} height={250} key={nft.img} />
        <button key={nft.name} onClick={openModal} className="button">
            {<Modal NFTs={NFTs} name={nft.name} price={nft.price} description={nft.description}/>}
        </button>
        </>
    ))

    return(
        <div className="best">
        <h1>Top Five in Value:</h1>
        {nft}
        </div>
    )
}

export default Best;