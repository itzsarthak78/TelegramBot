// Initial Data
let projects = JSON.parse(localStorage.getItem('myProjects')) || [
    { title: "Sample Project 1", img: "https://picsum.photos/400/300?sig=1" },
    { title: "Sample Project 2", img: "https://picsum.photos/400/300?sig=2" }
];

// Login Logic
function checkAccess() {
    const pass = document.getElementById('user-pass').value;
    if (pass === "Portfolio") {
        unlockView(false);
    } else {
        alert("Incorrect Portfolio Password");
    }
}

function showAdminLogin() {
    document.getElementById('admin-field').classList.toggle('hidden');
}

function checkAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === "Sarthak12") {
        unlockView(true);
    } else {
        alert("Unauthorized Admin Access");
    }
}

function unlockView(isAdmin) {
    document.getElementById('login-overlay').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    if (isAdmin) {
        document.getElementById('admin-panel').classList.remove('hidden');
        document.getElementById('view-title').innerText = "Admin Dashboard";
    }
    renderProjects();
}

// Portfolio Management
function renderProjects() {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = projects.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.title}">
            <h3>${p.title}</h3>
        </div>
    `).join('');
}

function addProject() {
    const title = document.getElementById('proj-title').value;
    const img = document.getElementById('proj-img').value;

    if (title && img) {
        projects.push({ title, img });
        localStorage.setItem('myProjects', JSON.stringify(projects));
        renderProjects();
        // Clear inputs
        document.getElementById('proj-title').value = '';
        document.getElementById('proj-img').value = '';
    } else {
        alert("Please fill in both fields");
    }
}
