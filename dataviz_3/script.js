
   d3.csv('astronautas.csv', d3.autoType).then(data => {
	let dataviz_3 = Plot.plot({
		color: {
			legend: true,
		},
		x: {
			domain: d3.sort(data, d => -d.eva_mision_hs).map(d => d.ocupacion)
		  },
		marks: [
			Plot.axisX({label: "Ocupacion", lineWidth: 8, marginBottom: 50}),
			Plot.axisY({label: "Horas de mision eva",}),
			Plot.barY(data, 
				Plot.groupX({ y: "sum" }, { x: "ocupacion", y: "eva_mision_hs", fill: "genero"})),
		],	
	})


	d3.select('#dataviz_3').append(() => dataviz_3);
})


/* Plot.plot({
	marks: [
	  Plot.barY(
		data,
		Plot.groupX({ y: "sum" }, { x: "brand", y: "price_in_usd" })
	  )
	],
	height: 200,
	marginLeft: 50,
	width: 485
  }) */