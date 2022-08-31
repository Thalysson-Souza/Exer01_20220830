const data = document.getElementById('dataNascimento');

document.getElementById('dataNascimento').addEventListener('change', calcIdade);

function calcIdade() {
    if(data.value){
        let parag = document.getElementById('aqui');
        if(parag.firstChild){
            parag.removeChild(parag.firstChild);
        }
        parag.append(data.value)
    }

}