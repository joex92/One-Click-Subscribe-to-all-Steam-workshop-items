// ==UserScript==
// @name         One-Click Subscribe to all steam workshop items
// @namespace    http://tampermonkey.net/
// @version      1.0
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
        btn.onclick = (e)=>{
            const items = document.querySelectorAll(".general_btn.subscribe:not(.toggled)");
            items.forEach((i,n)=>{
                i.onclick();
                console.log(`Subscribed to item${n} id: ${i.id.match(/(\d+)/)[0]}`);
            });
        };
        document.querySelector(".rightSectionHolder>.rightDetailsBlock").insertAdjacentElement("afterbegin",btn);
    };

    // Your code here...
})();
