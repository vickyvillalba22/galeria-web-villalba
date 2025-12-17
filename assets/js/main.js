// 0. Items necesarios
const modelViewer = document.querySelector('#sala');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');

// 1. fetch de obras
async function fetchObras() {
  try {
    const response = await fetch('/assets/js/obras.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error cargando obras:', error);
    return [];
  }
}

// 2. render de hotspots
function renderHotspots(obras) {

  obras.forEach((obra) => {

    const hotspot = document.createElement('button');

    hotspot.classList.add('hotspot');
    hotspot.slot = `hotspot-${obra.id}`;
    hotspot.dataset.position = obra.position;
    hotspot.dataset.normal = obra.normal;

    hotspot.addEventListener('click', () => {
      openModal(obra);
    });

    modelViewer.appendChild(hotspot);

  });

}

// 3. render de modal
function openModal(obra) {

  modalContent.innerHTML = `

    <button class="close-modal">&times;</button>
    <img src="${obra.imagen}" alt="${obra.titulo}">
    <h2 class="modal-title">${obra.titulo}</h2>
    <p class="modal-meta">${obra.autor} · ${obra.anio}</p>
    <p class="modal-description">${obra.descripcion}</p>

  `;

  modal.classList.remove('hidden');
  modal.showModal();

  modal.querySelector('.close-modal').addEventListener('click', closeModal);

}

// 5. cierre de modal
function closeModal() {
  modal.close()
  modal.classList.add('hidden')
}

// inicializacion
async function init() {

  const obras = await fetchObras();
  //console.log(obras);

  renderHotspots(obras);

}

init();

