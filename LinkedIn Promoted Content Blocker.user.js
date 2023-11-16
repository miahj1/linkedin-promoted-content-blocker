// ==UserScript==
// @name         LinkedIn Promoted Content Blocker
// @namespace    https://www.jabedmiah.com
// @version      1.02
// @description  Blocks promoted posts from the LinkedIn feed.
// @author       Jabed Miah
// @match        *://*.linkedin.com/*
// @icon         https://www.google.com/s2/favicons?domain=linkedin.com
// @supportURL   https://github.com/miahj1/linkedin-promoted-content-blocker/issues
// @license      MIT
// ==/UserScript==

(new MutationObserver(elementCheck)).observe(document, {childList: true, subtree: true});

let initialUrl = location.href;

function elementCheck(changes, observer) {
    if (initialUrl.includes("feed")) {
        const cards = document.getElementsByClassName("ember-view  occludable-update");

        for (card of cards) {
            const companyFound = card.querySelector('img[src*="company-logo_100_100"]')
            if (companyFound) {
                card.style.display = "none";
            }
        }
    }
}
