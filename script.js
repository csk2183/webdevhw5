fetch("https://randomuser.me/api/?results=5")
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    // Get the users array from the data
    const users = data.results;

    // Create HTML string for table rows
    let tableRows = users.map(user => `
      <tr>
        <td>${user.name.first}</td>
        <td>${user.location.city}</td>
      </tr>
    `).join('');

    // Set the inner HTML of the table body
    document.getElementById('usersTableBody').innerHTML = tableRows;
  });
