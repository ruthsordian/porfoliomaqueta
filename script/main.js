function cambiar_parrafo() {
    document.getElementById("edit-acecade").style.display = "block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};

function myFunction(valor) {
    document.getElementById("text-acercade").innerText = valor;
};
//controla si se presina un enter
let textarea = document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    logMessage('key "${e.key}" released [event:keyup]');
    if (e.key == "Enter") {
        document.getElementById("edit-acercade").style.display = "none"
    }
});

//carga el contenido de un archivo de texto
//y lo muestra en el parrafo
function showFile(input) {
    let file = input.file[0];
    alert('File name: ${file.name}');
    alert('Last modified: ${file.lastModified}');

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText = reader.result;
    };
    reader.onerror = function() {
        console.log(reader.error)
    };
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let i = 0;
let txt = 'Full Stack Developer'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}