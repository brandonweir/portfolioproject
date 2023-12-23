// Import the JSON data
import licNcertData from '../data/licNcert.json';

(function() {
    // Select the container where the table will be inserted
    const container = document.querySelector('#licNcert-table');

    // Create a table from the JSON data
    const table = document.createElement('table');

    // Create the header row
    const headerRow = document.createElement('tr');
    Object.keys(licNcertData[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create the rest of the rows
    licNcertData.forEach((item) => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    // Insert the table into the container
    container.appendChild(table);
})();