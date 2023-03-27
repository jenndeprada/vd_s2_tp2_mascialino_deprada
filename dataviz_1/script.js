
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let dataviz_1 = Plot.plot({
		y: { grid: true, domain: d3.sort(data, (a, b) => d3.descending(a.nacionalidad, b.nacionalidad)).map(d => d.nacionalidad), },
		color: {
            legend: true,
          },
          
		marks: [
		Plot.axisX({label: "Horas de mision", lineWidth: 9, marginBottom: 50}),
		Plot.axisY({label: "Nacionalidad", lineWidth: 9, marginBottom: 80}),
		Plot.barX(data, {
			x: 'mision_hs',
			y: 'nacionalidad',
			fill: "genero",  //Agregue mas informacion mostrando los generos
			title: "genero" // Y para que se entienda esta info deje esto. 
			// Estaria bueno agregarle el sorting por genero y por paises
		}),
		],
        marginLeft: 70,
		width: 1000,
		height: 700,

	})
	d3.select('#dataviz_1').append(() => dataviz_1)
})