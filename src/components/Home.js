import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function Home({ img, NFTs, onAddNFT }){
    const [isOpen, setIsOpen] = useState(false)
    const [myNFTs, setMyNFTs] = useState([])

    const openModal = () => {
            setIsOpen((isOpen ) => !isOpen)
        }


        useEffect(() => {
         fetch("http://localhost:3000/myNFTs")
         .then((r) => r.json())
         .then((data) => {
           setMyNFTs(data)
         })
       }, [])
     
       
        const handleAddClick = async (id) => {
         const config = {method: "POST"}
         const response = await fetch(`http://localhost:3000/myNFTs/${id}`, config) 
         
         const onAddNFT = (newNFT) => {
            setMyNFTs([...NFTs, newNFT])
          }
     
        }

        const nft = NFTs.map((nft)=> (
            <>
            <img alt="nft logo" src={nft.img} width={250} height={250} key={nft.img} />
            <button key={nft.name} onClick={openModal} className="button">{<Modal NFTs={NFTs} name={nft.name} price={nft.price} description={nft.description}/>}</button>
            </>
        ))

    return(
        <div className="home-container">
        <h1>Home!</h1>
        {nft}
        
        </div>
    )
}




export default Home;