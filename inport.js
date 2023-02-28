let reader = new FileReader(),
    picker = document.getElementById("Pick"),
    table = document.getElementById("Table");

picker.onchange = () => reader.readAsText(picker.files[0]);

reader.onloadend = () => {
  table.innerHTML = "";
  for (let row of CSV.parse(reader.result)) {
    let tr = table.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
};