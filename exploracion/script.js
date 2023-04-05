const locale = {
	decimal: ',',
	thousands: '.',
	grouping: [3],
}

//#region edad nacionalidad
d3.csv("astronautas.csv", d3.autoType).then((data) => {
	let chart1MICA = Plot.plot({
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
	d3.select("#chart1MICA").append(() => chart1MICA);
});
//#endregion

//#region edad genero - eliminado
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart2MICA = Plot.plot({
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
	d3.select('#chart2MICA').append(() => chart2MICA)
})
//#endregion

//#ver - chart 3

d3.formatDefaultLocale(locale)

d3.csv('astronautas.csv', d3.autoType).then(data => {

	var edad_mision = data.map(function(d) {return d.edad_mision});
	var anio_mision = data.map(function(d) {return d.anio_mision});
	
	let max_edad_mision = Array(10);
	max_edad_mision.fill(0);
	let min_edad_mision = Array(10);
	min_edad_mision.fill(100);
	let avg_edad_mision = Array(10);
	avg_edad_mision.fill(0);
		
	for(let anio=2010;anio<=2023;anio++){
		for(let i=0;i<edad_mision.length;i++){
			if(anio_mision[i] == anio){
				
				if(edad_mision[i] > max_edad_mision[anio-2010]){
					max_edad_mision[anio-2010] = edad_mision[i];
				}else if (edad_mision[i] < min_edad_mision[anio-2010]){
					min_edad_mision[anio-2010] = edad_mision[i];
				}
				avg_edad_mision[anio-2010] = (avg_edad_mision[anio-2010] + edad_mision[i])/2;
			}
		}
	}


	let chart3MICA = Plot.plot({
		marks: [
			Plot.areaY(data, {
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
				y1: max_edad_mision,
				y2: min_edad_mision,
				dy: -16,
				opacity: 0.5,
				curve: 'natural',
				fill: 'gray',
				// https://observablehq.com/@ee2dev/sorting-with-plot-a-collection-of-plot-examples
			}),
			Plot.line(data, {
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
				y: avg_edad_mision,
				stroke: 'red',
				curve: 'natural',
				dy: -16,
			}),
			Plot.dot(data, {
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
				y: avg_edad_mision,
				stroke: 'red',
				dy: -16,
			}),
		],
		x: {
			tickFormat: 'd',
			grid: true,
		},
		y: {
			tickFormat: d3.format(',.0f'),
			grid: true,
		},
		color:{
			legend: true,
		},
		marginLeft: 70,
		line: true,
	})
	d3.select('#chart3MICA').append(() => chart3MICA)
})
//#endregion

//#region genero horas
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart4MICA = Plot.plot({
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
	d3.select('#chart4MICA').append(() => chart4MICA)
})
//#endregion

//#region ststus hs nacionalidad - me gusta más el otro - chart 5
d3.csv('astronautas.csv', d3.autoType).then(data => {
	let chart5MICA = Plot.plot({
		marks: [
			Plot.barY(data, {
				x: 'status',
				y: 'mision_hs',
				title: d => d.country + '\n' + d.pop,
				fill: 'nacionalidad',
				sort: 'nacionalidad' ,
			}),
		],
		marginLeft: 70,
		width: 600,
		color: {
			legend: true,
		},
	})
	d3.select('#chart5MICA').append(() => chart5MICA)
})
//#endregion

//#region hs mision anio nacionalidad - chart 6
// config. números español
d3.formatDefaultLocale(locale)

/* PENDIENTE:
	- cambiar la escala de horas: dividir por miles
	- Leyenda de eje Y: "Miles de horas"
	- Ver: usar función sum en vez del quilombo este feo de código
*/

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
		let mision_hs_anio_tot = Array(10);
		mision_hs_anio_tot.fill(0);
		
		for(let anio=2010;anio<=2023;anio++){
			for(let i=0;i<mision_hs.length;i++){
				if(anio_mision[i] == anio){
					
					if(mision_hs[i] > 8760){
						if(status[i] === 'civil'){
							mision_hs_anio_c[anio-2009] += (mision_hs[i] - 8760);
							mision_hs_anio_tpt[anio-2009] += (mision_hs[i] - 8760);
							mision_hs_anio_c[anio-2010] +=8760;
							mision_hs_anio_tot[anio-2010] +=8760;
						}else if(status[i] === 'militar'){
							mision_hs_anio_m[anio-2009] += (mision_hs[i] - 8760);
							mision_hs_anio_tot[anio-2009] += (mision_hs[i] - 8760);
							mision_hs_anio_m[anio-2010] +=8760;
							mision_hs_anio_tot[anio-2010] +=8760;
						}
						
					}else{
						if(status[i] === 'civil'){
							mision_hs_anio_c[anio-2010] +=mision_hs[i];
							mision_hs_anio_tot[anio-2010] +=mision_hs[i];
						}else if(status[i] === 'militar'){
							mision_hs_anio_m[anio-2010] +=mision_hs[i];
							mision_hs_anio_tot[anio-2010] +=mision_hs[i];
						}
					}
				}
			}
		}
		
		/* TO DO: AÑADIR LEGEND */
		
		let chart6MICA = Plot.plot({
			marks: [
				Plot.line(data, {
					x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
					y: (mision_hs_anio_tot),
					opacity: 0.3,
					curve: 'natural',
					label: 'astronautas militares'
				}),
				Plot.areaY(data, {
					x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
					y: (mision_hs_anio_m),
					opacity: 0.6,
					curve: 'natural',
					fill: 'forestgreen',
					label: 'astronautas militares'
				}),
				Plot.areaY(data, {
					x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
					y: mision_hs_anio_c,
					opacity: 0.4,
					curve: 'natural',
					fill: 'white',
					label: 'astronautas civiles'
					// https://observablehq.com/@ee2dev/sorting-with-plot-a-collection-of-plot-examples
				}),
				Plot.areaY(data, {
					x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
					y: mision_hs_anio_c,
					opacity: 0.6,
					curve: 'natural',
					fill: 'mediumvioletred',
					label: 'astronautas civiles'
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
			color:{
				legend: true,
			},
			marginLeft: 70,
			line: true,
		})
		d3.select('#chart6MICA').append(() => chart6MICA)
	}
)
//#endregion




























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
		//tickFormat: d3.format('0f'),
		grid: true,
	  },
	  marginLeft: 70,
	  line: true,
	})
	d3.select('#chart6').append(() => chart6)
  })
  //*/