const url = "https://script.google.com/macros/s/AKfycbyfLC87UjRbL4N_8MFU21Yjl9hH4E_fZGSyd84_LrNOjDVzx8isQowTcZF5OiXdq9O0/exec";

async function findDataForChart() {
    var arrYear = [];
    var arrLength = [0,0,0,0];
    const urlfile = await (await fetch(url)).json();
    var varCyclic = 0;
    var varLinear = 0;
    var arrSou = [];
    

    for (var x = 0; x < urlfile.length ; x++) {
        var findYear = false;
        /* find year */
        for (var y = 0; y < arrYear.length ; y++) {
            if (arrYear[y][0].includes(urlfile[x].Reported_Year)) {
              arrYear[y][1]++;
              findYear = true;
              break;
            }
        } 
        if (!findYear) {
            arrYear.push([urlfile[x].Reported_Year,1]);
        }
        /* find smlie type */
        if (urlfile[x].SMILES == "NA") {
          varCyclic++
        } else {
          varLinear++
        }
        /* find len */
        if (urlfile[x].Length >= 16) {
            arrLength[3]++;
        } else if (urlfile[x].Length >= 11) {
            arrLength[2]++;
        } else if (urlfile[x].Length >= 6) {
            arrLength[1]++;
        } else {
            arrLength[0]++;
        }
        /* find Source*/
        var findSou = false;
        for (var y = 0; y < arrSou.length ; y++) {
          if (arrSou[y][0].includes(urlfile[x].Source)) {
            arrSou[y][1]++;
            findSou = true;
            break;
          }
      } 
      if (!findSou) {
          arrSou.push([urlfile[x].Source,1]);
      }
    }
    createChartConformation([varCyclic,varLinear]);
    createChartYear(arrYear);
    createChartLen(arrLength);
    createChartSou(arrSou);
}

function createChartConformation(arr) {
  var chartPlaceCon = $("#chartPlaceCon")[0].getContext('2d');
  const dataCon = {
    labels: [
        'Cyclic',
        'Linear',
    ],
    datasets: [{
        label: 'Peptide',
        data: arr,
        backgroundColor: [
            'blue',
            'blue'
        ],
        hoverOffset: 4
    }]
    };
    const chartCon = new Chart(chartPlaceCon,{
    type: 'bar',
    data: dataCon
    })
}

function createChartYear(arr) {
  arr.sort();
  let arrYear = [];
  let arrCount = [];
  for (var x = 0; x < arr.length ; x++) {
    arrYear.push(arr[x][0]);
    arrCount.push(arr[x][1]);
  }
  var chartPlaceYear = $("#chartPlaceYear")[0].getContext('2d');
  const dataYear = {
  labels: arrYear,
  datasets: [{
      label: 'Peptide',
      data: arrCount,
      backgroundColor: [
          'blue',
          'blue'
      ],
      hoverOffset: 4
  }]
};
const chartYear = new Chart(chartPlaceYear,{
  type: 'bar',
  data: dataYear
})
}

function createChartLen(arr) {
  var createChartLen = $("#createChartLen")[0].getContext('2d');
  const dataLen = {
  labels: ["<= 5","6 - 10","11 - 15","16 - 20"],
  datasets: [{
      label: 'Peptide',
      data: arr,
      backgroundColor: ['blue'],
      hoverOffset: 4
  }]
};
const chartLen = new Chart(createChartLen,{
  type: 'bar',
  data: dataLen
})
}

function createChartSou(arr) {
  let arrSou = [];
  let arrCount = [];
  for (var x = 0; x < arr.length ; x++) {
    arrSou.push(arr[x][0]);
    arrCount.push(arr[x][1]);
  }
  var chartPlaceSou = $("#chartPlaceSou")[0].getContext('2d');
  const dataSou = {
  labels: arrSou,
  datasets: [{
      label: 'Peptide',
      data: arrCount,
      backgroundColor: ['blue'],
      hoverOffset: 4
  }]
};
const chartSou = new Chart(chartPlaceSou,{
  type: 'bar',
  data: dataSou
})
}

findDataForChart();

$(document).ready(function(){

});