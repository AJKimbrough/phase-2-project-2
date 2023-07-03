import React from "react";
import { useState, useEffect } from "react";

function Home({ img, NFTs, onAddNFT }){
    const [isOpen, setIsOpen] = useState(false)
    const [myNFTs, setMyNFTs] = useState([])

    const openModal = () => {
            setIsOpen((isOpen ) => !isOpen)
        }
    const open = () => {isOpen  (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={openModal}>
                    &times;
                </span>
                <h2>{nft.name}</h2>
                <p>{nft.price}</p>
                <p>{nft.description}</p>
            </div>
        </div>
    )}
    console.log(open)

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
            <button key={nft.name} onClick={openModal} className="button">View Details</button>
            {open}
            </>
        ))

        /*
   const image = img.map((img)=>(
        <div className="home" key={Math.random()}>
            <img alt="nft" src={img} width={250} height={250} key={img} />
            <button onClick={openModal}>View details</button>
                {isOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={openModal}>
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
        <div className="home-container">
        <h1>Home</h1>
        {nft}
        </div>
    )
}




export default Home;