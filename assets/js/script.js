
const path = window.location.pathname
console.log(path)
switch(path){
    case '/index.html':
        console.log('primera')
        primerasV();
        primerosA();
    break;
    case '/propiedades_venta.html':
      
        console.log('segunda')
        ventas();
    break;
    case '/propiedades_alquiler.html':
        console.log('tercera')
        alquiler();
    break;


}

function primerasV(){
    console.log('hola')
    const tresPrimeros = propiedades_venta.slice(0, 3);
    const vt = document.getElementById('venta');
    tresPrimeros.forEach((ventas)=>{
    vt.innerHTML+=/*html*/`
    <div class="col-md-4 mb-4">
    <div class="card">
      <img  src=${ventas.src}  class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${ventas.nombre}</h5>
        <p class="card-text">${ventas.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${ventas.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${ventas.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${ventas.costo}</p>
        ${ventas.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
        ${ventas.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
      </div>
    </div>
  </div>`
});
};

function primerosA(){
    const tresPrimeros = propiedades_alquiler.slice(0, 3);
    const al = document.getElementById('alquileres');
    tresPrimeros.forEach((alquiler)=>{
    al.innerHTML+=/*html*/`
    <div class="col-md-4 mb-4">
    <div class="card">
      <img  src=${alquiler.src}  class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${alquiler.nombre}</h5>
        <p class="card-text">${alquiler.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${alquiler.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
        ${alquiler.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
        ${alquiler.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
      </div>
    </div>
  </div>`
});
};

function ventas(){
    const v =document.getElementById('ventas');
    for(let ventas of propiedades_venta){
        v.innerHTML+=/*html*/`
        <div class="col-md-4 mb-4">
        <div class="card">
          <img  src=${ventas.src}  class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${ventas.nombre}</h5>
            <p class="card-text">${ventas.descripcion}</p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${ventas.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${ventas.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${ventas.costo}</p>
            ${ventas.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            ${ventas.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
          </div>
        </div>
      </div>`
    };
    };
    

function alquiler(){
    const a =document.getElementById('alquiler');
    
    for(let alquiler of propiedades_alquiler){
    a.innerHTML+=/*html*/`
    <div class="col-md-4 mb-4">
    <div class="card">
      <img  src=${alquiler.src}  class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${alquiler.nombre}</h5>
        <p class="card-text">${alquiler.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${alquiler.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
        ${alquiler.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
        ${alquiler.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
      </div>
    </div>
  </div>`
};
};


