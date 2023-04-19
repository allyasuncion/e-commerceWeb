var selectedRow = null;

function onFormSubmit(e) { // "e" is used as a parameter which is short for event
        event.preventDefault(); // "e" is not used as shortcut, use "event" instead.
                var formData = readFormData(); // assigning a variable which will contain the objects from the function
                if(selectedRow == null){
                        insertNewRecord(formData);
                } else {
                        updateRecord(formData);
                }
                resetForm();
}


// Define a function to retrieve the data

function readFormData(){ // insert the data from form to the blank Object
        var formData = {};
        formData["productCode"] = document.getElementById("productCode").value; //documentation: getElementById(id from html)
        formData["product"] = document.getElementById("product").value;
        formData["quantity"] = document.getElementById("quantity").value;
        formData["perPrice"] = document.getElementById("perPrice").value;
        return formData;
}

// Inserting the user Data

function insertNewRecord(data) {
        var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
                cell1.innerHTML = data.productCode;
        cell2 = newRow.insertCell(1);
                cell2.innerHTML = data.product;
        cell3 = newRow.insertCell(2);
                cell3.innerHTML = data.quantity;
        cell4 = newRow.insertCell(3);
                cell4.innerHTML = data.perPrice;
        cell5 = newRow.insertCell(4);
                cell5.innerHTML = `<button onClick = "onEdit(this)">Edit</button>
                                                <button onClick = "onDelete(this)">Delete</button>`;
}

// Editing the data

function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
        document.getElementById("product").value = selectedRow.cells[1].innerHTML;
        document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
        document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.productCode;
        selectedRow.cells[1].innerHTML = formData.product;
        selectedRow.cells[2].innerHTML = formData.quantity;
        selectedRow.cells[3].innerHTML = formData.perPrice;
}

// Delete the data

function onDelete(td) {
        if ( confirm("Do you want to delete this record?") ) {
                row = td.parentElement.parentElement;
                document.getElementById('storeList').deleteRow(row.rowIndex);
                resetForm();
        } 
}

// Reset the data 
function resetForm() {
        document.getElementById("productCode").value = '';
        document.getElementById("product").value = '';
        document.getElementById("quantity").value = '';
        document.getElementById("perPrice").value = '';
        selectedRow = null;
}