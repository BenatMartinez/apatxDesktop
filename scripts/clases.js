require( 'datatables.net-dt' )();


fetch(apiUrl+'clase/actives')
    .then(response => response.json())
    .then(data => {
        // use the retrieved data here
        console.log(data);
        var table = $('#clasesTable').DataTable({
            data: data,
            "columns": [
                { "data": '_id', visible: false },
                { "data": "nombre" },
                { "data": "precio" },
                { "data": "activo" },
                { "data": "createdAt" },
                { "data": "updatedAt" },
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
                        fetch(apiUrl+'clase/'+data._id, {
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
