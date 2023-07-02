import { useState, useEffect } from "react";


function MyNFTs({ NFTs }){
   const [myNFTs, setMyNFTs] = useState([])
   

   useEffect(() => {
    fetch("http://localhost:3000/myNFTs")
    .then((r) => r.json())
    .then((data) => {
      setMyNFTs(data)
    })
  }, [])

  
   const handleDeleteClick = async (id) => {
    const config = {method: "DELETE"}
    const response = await fetch(`http://localhost:3000/myNFTs/${id}`, config) 
    
    const filteredNFTs = myNFTs.filter(NFT => NFT.id !== id)
    setMyNFTs(filteredNFTs)

   }
   
    
const nft = myNFTs.map((nft)=> (
    <>
    <img alt="nft logo" src={nft.img} width={250} height={250} key={nft.img} />
    <button key={nft.name} onClick={() => handleDeleteClick(nft.id)} className="remove button" type="submit">Remove</button>
    </>
))


    return(
        <div className="myNFT">
        <h1>MyNFTs</h1>
        {nft}
        </div>
    )
}




export default MyNFTs;