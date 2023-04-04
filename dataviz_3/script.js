
   d3.csv('astronautas.csv', d3.autoType).then(data => {
	let dataviz_3 = Plot.plot({
		color: {
			legend: true,
			marginLeft: 20,
		},
		x: {
			domain: d3.sort(data, d => -d.eva_mision_hs).map(d => d.ocupacion)
		  },
		marks: [
			Plot.axisX({label: "Ocupacion", lineWidth: 8, marginBottom: 50, marginLeft: 30, marginTop: 30}),
			Plot.axisY({label: "Horas de mision eva",}),
			Plot.barY(data, 
				Plot.groupX({ y: "sum" }, { x: "ocupacion", y: "eva_mision_hs", fill: "genero"})),
		],	
	})


	d3.select('#dataviz_3').append(() => dataviz_3);
})