d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chartA = Plot.plot({
	  marks: [
		Plot.axisX({label: "Nacionalidad", lineWidth: 6, marginBottom: 50}),
		Plot.dot(data, {
			x: "nacionalidad",
			fillOpacity: 0.4,
		})
	  ],
	  
	  width: 1000,
	  height: 80,

	});

	d3.select("#chartA").append(() => chartA);
});
//******************************************************************************* */
d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chartB = Plot.plot({
	
	  marks: [
		Plot.axisY({label: "Fecha Nacimiento",}),
		Plot.axisX({label: "Nacionalidad", lineWidth: 6, marginBottom: 50}),
		Plot.dot(data, {
			x: "nacionalidad",
			y: "anio_nacimiento",
			fill: "nacionalidad",
			fillOpacity: 0.4,
		})
	  ],
	  	width: 1000,
	  	height: 800,
	  	x: { grid: true, nice: true, },
    	y: { grid: true, nice: true, }
	  

	});

	d3.select("#chartB").append(() => chartB);
});

//******************************************************************************* */

d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chartC = Plot.plot({
	
	  marks: [
		Plot.axisY({label: "Fecha Nacimiento",}),
		Plot.axisX({label: "Nacionalidad", lineWidth: 6, marginBottom: 50}),
		Plot.tickY(data, {
			x: "nacionalidad",
			y: "anio_nacimiento",
		})
	  ],
	  	width: 1000,
	  	height: 800,
		x: { grid: true, nice: true, },
		y: { grid: true, nice: true, }
	});

	d3.select("#chartC").append(() => chartC);
});

//******************************************************************************* */

d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chartD = Plot.plot({
	  marks: [
		Plot.axisY({label: "Genero",}),
		Plot.barX(data, {
			y: "genero",
			x: "mision_hs",
		})
	  ],
	  
	  width: 800,
	  height: 80,

	});

	d3.select("#chartD").append(() => chartD);
});

//******************************************************************************* */
















d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chart = Plot.plot({
	  marks: [
		Plot.axisY({label: "Genero", lineWidth: 8, marginBottom: 100}),
		Plot.dot(data, {
		  x: "edad_mision",
		  y: "nacionalidad",
		  //r: 'cant',
		  //fill: 'cluster',
		  opacity: 0.5,
		}),
	  ],
	  marginLeft: 70,
	  width: 1000,
	  height: 800,
	});
	d3.select("#chart").append(() => chart);
});
  


d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart2 = Plot.plot({
	  marks: [
		Plot.axisX({label: "Edad de mision", lineWidth: 8, marginBottom: 50}),
		Plot.axisY({label: "Genero", lineWidth: 8, marginBottom: 50}),

		  Plot.tickX(data, {
				x: 'edad_mision',
				y: 'genero' , 
				fill: 'genero',
			}),
	  ],

	  height: 150,
	  width: 600,
	  grid: true,
	  nice: true,
	  line: true,
	})
	d3.select('#chart2').append(() => chart2)
})
  
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart3 = Plot.plot({
		y: { grid: true, },
		x: { domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad)},
		  
		marks: [
		Plot.axisX({label: "Nacionalidad", lineWidth: 8, marginBottom: 50}),
		Plot.axisY({label: "Horas de mision"}),
		Plot.barY(data, {
			x: 'nacionalidad',
			y: 'mision_hs',
			fill: "nacionalidad",
			
		}),
		],
		marginLeft: 70,
		width: 1000,
		height: 800,
	})
	d3.select('#chart3').append(() => chart3)
})
  
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart4 = Plot.plot({
		y: { grid: true, },
		marks: [
		Plot.axisX({label: "Genero", lineWidth: 8, marginBottom: 50}),
		Plot.axisY({label: "Horas de mision",}),
		Plot.barY(data, {
			x: 'genero',
			y: 'mision_hs',
			fill: 'genero',
		}),
		],
		marginLeft: 70,
		width: 1000,
		height: 800,
	})
	d3.select('#chart4').append(() => chart4)
})


d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart5 = Plot.plot({
		marks: [
		Plot.areaY(data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia'), {
			x: 'anio_mision',
			y: 'mision_hs',
			opacity: 0.3,
			curve: 'natural'
			
		}),
		],
		line: true,
		x: {
		  tickFormat: 'd',
		  ticks: 11,
		},
		y: {
		  ticks: 7,
		  grid: true,
		},
	})
	d3.select('#chart5').append(() => chart5)
})
