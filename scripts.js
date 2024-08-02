document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        { name: 'Portfolio Website', description: 'A personal portfolio website to showcase my projects and skills.', link: '#' },
        { name: 'E-commerce App', description: 'A full-stack e-commerce application built with React and Node.js.', link: '#' },
        { name: 'Weather Dashboard', description: 'A web application that provides real-time weather information.', link: '#' }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a> - ${project.description}`;
        projectList.appendChild(listItem);
    });
});
