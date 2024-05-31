document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Get selected foods
    let foodElements = document.querySelectorAll('input[name="food"]:checked');
    if (foodElements.length < 2) {
        alert('Please select at least two food items.');
        return;
    }
    let foods = Array.from(foodElements).map(el => el.value).join(', ');

    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    // Append data to table
    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = foods;
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    // Clear form fields
    document.getElementById('form').reset();
});
