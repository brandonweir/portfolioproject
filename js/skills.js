import skillsCsv from '../csv/skills.csv';

fetch(skillsCsv)
    .then(response => response.text())
    .then(data => {
        const results = Papa.parse(data, {header: true});
        const skills = results.data.map(row => row.Skills); // Assuming "Skills" is the column name
        const skillsSection = document.querySelector('#skills-list');

        // Sort the skills alphabetically
        skills.sort();

        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.textContent = skill;
            skillsSection.appendChild(skillElement);
        });
    });