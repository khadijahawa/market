"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6962],{26962:function(t,a,r){r.r(a),r.d(a,{Split:function(){return i}});var e=r(49242),c=r(2593),s=r(64146),n=r(60817);r(13550),r(2162),r(64063),r(77191),r(54098),r(54146);class i{static contractRoles=n.dS;get chainId(){return this._chainId}constructor(t,a,r){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.dn(t,a,c,e,r);this._chainId=s,this.abi=n.e.parse(c||[]),this.contractWrapper=p,this.storage=r,this.metadata=new n.ah(this.contractWrapper,n.dT,this.storage),this.app=new n.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,i.contractRoles),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.events=new n.aR(this.contractWrapper),this.interceptor=new n.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){let t=[],a=c.O$.from(0),r=await this.contractWrapper.readContract.payeeCount();for(;a.lt(r);)try{let r=await this.contractWrapper.readContract.payee(a);t.push(await this.getRecipientSplitPercentage(r)),a=a.add(1)}catch(t){if("method"in t&&t.method.toLowerCase().includes("payee(uint256)"))break;throw t}return t}async balanceOfAllRecipients(){let t=await this.getAllRecipients(),a={};for(let r of t)a[r.address]=await this.balanceOf(r.address);return a}async balanceOfTokenAllRecipients(t){let a=await (0,n.cC)(t),r=await this.getAllRecipients(),e={};for(let t of r)e[t.address]=await this.balanceOfToken(t.address,a);return e}async balanceOf(t){let a=await (0,n.cC)(t),r=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),e=await this.contractWrapper.readContract["totalReleased()"](),c=r.add(e);return this._pendingPayment(a,c,await this.contractWrapper.readContract["released(address)"](a))}async balanceOfToken(t,a){let r=await (0,n.cC)(a),c=await (0,n.cC)(t),i=new s.CH(r,e,this.contractWrapper.getProvider()),p=await i.balanceOf(this.getAddress()),o=await this.contractWrapper.readContract["totalReleased(address)"](r),d=p.add(o),h=await this._pendingPayment(c,d,await this.contractWrapper.readContract["released(address,address)"](r,c));return await (0,n.bc)(this.contractWrapper.getProvider(),r,h)}async getRecipientSplitPercentage(t){let a=await (0,n.cC)(t),[r,e]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(t)]);return{address:a,splitPercentage:e.mul(c.O$.from(1e7)).div(r).toNumber()/1e5}}withdraw=(0,n.dp)(async t=>n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await (0,n.cC)(t)]}));withdrawToken=(0,n.dp)(async(t,a)=>n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await (0,n.cC)(a),await (0,n.cC)(t)]}));distribute=(0,n.dp)(async()=>n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]}));distributeToken=(0,n.dp)(async t=>n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await (0,n.cC)(t)]}));async _pendingPayment(t,a,r){let e=a.mul(await this.contractWrapper.readContract.shares(await (0,n.cC)(t))),c=e.div(await this.contractWrapper.readContract.totalShares());return c.sub(r)}async prepare(t,a,r){return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}}}]);