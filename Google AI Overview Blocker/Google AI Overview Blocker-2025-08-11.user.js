// ==UserScript==
// @name         Google AI Overview Blocker
// @namespace    https://dme6.github.io
// @version      2025-08-11
// @description  Encourages you to look for more accurate information before resorting to AI.
// @author       dme6
// @match        *://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// TODO: Add way to block the element faster

(function() {
    'use strict';

    const State = {
        SHOWN: 0,
        HIDDEN: 1
    };

    let eState = State.HIDDEN;

    // const e = document.getElementsByClassName("hdzaWe")[0];
    const e = document.getElementById("eKIzJc");
    const div = document.createElement("div");
    const btn = document.createElement("button");

    e.style.display = "none";

    div.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
    div.style.borderRadius = "8px";
    div.style.marginBottom = "20px";
    div.style.marginTop = "10px";

    btn.style.marginLeft = "10px";
    btn.style.marginTop = "10px";
    btn.style.marginBottom = "10px";
    btn.style.padding = "5px";
    btn.innerText = "Show AI Results";

    div.appendChild(btn);
    e.parentElement.appendChild(div)

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

})();