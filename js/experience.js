// Import the JSON data
import experienceData from '../data/experience.json';

(function() {
    // Select the container where the table will be inserted
    const container = document.querySelector('#experience-table');

    // Create a table from the JSON data
    const table = document.createElement('table');

    // Create the header row
    const headerRow = document.createElement('tr');
    Object.keys(experienceData[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create the rest of the rows
    experienceData.forEach((item) => {
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