var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");
var rpl=document.getElementById("ripple");



var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2CRipple&vs_currencies=inr",
     "method":"GET",
     "headers":{}
}

$.ajax(liveprice).done(function(response){
    btc.innerHTML=response.bitcoin.inr;
    eth.innerHTML=response.ethereum.inr;
    doge.innerHTML=response.dogecoin.inr;
    rpl.innerHTML=response.ripple.inr;
});
