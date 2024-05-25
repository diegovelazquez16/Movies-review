document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('coment');
    const saveButton = document.getElementById('saveButton');



    saveButton.addEventListener('click', () => {
        const textValue = textarea.value;
        localStorage.setItem('textareaContent', textValue);
        alert('Se registro el comentario');
        
        console.log(textValue);
    })

    })
    
    