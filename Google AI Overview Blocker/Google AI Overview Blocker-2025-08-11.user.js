// ==UserScript==
// @name         Google AI Overview Blocker
// @namespace    https://github.com/dme6
// @version      2025-08-11
// @description  Encourages you to look for more accurate information before resorting to AI.
// @author       dme6
// @match        *://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const ESTR = "eKIzJc";

    // Initial injection to avoid flicker
    function init() {

        const injection = document.createElement("style");
        injection.innerText =
        `
        #${ESTR} { display: none; }

        `;

        document.head.appendChild(injection);

    }

    function block() {

        // Another possible location: const e = document.getElementsByClassName("hdzaWe")[0];
        const e = document.getElementById(ESTR);

        console.log(e);

        if(e){

            const div = document.createElement("div");
            const btn = document.createElement("button");

            const State = {
                SHOWN: 0,
                HIDDEN: 1
            };

            let eState = State.HIDDEN;

            e.style.display = "none";

            div.style.opacity = 0;
            div.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            div.style.borderRadius = "8px";
            div.style.marginBottom = "15px";
            div.style.marginTop = "10px";

            btn.style.marginLeft = "10px";
            btn.style.marginTop = "10px";
            btn.style.marginBottom = "10px";
            btn.style.padding = "5px";
            btn.innerText = "Show AI Results";

            div.appendChild(btn);
            e.parentElement.appendChild(div)

            const fadeInt = setInterval(() => {
                if(div.style.opacity < 1) { div.style.opacity = parseFloat(div.style.opacity) + 0.05; }
                else { clearInterval(fadeInt); }
                console.log("log");
            }, 50);

            btn.addEventListener("click", ev => {
                switch(eState){
                    case State.HIDDEN: {
                        e.style.display = "block";
                        btn.innerText = "Hide AI Results";
                        eState = State.SHOWN;
                        break;
                    }
                    case State.SHOWN: {
                        e.style.display = "none";
                        btn.innerText = "Show AI Results";
                        eState = State.HIDDEN;
                        break;
                    }
                }
            });
        }

    }

    init();

    document.onreadystatechange = function() {
        if(document.readyState == "complete") block();
    }

})();