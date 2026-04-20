import { enVenta, enAlquiler } from './data/js/casas.js'

const renderizarPropiedades = (propiedad) => {
  const { nombre, src, descripcion, ubicacion, habitaciones, banos, costo, smoke, pets } = propiedad

  const smokeHTML = smoke
    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'

  const petsHTML = pets
    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
    : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'

  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${src}" class="card-img-top" alt="${nombre}" />
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${habitaciones} Habitaciones | 
            <i class="fas fa-bath"></i> ${banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${costo.toLocaleString()}</p>
          ${smokeHTML}
          ${petsHTML}
        </div>
      </div>
    </div>
  `
}

const mostrarEnDOM = (lista, containerId, limite = 3) => {
  const contenedor = document.getElementById(containerId)
  if (!contenedor) return

  const dataAMostrar = lista.slice(0, limite)
  contenedor.innerHTML = dataAMostrar.map(renderizarPropiedades).join('')
}

mostrarEnDOM(enVenta, 'ventaID')
mostrarEnDOM(enAlquiler, 'alquilerID')
mostrarEnDOM(enVenta, 'ventaTotal', enVenta.length)
mostrarEnDOM(enAlquiler, 'alquilerTotal', enAlquiler.length)
