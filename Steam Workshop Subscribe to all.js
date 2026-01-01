// ==UserScript==
// @name         One-Click Subscribe to all steam workshop items
// @namespace    https://github.com/joex92/One-Click-Subscribe-to-all-Steam-workshop-items
// @version      2.0
// @description  Subscribe to all items shown.
// @author       JoeX92
// @match        https://steamcommunity.com/workshop/browse/?appid=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    window.onload = ()=>{
        const btn = document.createElement("span");
        btn.setAttribute("data-panel","{&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}");
        btn.setAttribute("role","button");
        btn.className = "general_btn createCollection";
        btn.textContent = "Subscribe to all"
        btn.onclick = (e)=>{
            const unsubscribeditems = document.querySelectorAll(".general_btn.subscribe:not(.toggled)");
            if ( unsubscribeditems.length ) {
                unsubscribeditems.forEach((i,n)=>{
                    i.onclick();
                    console.log(`${n.toString().padStart(2,0)}) Subscribed to item id: ${i.id.match(/(\d+)/)[0]}`);
                });
                btn.textContent = "Unsubscribe to all";
            } else {
                const subscribeditems = document.querySelectorAll(".general_btn.subscribe.toggled");
                subscribeditems.forEach((i,n)=>{
                    i.onclick();
                    console.log(`${n.toString().padStart(2,0)}) Unsubscribed to item id: ${i.id.match(/(\d+)/)[0]}`);
                });
                btn.textContent = "Subscribe to all";
            }
        };
        document.querySelector(".rightSectionHolder>.rightDetailsBlock").insertAdjacentElement("afterbegin",btn);
    };

    // Your code here...
})();
