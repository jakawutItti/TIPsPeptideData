const url = "https://script.google.com/macros/s/AKfycbyfLC87UjRbL4N_8MFU21Yjl9hH4E_fZGSyd84_LrNOjDVzx8isQowTcZF5OiXdq9O0/exec";
var numberTable = 0;
var tableArr = [];
var conarr = ["And","Or","Not"];
var calarr = ["Number","Sequence","Length","IC50","Name","Source","Substratre/enz","Reported Year","Author(Year)","DOI","SMILES","Note"];
var opaarr;
/*var opaarr = ["=","<>"];*/
var table = $("#mytablesearch").DataTable
var filter = [];
var arrData = [];
var boo = true;
var urlfile;

function createDropDownCon(num) {
    $("#rowCon"+num+" div:eq(1)").append("<div/>");
        $("#rowCon"+num+" div:eq(1) div").attr({"class":"dropdown","style":"width:100%;margin:auto"});
        $("#rowCon"+num+" .dropdown").append("<button/>");
        $("#rowCon"+num+" .dropdown").append("<ul/>");
            $("#rowCon"+num+" .dropdown button").attr({"id":"dropcon"+num,"class":"p-0 dropdown-toggle rounded-0 border-1","type":"button","data-bs-toggle":"dropdown","style":"width:100%"}).text("And");
            $("#rowCon"+num+" .dropdown ul").attr({"id":"dropconlist"+num,"class":"p-0 dropdown-menu rounded-0","style":"overflow:auto;width:100%"})
            for (let con of conarr){
                $("#rowCon"+num+" .dropdown ul").append("<li><p class='center p-1'>"+con+"</p></li>");
            };
            $("#rowCon"+num+" li").click(function (){
                $("#rowCon"+num+" .dropdown button").text($(this).text());
            });
};

function createDropDownCal(num) {
    $("#rowCal"+num+" div:eq(1)").append("<div/>");
        $("#rowCal"+num+" div:eq(1) div").attr({"class":"dropdown","style":"width:100%;margin:auto"});
        $("#rowCal"+num+" .dropdown").append("<button/>");
        $("#rowCal"+num+" .dropdown").append("<ul/>");
            $("#rowCal"+num+" .dropdown button").attr({"id":"dropcon"+num,"class":"p-0 dropdown-toggle rounded-0 border-1","type":"button","data-bs-toggle":"dropdown","style":"width:100%"}).text("Sequence");
            $("#rowCal"+num+" .dropdown ul").attr({"id":"dropconlist"+num,"class":"p-0 dropdown-menu rounded-0","style":"overflow:auto;height:300px;width:100%"})
            for (let cal of calarr){
                $("#rowCal"+num+" .dropdown ul").append("<li><p class='center p-1'>"+cal+"</p></li>");
            };
            $("#rowCal"+num+" li").click(function (){
                $("#rowCal"+num+" .dropdown button").text($(this).text());
            });
};

function createDropDownOpa(num) {
    $("#rowOpa"+num+" div:eq(1)").append("<div/>");
        $("#rowOpa"+num+" div:eq(1) div").attr({"class":"dropdown","style":"width:100%;margin:auto"});
        $("#rowOpa"+num+" .dropdown").append("<button/>");
        $("#rowOpa"+num+" .dropdown").append("<ul/>");
            $("#rowOpa"+num+" .dropdown button").attr({"id":"dropcon"+num,"class":"p-0 dropdown-toggle rounded-0 border-1","type":"button","data-bs-toggle":"dropdown","style":"width:100%"}).text(searchVarLike);
            $("#rowOpa"+num+" .dropdown ul").attr({"id":"dropconlist"+num,"class":"p-0 dropdown-menu rounded-0","style":"overflow:auto;height:300px;width:100%"})
            for (let opa of opaarr){
                $("#rowOpa"+num+" .dropdown ul").append("<li><p class='center p-1'>"+opa+"</p></li>");
            };
            $("#rowOpa"+num+" li").click(function (){
                $("#rowOpa"+num+" .dropdown button").text($(this).text());
            });
};

function createTableSearch() {
    const num = numberTable;
    $("#divsearch").append("<div id='tablesearch"+num+"' class='row m-1 border border-2 border-dark center '></div>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
        $("#tablesearch"+num).append("<div/>");
            $("#tablesearch"+num+" div:eq(0)").attr({"id":"rowCon"+num,"class":"d-flex col-lg row"});
            $("#tablesearch"+num+" div:eq(1)").attr({"id":"rowCal"+num,"class":"col-lg row"});
            $("#tablesearch"+num+" div:eq(2)").attr({"id":"rowOpa"+num,"class":"col-lg row"});
            $("#tablesearch"+num+" div:eq(3)").attr({"id":"rowData"+num,"class":"col-lg row"});
            $("#tablesearch"+num+" div:eq(4)").attr({"id":"rowDel"+num,"class":"d-flex col-lg row"});
            if (num != 0) {
            $("#rowCon"+num).append("<div/>");
            $("#rowCon"+num).append("<div/>");
                $("#rowCon"+num+" div:eq(0)").attr({"class":"p-1 center container-fluid text-end","style":"width:50%"}).text(searchStrCon);
                $("#rowCon"+num+" div:eq(1)").attr({"class":"p-1 center container-fluid","style":"width:50%"});
                 createDropDownCon(num);
            }
            $("#rowCal"+num).append("<div/>");
            $("#rowCal"+num).append("<div/>");
                $("#rowCal"+num+" div:eq(0)").attr({"class":"p-1 center container-fluid text-end","style":"width:50%"}).text(searchStrCal);
                $("#rowCal"+num+" div:eq(1)").attr({"class":"p-1 center container-fluid","style":"width:50%"});
                createDropDownCal(num);
            $("#rowOpa"+num).append("<div/>");
            $("#rowOpa"+num).append("<div/>");
                $("#rowOpa"+num+" div:eq(0)").attr({"class":"p-1 center container-fluid text-end","style":"width:50%"}).text(searchStrOpa);
                $("#rowOpa"+num+" div:eq(1)").attr({"class":"p-1 center container-fluid","style":"width:50%"});
                createDropDownOpa(num);
            $("#rowData"+num).append("<div/>");
            $("#rowData"+num).append("<div/>");
                $("#rowData"+num+" div:eq(0)").attr({"class":"p-1 center container-fluid text-end","style":"width:50%"}).text(searchStrData);
                $("#rowData"+num+" div:eq(1)").attr({"class":"p-1 center container-fluid","style":"width:50%"});
                $("#rowData"+num+" div:eq(1)").append("<input/>")
                    $("#rowData"+num+" input").attr({"type":"text","style":"width:100%;margin:auto"})
            if (num != 0) {
            $("#rowDel"+num).append("<div/>");
                $("#rowDel"+num+" div:eq(0)").attr({"class":"center container-fluid d-flex justify-content-center align-items-start","style":"width:100%"});
                $("#rowDel"+num+" div:eq(0)").append("<button/>");
                $("#rowDel"+num+" button").attr({"class":"center d-flex align-items-center justify-content-center border-1"});
                $("#rowDel"+num+" button").text(searchStrDel);
                $("#rowDel"+num+" button").append("<i class='bi bi-trash'></i>");
                $("#rowDel"+num+" button").click(function () {  
                    tableArr.slice(tableArr.findIndex(function (x) {
                        return x == num;
                    }),1);
                    $("#tablesearch"+num).remove();
                })
            }
    updateTable();
    tableArr.push(num);
    numberTable++;
};

async function urlreader(url) {
    $("#mytablesearch_wrapper").hide();
    $("#mytablesearch").hide();
    $("#loading").show();
    urlfile = await (await fetch(url)).json();
    createTable(urlfile);
}

function createFilter(){
    filter = [];
    let cal;
    function findCal(x){
        return cal == x;
    }
    for (num in tableArr) {
        var smallfilter = [];
        if (num != 0) {
            smallfilter.push($("#rowCon"+num+" .dropdown button").text());
        } else {
            smallfilter.push("And");
        }
        cal = ($("#rowCal"+num+" .dropdown button").text());
        smallfilter.push(calarr.findIndex(findCal));
        smallfilter.push($("#rowOpa"+num+" .dropdown button").text());
        smallfilter.push($("#rowData"+num+" input").val());
        
        filter.push(smallfilter);
    }
}

function createTable(urlfile) {
    table = $("#mytablesearch").DataTable({
        fixedHeader: {
            header: true,
        },
        "autoWidth": false,
        data: urlfile,
        order: [[0, "asc"]],
        columns: [
            { data: 'Number', },
            { data: 'Sequence', },
            { data: 'Length' , },
            { data: 'IC50' , },
            { data: 'Name' },
            { data: 'Source' },
            { data: 'Substratre/enz' },
            { data: 'Reported Year' },
            { data: 'Author(Year)' },
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
    });
    $("#mytablesearch_filter").hide();
    $("#loading").hide();
    $("#mytablesearch").show();
    $("#mytablesearch_wrapper").show();
    if ($("#mytablesearch_paginate span a").length == 0) {
        $("#mytablesearch_paginate").hide();
    }
}

function isNumberColumn(x) {
    return (filter[x][1] == 2) || (filter[x][1] == 7);
}

function popAndFilter() {
    $.fn.DataTable.ext.search.pop();
    $.fn.DataTable.ext.search.push(function( settings, searchData, index, rowData, counter ) {
        function filterCon(searchData,x) {
            if (x == 0) {
                    boo = filterOpa(searchData,x);
                    return boo;
                } else {
                switch (filter[x][0]) {
                    case "And" :
                        boo = boo && filterOpa(searchData,x);
                        break;
                    case "Or" :
                        boo = boo || filterOpa(searchData,x);
                        break;
                    case "Not" :
                        boo = boo  && (!filterOpa(searchData,x));
                        break;
                }
            }
        }
        function filterOpa(searchData,x) {
            var data = searchData[parseInt(filter[x][1])];
            var fil = filter[x][3];
            if (filter[x][3] == "") {
                return true;
            }
            function dataToInt(x) {
                return isNumberColumn(x) ? parseInt(data) : data.toString();
            }
            function filterToInt(x) {
                return isNumberColumn(x) ? parseInt(fil) : fil.toString();
            }

            switch (filter[x][2]) {
                case searchVarLike :
                    return data.toString().includes(fil.toString());
                case "= ("+searchVarEqu+")" :
                    return dataToInt(x) == filterToInt(x);
                case "> ("+searchVarMore+")" :
                    return dataToInt(x) > filterToInt(x);
                case "< ("+searchVarLess+")" :
                    return dataToInt(x) < filterToInt(x);
                case ">= ("+searchVarMoreEqu+")" :
                    return dataToInt(x) >= filterToInt(x);
                case "<= ("+searchVarLessEqu+")" :
                    return dataToInt(x) <= filterToInt(x);
                case "<> ("+searchVarNot+")" :
                    return dataToInt(x) != filterToInt(x);
                
            };
        };
        
        for (var x = 0;x < filter.length;x++) {
            filterCon(searchData,x);
        }
        return boo;

    });
    table.draw();
    }

function updateTable(){
    if ($("[id^=tablesearch]").length <= 1) {
        $("[id^=rowCon]").hide();
        $("[id^=rowDel]").hide();
    } else {
        $("[id^=rowCon]").show();
        $("[id^=rowDel]").show();
    }
};

$(document).ready(function(){
    opaarr = [searchVarLike,"= ("+searchVarEqu+")","<> ("+searchVarNot+")","< ("+searchVarLess+")","> ("+searchVarMore+")","<= ("+searchVarLessEqu+")",">= ("+searchVarMoreEqu+")"];
    createTableSearch();
    urlreader(url);
    $("#buttonadd").click(function (){
        createTableSearch();
    });
    $("#buttonsearch").click(function (){
        table.destroy();
        urlreader(url);
        createFilter();
        popAndFilter();
    });
});

