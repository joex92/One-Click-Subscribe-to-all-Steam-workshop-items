// ==UserScript==
// @name         One-Click Subscribe to all steam workshop items
// @namespace    https://github.com/joex92/One-Click-Subscribe-to-all-Steam-workshop-items
// @version      4.5
// @description  Subscribe to all items shown.
// @author       JoeX92
// @match        https://steamcommunity.com/workshop/browse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    
    window.onload = ()=>{
        const btn = document.createElement("button");
        const subID = "sub2all";
        let menuText = ( document.querySelectorAll(".rQvmBxj2Kvg-:empty").length ) ? "Subscribe to all" : "Unsubscribe to all";
        const subFunc = async (e)=>{
            console.log(e);
            const unsubscribeditems = document.querySelectorAll(".rQvmBxj2Kvg-:empty");
            if ( unsubscribeditems.length ) {
                btn.textContent = "Subscribing...";
                btn.style.pointerEvents = 'none';
                unsubscribeditems.forEach( async (i,n)=>{
                    await i.parentElement.querySelector("button").click();
                    console.log(`${n.toString().padStart(2,0)}) Subscribed to item: ${i.parentElement.querySelector("._3rvey4VpXts- > a").textContent} ${i.parentElement.querySelector(".CmHGWYJjMk0-- > a").textContent}`);
                });
                btn.textContent = menuText = "Unsubscribe to all";
                btn.style.pointerEvents = '';
            } else {
                const subscribeditems = document.querySelectorAll(".rQvmBxj2Kvg-:not(:empty)");
                btn.textContent = "Unsubscribing...";
                btn.style.pointerEvents = 'none';
                subscribeditems.forEach( async (i,n)=>{
                    await i.parentElement.querySelector("button").click();
                    console.log(`${n.toString().padStart(2,0)}) Unsubscribed to item: ${i.parentElement.querySelector("._3rvey4VpXts- > a").textContent} ${i.parentElement.querySelector(".CmHGWYJjMk0-- > a").textContent}`);
                });
                btn.textContent = menuText = "Subscribe to all";
                btn.style.pointerEvents = '';
            }
            GM_registerMenuCommand(menuText, subFunc, { id: subID, autoClose: false });
        };
        const btnID = 'btn2pge'
        GM_registerMenuCommand("Add Button to Page", (e)=>{
            btn.setAttribute("type","button");
            btn.setAttribute("data-accent-color","dull");
            btn.className = "Thio3V0imwc- _0DdgBbU2bPk- _2RWLTCLE-0s- krQEbDRNCFg-";
            btn.textContent = ( document.querySelectorAll(".rQvmBxj2Kvg-:empty").length ) ? "Subscribe to all" : "Unsubscribe to all";
            btn.onclick = subFunc;
            const btndiv = document.createElement("div");
            btndiv.appendChild(btn);
            const lsection = document.querySelector("._2u-CXYgdzlo-");
            if ( document.querySelectorAll(".BfmIgp5hDLQ- > div > div > button").length ) {
                if ( lsection ) lsection.insertAdjacentElement("afterbegin",btndiv);
                else document.querySelector('.VsQBaHlz-3M-').insertAdjacentElement("beforeend",btndiv);
                GM_unregisterMenuCommand(btnID);
                GM_unregisterMenuCommand(subID);
            }
        }, { id: btnID, autoClose: false });
        GM_registerMenuCommand(menuText, subFunc, { id: subID, autoClose: false });
    };
})();
