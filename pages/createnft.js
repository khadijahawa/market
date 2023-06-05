import { useState,useEffect } from 'react';

import { DefaultNFTBSC, DefaultNFTPolygon,polygonRpc,bsctrpc  } from '../engine/configuration';
import  NFTcreate  from  '../engine/NFTcreate';
import Web3 from 'web3';
import { useRouter } from "next/router";
import detectEthereumProvider from '@metamask/detect-provider';


const {ethers, Wallet} = require("ethers");


const axios = require('axios')


const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxNTEyMDQ4ZS0xOWFlLTQ4ZmYtOGFiOS0xZGQxNDljMGRiMjQiLCJlbWFpbCI6ImNvbnRhY3QuZWxlYXJuaW5nMjAyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMWQ0YjNhN2FjMDBiZWYwMDU5ZmMiLCJzY29wZWRLZXlTZWNyZXQiOiIzMzdlMTM5OTUwMjUwYjBmOWM1OGIzOTJkYTkxZjUzM2U1NWViZmNmNDQ3ZThiMWFkMDFiOTg5MTRkYWQ5ZTljIiwiaWF0IjoxNjc1MTY1MTUwfQ.Of1UvNC2NF3oBh0Qkr7aA7rVNJCl6oN6W08TeOYmEVI`
export const createToken = async(baseURI) => {
    //error handling
        var hh = "0x7a69";
        var goe = "0x5";
        var mm = "0x13881";
        var bsct = "0x61";
        const connected = await detectEthereumProvider();
        let provider ;
        let web3;
        if (connected.chainId == bsct) {
            provider= new ethers.providers.JsonRpcProvider(bsctrpc);
             web3 = new Web3(new Web3.providers.HttpProvider(bsctrpc));
        }
      
      
         provider= new ethers.providers.JsonRpcProvider(polygonRpc);
         web3 = new Web3(new Web3.providers.HttpProvider(polygonRpc));

             const gasPrice = await provider.getFeeData();
   
     const nftContract = await new web3.eth.Contract(NFTcreate, DefaultNFTPolygon);
         
      console.log(Number(gasPrice.maxPriorityFeePerGas));
       const transactionParameters = {
           to: DefaultNFTPolygon, // Required except during contract publications.
           from: window.ethereum.selectedAddress, // must match user's active address.
           //gasLimit: web3.utils.toHex(web3.utils.toWei('50','gwei')),  
           //gasPrice: web3.utils.toHex(web3.utils.toWei('60','gwei')), 
           maxPriorityFeePerGas: web3.utils.toHex(Number(gasPrice.maxPriorityFeePerGas) * 25),
           maxFeePerGas: null, 
           gas: ethers.BigNumber.from(210000).toHexString(),
           'data': nftContract.methods.createToken(baseURI).encodeABI() //make call to NFT smart contract 

           // 'data': nftContract.methods.transferFrom(amount).encodeABI() 
           //make call to NFT smart contract 
           //Web3.utils.toBN(Web3.utils.toWei(val, "ether")).toString(16)
       };
       console.log(transactionParameters)
       //sign transaction via Metamask
       try {
           const txHash = await window.ethereum.request({
                   method: 'eth_sendTransaction',
                   params: [transactionParameters],
               });
           // console.log(txHash);
           window.crypto_cb = function() {
             console.log(txHash);
             return txHash;
           }
           return {
               success: true,
               status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
           }
       } catch (error) {
           return {
               success: false,
               status: "😥 Something went wrong: " + error.message
           }
       }
   }
const CreateNft = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [titreNFT, settitreNFT] = useState("");
    const [descriptionNFT, setdescriptionNFT] = useState("");
    const router=useRouter();
    useEffect(() => { 
        if (window.ethereum.selectedAddress)
        { 
          console.log(window.ethereum.selectedAddress)
        }
        else
        {
          router.push("/wallet")
  
        }
  
       }, [])
    const changeHandler =(event)=>
    {
        setSelectedFile(event.target.files[0]);
    }
    const handleSubmission = async() => {

        const formData = new FormData();
        formData.append('file', selectedFile)
    
        const metadata = JSON.stringify({
          name: 'File name',
        });
        formData.append('pinataMetadata', metadata);
        
        const options = JSON.stringify({
          cidVersion: 0,
        })
        formData.append('pinataOptions', options);
        console.log(formData);
        try{
          const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
              'Content-Type': formData._boundary,
              Authorization: JWT
            }
          });

          let metadataNFT = {
            
                name: titreNFT,
                image: "ipfs://"+res.data.IpfsHash,
                description: descriptionNFT,
                attributes: []
            
          }
          var config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': JWT
            },
            data : metadataNFT
          };
          
          const result = await axios(config);
          console.log(result);

          await createToken("ipfs://"+result.data.IpfsHash)
        } catch (error) {
          console.log(error);
        }



      };
    return (
        <div>

        <section className="create-nft-section padding-bottom padding-top">
        <div className="container">
            <div className="section-wrapper">
                <div className="row justify-content-center">
                   
                    <div className="col-lg-8">

                    <h2>Connect to Polygon or BSC</h2>
                    <h4>Upload 3D Models, Images, Videos, or music </h4>
                        <div className="create-nft py-5 px-4">
                            <div className="create-nft-form">
                                <div className="upload-item mb-30">
                                    <p>PNG,JPG,JPEG,SVG,WEBP,AVI,glTF,glb,Mp3 & Mp4
                                        (Max-100mb)</p>



                                    <div className="custom-upload">
                                        <div className="file-btn"><i className="icofont-upload-alt"></i>
                                            Upload a file</div>
                                        <input type="file" onChange={changeHandler}/>
                                    </div>
                                </div>
                                <div>
                      {/* {selectedFile && (
                        <Image
                          src={URL.createObjectURL(selectedFile)}
                          width={500}
                          height={500}
                          alt="image"
                        />
                      )} */}
                    </div>



                                <div className="form-floating item-name-field mb-3">
                                    <input type="text" className="form-control" id="itemNameInput" placeholder="Item Name" value={titreNFT} onChange={(ev) => settitreNFT(ev.target.value)}/>
                                    <label>Item
                                        Name</label>
                                </div>
                                
                                <div className="form-floating item-desc-field mb-30">
                                    <textarea className="form-control" placeholder="Item Description"
                                        id="itemDesc"
                                        value={descriptionNFT} onChange={(ev) => setdescriptionNFT(ev.target.value)}
                                        ></textarea>
                                    <label>Item
                                        Description</label>
                                </div>
                                
                                <div className="item-category-field mb-30">
                                    <h4>Upload for any Category</h4>
                                    <ul className="item-cat-list d-flex flex-wrap">
                                        <li className="item-cat-btn active">
                                            <span><i className="icofont-vector-path"></i></span>
                                            Art
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-penalty-card"></i></span>
                                            Tickets
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-ui-game"></i></span>
                                            Gaming
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-music-disk"></i></span>
                                            Music
                                        </li>

                                        <li className="item-cat-btn">
                                            <span><i className="icofont-twitter"></i></span>
                                            Videos
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-bill"></i></span>
                                            Collectibles
                                        </li>
                                        <li className="item-cat-btn">
                                            <span>
                                                <i className="icofont-box"></i>
                                            </span> Utility
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-gift"></i></span>
                                            Multiverse
                                        </li>
                                    </ul>
                                </div>
                                
                                 
                               
                                <div className="item-price-field mb-5">
                                    <div className="row g-3 justify-content-center">
                                        <div className="col-md-6 col-lg-4">
                                           
                                        </div>   
                                    </div>
                                    <h5>Creating an NFT is free, only pay network fees.</h5>
                                    <h5>You can trade your newly minted NFT at your profile</h5>
                                </div>
                                <div className="submit-btn-field text-center" onClick={()=>handleSubmission()}>
                                    <button>Create
                                        Item</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default CreateNft;