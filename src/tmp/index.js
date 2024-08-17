const http = axios.create({
	baseURL: 'http://localhost:8082/api',
	headers: {
		'Content-type': 'application/json',
	},
});

function getAll() {
	return http.get('/modules');
}

function get(id) {
	return http.get(`/modules/${id}`);
}

function create(data) {
	return http.post('/modules', data);
}

function update(id, data) {
	return http.put(`/modules/${id}`, data);
}

function deleteModule(id) {
	return http.delete(`/modules/${id}`);
}

function deleteAll() {
	return http.delete(`/modules`);
}

function findByTitle(title) {
	return http.get(`/modules?title=${title}`);
}

function showContent(id) {
	const contentElements = document.querySelectorAll('.content > div');
	contentElements.forEach((element) => (element.style.display = 'none'));
	document.getElementById(id).style.display = 'block';
}

function showPopup(id) {
	document.getElementById(id).style.display = 'block';
}

function hidePopup(id) {
	document.getElementById(id).style.display = 'none';
}

function addModule() {
	const moduleName = document.getElementById('module-name').value;
	const homeContent = document.querySelector('.main-content');

	create({
		id: null,
		title: moduleName,
		description: moduleName,
		published: true,
		submitted: true,
	});

	homeContent.innerHTML += `
      <div class="main-content-container">
        <div class="projects-container">
          <h2>${moduleName}</h2>
          <div class="projects-cards-container">
            <div class="card">
            </div>
          </div>
        </div>
      </div>
  `;
	hidePopup('add-module');
}
