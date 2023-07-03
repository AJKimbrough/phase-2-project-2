import React from "react";
import { useState } from 'react';
import Modal from "./Modal";

function Best({ bestImg, NFTs }){
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    const nft = NFTs.map((nft)=> (
        <>
        <img alt="nft logo" src={nft.img} width={250} height={250} key={nft.img} />
        <button key={nft.name} onClick={openModal} className="button">{<Modal NFTs={NFTs} name={nft.name} price={nft.price} description={nft.description}/>}</button>
        </>
    ))
/*
    const image = bestImg.map((img)=>(
        <div className="best" key={Math.random()}>
        <img alt="nft" className="image" src={img} width={250} height={250} key={img} onClick={openModal}/>
        <button onClick={openModal}>View details</button>
                {isOpen && (
                    <div className="modalBest">
                        <div className="modal-content-Best">
                            <span className="openBest" onClick={openModal}>
                            &times;
                        </span>
                        <div>
                {NFTs.map((item) => ( 
                    (item.img === img ? <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div> : "")
                ))}
                    </div>
                </div>
              </div>
          )}
        </div>
      ))*/

    return(
        <div className="best">
        <h1>Best</h1>
        {nft}
        </div>
    )
}




export default Best;