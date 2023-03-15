d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chart = Plot.plot({
	  marks: [
		Plot.dot(data, {
		  x: "edad_mision",
		  y: "nacionalidad",
		  //r: 'cant',
		  //fill: 'cluster',
		  opacity: 0.5,
		}),
	  ],
	  color: {
		legend: true,
	  },
	});
	d3.select("#chart").append(() => chart);
});
  
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart2 = Plot.plot({
	  marks: [
		  Plot.tickX(data, {
				x: 'edad_mision',
				y: 'genero' , 
				fill: 'genero',
			}),
	  ],
	  x: {
		label: 'Min of age, Max of age',
	  },
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
		marks: [
		Plot.barY(data, {
			x: 'nacionalidad',
			y: 'mision_hs',
			title: d => d.country + '\n' + d.pop,
			fill: 'nacionalidad',
			
		}),
		],
		x: {
			domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
		  },
		marginLeft: 70,
		width: 600,
	})
	d3.select('#chart3').append(() => chart3)
})
  
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart4 = Plot.plot({
		marks: [
		Plot.barY(data, {
			x: 'genero',
			y: 'mision_hs',
			title: d => d.country + '\n' + d.pop,
			fill: 'genero',
		}),
		],
		marginLeft: 70,
		width: 600,
	})
	d3.select('#chart4').append(() => chart4)
})

