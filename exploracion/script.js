d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chart = Plot.plot({
	  marks: [
		Plot.axisY({label: "Genero", lineWidth: 8, marginBottom: 50}),
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
