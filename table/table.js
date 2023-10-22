var table = document.getElementById('tabel');

var row = table.insertRow(6);
const header = ["nama", "nim", "prodi", "email", "pass", "jk", "tl", "alamat"]

for(let i=0; i<8; i++){
    var cell = row.insertCell(i);
    cell.innerHTML = sessionStorage.getItem(header[i])
}