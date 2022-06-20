
'use strict';

var EditorElement = document.getElementById('Editor');
var EditorFile = document.getElementById('File');
var EditorFileButton = document.getElementById('EditorFileButton');
var i = 0;


EditorElement.addEventListener('click',(event) =>{
    i+=1;
    console.log(i+"\n");
});

EditorFile.addEventListener('change',function(event){

    console.log(this.files);

    let file   = this.files[0];    
    let fileName = file.name; 
    let lastModified = file.lastModified;
    let lastModifiedDate = file.lastModifiedDate;
    let fileType = file.type;
   
    let reader  = new FileReader();
    reader.onload = function(processEvent){
        //console.log(this.result);
        EditorElement.innerHTML = "<pre>"+this.result+"</pre>";
    }
    reader.readAsText(file);
    tabCreate(fileName);
});



let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();
  
  if (fileHandle.kind === 'file') {

    const file = await fileHandle.getFile();
    const content = await file.text();

    EditorElement.innerHTML = "<pre>"+content+"</pre>";


  } else if (fileHandle.kind === 'directory') {
    // run directory code
  }

}


























