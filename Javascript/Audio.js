const div = document.getElementById('Play_Button-Music');

function Change(){
 setTimeout(() => {document.getElementById('audio').play();}, 100);
}

function Change2(){
    setTimeout(() => {document.getElementById('audio').pause();}, 100)
}
