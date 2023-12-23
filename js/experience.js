// Import the JSON data
import experienceData from './data/experience.json';

(function() {
    // Select the container where the table will be inserted
    const container = document.querySelector('#experience-table');

    // Create a table from the JSON data
    const table = document.createElement('table');
    experienceData.forEach((item, index) => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
            // Create th elements for the header row, td elements for the rest
            const cell = document.createElement(index === 0 ? 'th' : 'td');
            cell.textContent = value;
            tr.appendChild(cell);
        });
        table.appendChild(tr);
    });

    // Insert the table into the container
    container.appendChild(table);
})();