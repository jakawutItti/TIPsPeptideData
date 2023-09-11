const url = "https://script.google.com/macros/s/AKfycbyfLC87UjRbL4N_8MFU21Yjl9hH4E_fZGSyd84_LrNOjDVzx8isQowTcZF5OiXdq9O0/exec";

async function findDataForChart() {
    const urlfile = await (await fetch(url)).json();
    var arrYear = [];
    var arrLength = [0,0,0,0];
    var varCyclic = 0;
    var varLinear = 0;
    var arrSou = [];
    var arrSub = [];
    var arrAut = [];

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
        /* find Substratre/enz */
        var findSub = false;
        for (var y = 0; y < arrSub.length ; y++) {
          if (arrSub[y][0].includes(urlfile[x].Substratreenz)) {
            arrSub[y][1]++;
            findSub = true;
            break;
          }
        } 
        if (!findSub) {
            arrSub.push([urlfile[x].Substratreenz,1]);
        }
        /* find Author */
        var findAut = false;
        for (var y = 0; y < arrAut.length ; y++) {
          if (arrAut[y][0].includes(urlfile[x].Author.split("(")[0])) {
            arrAut[y][1]++;
            findAut = true;
            break;
          }
        } 
        if (!findAut) {
            arrAut.push([urlfile[x].Author.split("(")[0],1]);
        }
    }
    createChartConformation([varCyclic,varLinear]);
    createChartYear(arrYear);
    createChartLen(arrLength);
    createChartSou(arrSou);
    createChartSub(arrSub);
    createChartAut(arrAut)
}

function createChartConformation(arr) {
	var chartPlaceCon = $("#chartPlaceCon")[0].getContext('2d');
	const dataCon = {
		labels: ['Cyclic','Linear'],
		datasets: [{
			label: "peptide",
			data: arr,
			backgroundColor: ['red'],
			hoverOffset: 4,
		}]
    };
	
    const chartCon = new Chart(chartPlaceCon,{
		type: 'bar',
		data: dataCon,
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Conformation'
				}
			}
		}
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
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#00685F'],
			hoverOffset: 4
		}]
	};
	
	const chartYear = new Chart(chartPlaceYear,{
		type: 'bar',
		data: dataYear,
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Reported Year'
				}
			}
		}
	})
}

function createChartLen(arr) {
	var createChartLen = $("#createChartLen")[0].getContext('2d');
	const dataLen = {
		labels: ["<= 5","6 - 10","11 - 15","16 - 20"],
		datasets: [{
			label: "peptide",
			data: arr,
			backgroundColor: ['orange'],
			hoverOffset: 4
		}],
	};
	
	const chartLen = new Chart(createChartLen,{
		type: 'bar',
		data: dataLen,
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Sequence length'
				}
			}
		}
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
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#33FF95'],
			hoverOffset: 4
		}]
	};
	const chartSou = new Chart(chartPlaceSou,{
		type: 'bar',
		data: dataSou,
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Source'
				}
			}
		}
	})
}

function createChartSub(arr) {
	let arrSub = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrSub.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceSub = $("#chartPlaceSub")[0].getContext('2d');
	const dataSub = {
		labels: arrSub,
		datasets: [{
			label: "peptide",
		data: arrCount,
		backgroundColor: ['#33A0FF'],
		hoverOffset: 4
		}]
	};
	const chartSub = new Chart(chartPlaceSub,{
		type: 'bar',
		data: dataSub,
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Substratre enzyme'
				}
			}
		}
	})
}

function createChartAut(arr) {
	let arrAut = [];
	let arrCount = [];
	for (var x = 0; x < arr.length ; x++) {
		arrAut.push(arr[x][0]);
		arrCount.push(arr[x][1]);
	}
	var chartPlaceAut = $("#chartPlaceAut")[0].getContext('2d');
	const dataAut = {
		labels: arrAut,
		datasets: [{
			label: "peptide",
			data: arrCount,
			backgroundColor: ['#FF33B9'],
			hoverOffset: 4
		}]
	};
	const chartAut = new Chart(chartPlaceAut,{
		type: 'bar',
		data: dataAut,
		options: {
			plugins: {
				title: {
					display: true,
					text: 'Author'
				}
			}
		}
	})
}

findDataForChart();