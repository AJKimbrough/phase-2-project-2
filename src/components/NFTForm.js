
import React, { useState } from "react";


const url = "http://localhost:3000/myNFTs"

function NFTForm(nft) {
  const [NFTData, setNFTData] = useState({
    id: "",
    name: "",
    img: "",
    price: "",
    description: "",
  });
  

  function handleChange(event) {
    setNFTData({
      ...NFTData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const revisedNFTData = {
          id: Math.random(),
          name: NFTData.name,
          img: NFTData.image,
          price: NFTData.price,
          description: NFTData.description,
    }

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json",},
      body: JSON.stringify(revisedNFTData)
    }).then((r) => r.json()).then(data => {
      //nft.onAddNFT(data)
      console.log(data)
    })
  }

  

  return (
    <section className="Nft-form">
      <h1>New NFT</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={NFTData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            src={NFTData.img}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={NFTData.price}
            onChange={handleChange}
          />
        </label>
        <label>
           Description:
          <input
            type="text"
            name="description"
            value={NFTData.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Add NFT</button>
      </form>
      
    </section>
  );
}

export default NFTForm;