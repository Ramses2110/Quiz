const link = 'https://jsonplaceholder.typicode.com/photos'
async function getAPI(url){
    try {
        const resultado = await fetch(url)
        if(resultado.ok){
            console.log(resultado.status)
            return await resultado.json()
        }else{
            throw new Error(`Http error status: ${resultado.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}

var Propiedades = (propiedad)=>`
                    <div class="card">
                        <div class="card-header">
                            Pokemon
                        </div>
                        <div class="card-body">
                            
                            <p class="card-text">El codigo del album es ${propiedad.albumId}.
                            </p>
                            
                            <p class="card-text">El ID es ${propiedad.id}.
                            </p>
                           
                            <p class="card-text">El Nomber es del titulo es S${propiedad.title}.
                       
                           
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Ver Imagen
                            </button>
                        </div>
                    </div>
                    <!-- Button trigger modal -->
                    

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${propiedad.name}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${propiedad.url}" alt="">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>  `

                    if(Propiedades>100){
                        break;
                    }

            
async function renderPropiedades(){
    let propiedadess = await getAPI(link)
    if(propiedadess){
       var renderArray = propiedadess.results.map(Propiedades)
       var renderJoin = renderArray.join(' ')
   
       console.log(renderArray)
       console.log(renderJoin)
   
       let lista = document.querySelector('#renderPropiedades')
       lista.innerHTML=renderJoin
    }
   }        