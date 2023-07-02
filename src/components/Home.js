import React from "react";
import { useState, useEffect } from "react";

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
        
   const image = img.map((img)=>(
        <div className="home" key={Math.random()}>
            <img alt="nft" src={img} width={250} height={250} key={img} />
            <button className="Add button" type="submit">Add to Wallet</button>
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
      ))

    return(
        <div className="home-container">
        <h1>Home</h1>
        {image}
        </div>
    )
}




export default Home;