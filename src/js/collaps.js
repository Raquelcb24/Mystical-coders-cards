'use strict';

const collapsableHeader = document.querySelectorAll(".js_collapsable");
const parentCollaps = document.querySelectorAll(".js_parent");

const handleCollapsable =(event)=> {
    const clickedHeader = event.currentTarget;
    const clickedParent = clickedHeader.parentNode;

    for (const parent of parentCollaps) {
        if(parent === clickedParent){
            parent.classList.remove('js-collapsable');
        
        }else {
            parent.classList.add('js-collapsable');
        };
    };
  
};


for (const header of collapsableHeader){
    header.addEventListener('click', handleCollapsable);
};