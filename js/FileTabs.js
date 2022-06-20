'use strict';

var FileTabsContainer = document.getElementById('FileTabsContainer');
var i = 0 ;
const tabCreate=(filename)=>{
    i++;
    let tabButton='<button>test'+i+'</button>';    
    FileTabsContainer.insertAdjacentHTML("afterend",tabButton);



};