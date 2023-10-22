const form = document.forms.form;

function saveData(key, value){
    sessionStorage.setItem(key, value)
}

function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.entries()];

    for(let i=0; i<data.length; i++){
        saveData(data[i][0], data[i][1])
    }

    setTimeout(() => {
        alert('data berhasil ditambahkan ke tabel!')
    }, 1000);
}

form.addEventListener('submit', handleSubmit);