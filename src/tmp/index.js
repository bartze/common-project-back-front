function showContent(id) {
  const contentElements = document.querySelectorAll('.content > div');
  contentElements.forEach(element => element.style.display = 'none');
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
