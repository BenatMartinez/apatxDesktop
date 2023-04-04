require( 'datatables.net-dt' )();


fetch(apiUrl+'clase')
    .then(response => response.json())
    .then(data => {
        // use the retrieved data here
        console.log(data);
        $('#clasesTable').DataTable({
            data: data,
            "columns": [
                { "data": "nombre" },
                { "data": "precio" },
                { "data": "activo" },
                { "data": "createdAt" },
                { "data": "updatedAt" },
                ],
            responsive: true,
            info: false,
            scrollY: '800px',
            scrollCollapse: true,

            language: { search: "" },
            "createdRow": function( row, data, dataIndex){           
                $(row).click(function(event) {
                    
                });
            }
        });
    })
    .catch(error => {
        // handle any errors here
        console.error(error);
    });
