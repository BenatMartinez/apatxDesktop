

fetch(apiUrl+'clase')
    .then(response => response.json())
    .then(data => {
        // use the retrieved data here
        console.log(data);
        $('#myTable').DataTable({
            data: data,
            "columns": [
                { "data": "nombre" },
                { "data": "precio" },
                { "data": "activo" },
                { "data": "createdAt" },
                { "data": "updatedAt" },
                ],
            paging: false, 
            responsive: true,
            info: false,
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
