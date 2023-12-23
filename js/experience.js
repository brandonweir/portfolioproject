// experience.js
import experienceCsv from '../csv/experience.csv';

(async function() {
    // Select the container where the table will be inserted
    const container = document.querySelector('#experience-table');

    // Fetch the CSV file
    const response = await fetch(experienceCsv);
    const data = await response.text();

    // Parse the CSV data
    const rows = data.split('\n');
    const table = document.createElement('table');
    rows.forEach((row, index) => {
        // Handle quoted values in the CSV data
        const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        const cols = matches ? matches.map(col => col.replace(/"/g, '')) : [];
        const tr = document.createElement('tr');
        cols.forEach(col => {
            // Create th elements for the header row, td elements for the rest
            const cell = document.createElement(index === 0 ? 'th' : 'td');
            cell.textContent = col;
            tr.appendChild(cell);
        });
        table.appendChild(tr);
    });

    // Insert the table into the container
    container.appendChild(table);
})();