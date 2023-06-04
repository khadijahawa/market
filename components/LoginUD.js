import UAuth from "@uauth/js"
import Callback from "./callback"
import { useRouter } from 'next/router'
import { useEffect,useState } from "react";



function LoginUD () {
         const uauth = new UAuth ({
  clientID: "db9bc76f-a465-483e-9022-de0bd19ffe95",
  redirectUri: "http://localhost:3000",
  scope: "openid wallet email profile:optional social:optional"
         })

         const login = () => { 
            uauth.loginWithPopup().then((authorization)=>{console.log(authorization)})
         }
         const logout = () => { 
         }

         useEffect(() => {

          if(window.ethereum && window.ethereum?.selectedAddress)
          {
             router.push("/");
          }
     }, [])
     const router = useRouter()
 return(
  <div id="Loginwithud">




    <button className="default-btn small-btn move-right" onClick={login} style={{"width":"100px","hight":"50px"}}>Sign in </button>
   

  </div>


 )
}

export default LoginUD;