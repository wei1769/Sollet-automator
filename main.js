// ==UserScript==
// @name         Sollet auto clicker
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  auto approve and connet
// @author       wei1769.eth
// @match        https://www.sollet.io/
// @icon         https://www.google.com/s2/favicons?domain=sollet.io
// @grant        none
// ==/UserScript==

var run = function(){
    var approve = document.getElementsByClassName('MuiButtonBase-root MuiButton-root MuiButton-contained').item(0);
    var connect = document.getElementsByClassName('MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary').item(0);
    
    if ( approve != null ){
        
        approve.click();
    }
    if (connect != null){
        var connectString = connect.getElementsByClassName('MuiButton-label').item(0) 
        if (connectString.innerText == "CONNECT"){

            connect.click();
        }    
    }
   
}
setInterval(run,10)
