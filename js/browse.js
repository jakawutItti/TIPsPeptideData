const url = "https://script.google.com/macros/s/AKfycbyfLC87UjRbL4N_8MFU21Yjl9hH4E_fZGSyd84_LrNOjDVzx8isQowTcZF5OiXdq9O0/exec";

async function xlsxreader(url) {
    $("#mytablesearch_wrapper").hide();
    $("#mytablesearch").hide();
    const file = await (await fetch(url)).json();
    $("#mytablesearch").dataTable({
        fixedHeader: {
            header: true,
        },
        "autoWidth": false,
        data: file,
        order: [[0, "asc"]],
        columns: [
            { data: 'Number', },
            { data: 'Sequence', },
            { data: 'Length' , },
            { data: 'IC50' , },
            { data: 'Name' },
            { data: 'Source' },
            { data: 'Substratre / enz' },
            { data: 'Reported Year' },
            { data: 'Author (Year)' },
            { data: 'DOI' },
            { data: 'SMILES' },
            { data: 'Note' },
            { data: '3D Structure' 
            , render: function(data,type) {
                if (data != "") {
                    return "<img src='img/3DStructure/"+data+"' style='width:100px;heigth:100px'></img>";
                    }
                }
            },
        ],
        columnDefs: [
            {
               targets: '_all',
               defaultContent: ''
            }
        ],
        className : 'compact',
        "bAutoWidth": false,
        "responsive": true
    });
    $("#mytablesearch_wrapper").show();
    $("#mytablesearch").show();
    $("#loading").hide();
}


$(document).ready(function(){
    xlsxreader(url);
});

