// ==UserScript==
// @name         One-Click Subscribe to all steam workshop items
// @namespace    https://github.com/joex92/One-Click-Subscribe-to-all-Steam-workshop-items
// @version      3.0
// @description  Subscribe to all items shown.
// @author       JoeX92
// @match        https://steamcommunity.com/workshop/browse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    window.onload = ()=>{
        const btn = document.createElement("button");
        btn.setAttribute("type","button");
        btn.setAttribute("data-accent-color","dull");
        btn.className = "Thio3V0imwc- _0DdgBbU2bPk- _2RWLTCLE-0s- krQEbDRNCFg-";
        btn.textContent = ( document.querySelectorAll(".rQvmBxj2Kvg-:empty").length ) ? "Subscribe to all" : "Unsubscribe to all";
        btn.onclick = async (e)=>{
            const unsubscribeditems = document.querySelectorAll(".rQvmBxj2Kvg-:empty");
            if ( unsubscribeditems.length ) {
                btn.textContent = "Subscribing...";
                btn.style.pointerEvents = 'none';
                unsubscribeditems.forEach( async (i,n)=>{
                    await i.parentElement.querySelector("button").click();
                    console.log(`${n.toString().padStart(2,0)}) Subscribed to item id: ${i.id.match(/(\d+)/)[0]}`);
                });
                btn.textContent = "Unsubscribe to all";
                btn.style.pointerEvents = '';
            } else {
                const subscribeditems = document.querySelectorAll(".rQvmBxj2Kvg-:not(:empty)");
                btn.textContent = "Unsubscribing...";
                btn.style.pointerEvents = 'none';
                subscribeditems.forEach( async (i,n)=>{
                    await i.parentElement.querySelector("button").click();
                    console.log(`${n.toString().padStart(2,0)}) Unsubscribed to item id: ${i.id.match(/(\d+)/)[0]}`);
                });
                btn.textContent = "Subscribe to all";
                btn.style.pointerEvents = '';
            }
        };
        const lsection = document.querySelector("._2u-CXYgdzlo-");
        if ( document.querySelectorAll(".BfmIgp5hDLQ- > div > div > button").length ) {
            if ( lsection ) rsection.insertAdjacentElement("afterbegin",btn);
            else document.querySelector('.VsQBaHlz-3M-').insertAdjacentElement("beforeend",btn);
        }
    };
})();
