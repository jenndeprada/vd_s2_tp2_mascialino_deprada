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
		Plot.axisY({label: "Genero", lineWidth: 6, marginLeft: 80}),
		Plot.axisX({label: "Horas de Mision", lineWidth: 6, marginBottom: 35}),
		Plot.barX(data, {
			y: "genero",
			x: "mision_hs",
		})
	  ],

	  width: 700,
	  height: 100,

	});

	d3.select("#chartD").append(() => chartD);
});

//******************************************************************************* */

d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chartD1 = Plot.plot({
	  marks: [
		Plot.axisY({label: "Genero", lineWidth: 6, marginLeft: 80}),
		Plot.axisX({label: "Horas de Mision", lineWidth: 6, marginBottom: 35}),
		Plot.barX(data, {
			y: "genero",
			x: "mision_hs",
			fill: "nacionalidad",
			title: "nacionalidad",
		})
	  ],

	  width: 700,
	  height: 100,

	});

	d3.select("#chartD1").append(() => chartD1);
});

//******************************************************************************* */

d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chartD2 = Plot.plot({
		marks: [Plot.dot(data, { x: "genero", y: "mision_hs", opacity: 0.5})],
		nice: true,
		line: true,
		grid: true,
		zero: true,
	  }) 

	d3.select("#chartD2").append(() => chartD2);
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
			// fill: 'genero', Informacion redundante.
		}),
		],
		marginLeft: 70,
		width: 1000,
		height: 800,
	})
	d3.select('#chart4').append(() => chart4)
})






d3.csv('astronautas.csv', d3.autoType).then(data => {
	let prueba = Plot.plot({
		marks: [
			Plot.axisX({label: "Ocupacion", lineWidth: 8, marginBottom: 50}),
			Plot.axisY({label: "Horas de mision eva",}),
			Plot.barY(data, {
				x: 'ocupacion',
				y: 'eva_mision_hs',
				fill: 'genero',
				title: "genero",
			}),
		],	
	})


	d3.select('#prueba').append(() => prueba)
})



d3.csv('astronautas.csv', d3.autoType).then(data => {
	console.log(data);

	let prueba2 = Plot.plot({
		marks: [
			Plot.axisX({label: "Nacionalidad", lineWidth: 3, marginBottom: 60}),
			Plot.axisY({label: "Horas de mision eva",}),
			Plot.barY(data, {
				x: "nacionalidad",
				y: "eva_mision_hs",
				
			}),
		],	
	})


	d3.select('#prueba2').append(() => prueba2)
})





d3.csv('astronautas.csv', d3.autoType).then(data => {
	/*let dataABC = data.filter(
	  d => d.status == 'civil' || d.status == 'militar',
	) //unnecesary? */
	var mision_hs = data.map(function(d) {return d.mision_hs});
	var anio_mision = data.map(function(d) {return d.anio_mision});
	var status = data.map(function(d) {return d.status});

	let mision_hs_anio_c = Array(10);
	mision_hs_anio_c.fill(0);
	let mision_hs_anio_m = Array(10);
	mision_hs_anio_m.fill(0);

	for(let anio=2010;anio<=2023;anio++){
		for(let i=0;i<mision_hs.length;i++){
			if(anio_mision[i] == anio){
				
				if(mision_hs[i] > 8760){
					if(status[i] === 'civil'){
						mision_hs_anio_c[anio-2009] += (mision_hs[i] - 8760);
						mision_hs_anio_c[anio-2010] +=8760;
					}else if(status[i] === 'militar'){
						mision_hs_anio_m[anio-2009] += (mision_hs[i] - 8760);
						mision_hs_anio_m[anio-2010] +=8760;
					}
					
				}else{
					if(status[i] === 'civil'){
						mision_hs_anio_c[anio-2010] +=mision_hs[i];
					}else if(status[i] === 'militar'){
						mision_hs_anio_m[anio-2010] +=mision_hs[i];
					}
				}
			}
		}
	}

/* TO DO: AÑADIR LEGEND */

	let chart6 = Plot.plot({
	  marks: [
		Plot.areaY(data, {
			x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
			y: mision_hs_anio_m,
			opacity: 0.6,
			curve: 'natural',
			fill: 'red'
			// https://observablehq.com/@ee2dev/sorting-with-plot-a-collection-of-plot-examples
			
		}),
		Plot.areaY(data, {
		  x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
		  y: mision_hs_anio_c,
		  opacity: 0.6,
		  curve: 'natural',
		  fill: 'slateblue'
		  // https://observablehq.com/@ee2dev/sorting-with-plot-a-collection-of-plot-examples
		}),
	  ],
	  x: {
		tickFormat: 'd',
	  },
	  y: {
		tickFormat: d3.format(',.0f'),
		grid: true,
	  },
	  marginLeft: 70,
	  line: true,
	})
	d3.select('#chart6').append(() => chart6)
  })
  //*/