
import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffxg3$dvcv4rtkljjkh38djgt"
const ethraw = "b87aa9f183ecee2e1a55bcd4857b564364b70373861d08b68ff81fa4a2957a66";
const hhraw = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
IPFS API DETAILS
*/
import { create as ipfsHttpClient } from 'ipfs-http-client';
export const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

/*
HardHat Testnet
*/
export var hhresell = "YOUR CONTRACT ADDRESS";
export var hhnftcol = "YOUR CONTRACT ADDRESS";
export var hhnft = "YOUR CONTRACT ADDRESS";
export var hhmarket = "YOUR CONTRACT ADDRESS";
export var hhrpc = "http://localhost:8545";

/*
Goerli Testnet
*/
export var goeresell = "YOUR CONTRACT ADDRESS";
export var goenftcol = "YOUR CONTRACT ADDRESS";
export var goenft = "YOUR CONTRACT ADDRESS";
export var goemarket = "YOUR CONTRACT ADDRESS";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctresell = "YOUR CONTRACT ADDRESS";
export var bsctnftcol = "YOUR CONTRACT ADDRESS";
export var bsctnft = "YOUR CONTRACT ADDRESS";
export var bsctrpc = "https://bsc-dataseed1.ninicoin.io";
export var polygonRpc = "https://polygon-rpc.com/";

/*
Mumbai Testnet
*/
export var mmresell = "YOUR CONTRACT ADDRESS";
export var mmnftcol = "YOUR CONTRACT ADDRESS";
export var mmnft = "YOUR CONTRACT ADDRESS";
export var mmmarket = "YOUR CONTRACT ADDRESS";
export var mmrpc = "https://matic-testnet-archive-rpc.bwarelabs.com";




/*
polygon 
*/

export var cryptoBearNFT = "0x4C52548145a99EAcDe86561ef30Cd01c103cB579";
export var  CryptoCowsClub07 = "0xFc6D74b6c444b00f39544152553b306C24542d94";
export var  marketplaceAddress = "0x30Eff4daCc828A916438Aab8c4005B4EA2b241EE";
export var  bsctmarket = "0x238d94ed5780f5F058a2f6CfaF3aD975887a7308";

export var DefaultNFTPolygon = "0xe147022fe4934f5a2Db8586196794324C62C7592";

export var NEXT_PUBLIC_SUPABASE_URL= "https://aiymggmhhqrbszawrbyh.supabase.co"; // paste your project url here
export var NEXT_PUBLIC_SUPABASE_ANON_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpeW1nZ21oaHFyYnN6YXdyYnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjk1NjQsImV4cCI6MTk5NjgwNTU2NH0.EcqE906g0NrF8SMJ245pGp4M-VWspL1IdTLrNH5SLIk"// paste your supabase anon key here