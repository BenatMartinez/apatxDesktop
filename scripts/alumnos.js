require( 'datatables.net-dt' )();


fetch(apiUrl+'alumno')
    .then(response => response.json())
    .then(data => {
        // use the retrieved data here
        console.log(data);
        var table = $('#alumnosTable').DataTable({
            data: data,
            "columns": [
                { "data": '_id', visible: false },
                { "data": "nombre" },
                { "data": "apellido" },
                { "data": "curso" },
                { "data": "descripcion" },
                {
                    data: null,
                    render: function (data, type, row, meta) {
                        return `
                            <button class="btn btn-primary btn-sm edit-row-btn">Edit</button>
                            <button class="btn btn-danger btn-sm delete-row-btn">Delete</button>
                        `;
                    }
                }
                ],
            responsive: true,
            info: false,
            scrollY: '78vh',
            pageLength: 100,
            scrollCollapse: true,

            language: { search: "" },
            "createdRow": function( row, data, dataIndex){           
                $(row).find('.edit-row-btn').click(function (event) {
                    event.stopPropagation();
                    alert('Row ID: ' + data._id);
                });
                $(row).find('.delete-row-btn').click(function (event) {
                    event.stopPropagation();
                    if (confirm('Are you sure you want to delete '+data.nombre+' row?')) {
                        fetch(apiUrl+'alumno/'+data._id, {
                            method: 'DELETE',
                          })
                            .then(response => {return response.json();})
                            .then(data => {
                                console.log(data);
                            })
                            .catch(error => {
                                console.error('There was a problem with the fetch operation:', error);
                            });
                    }
                });

                
            }
        });
    })
    .catch(error => {
        // handle any errors here
        console.error(error);
    });

function enviarDatos() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const descripcion = document.getElementById("descripcion").value;
  const curso = document.getElementById("curso").value;
  const email = document.getElementById("contacto.email").value;
  const telefono = document.getElementById("contacto.telefono").value;
  const tutor = document.getElementById("contacto.tutor").value;
  const direccion = document.getElementById("contacto.direccion").value;

  fetch(apiUrl+'alumno', {
    method: 'POST',
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      descripcion: descripcion,
      curso: curso,
      contacto:{
        email: email,
        telefono: telefono,
        tutor: tutor,
        direccion: direccion
        }
      
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  const cerrarBtn = document.getElementById('cerrarBtn');

    // simulate a click on the button
    cerrarBtn.click();
    }


    