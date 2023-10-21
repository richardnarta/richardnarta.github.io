document.getElementById('mhs_form').addEventListener('submit',
    function(event){
        event.preventDefault();

        const name = document.getElementById('nama').value;
        localStorage.setItem('nama', name)

        List = {
            nama : name
        }

        console.log('success')
    });