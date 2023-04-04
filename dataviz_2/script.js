const locale = {
	decimal: ',',
	thousands: '.',
	grouping: [3],
}

d3.formatDefaultLocale(locale)

d3.csv('astronautas.csv', d3.autoType).then(data => {
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

		for (let i=0; i<10; i++){
			mision_hs_anio_tot[i] = mision_hs_anio_tot[i]/1000;
			mision_hs_anio_c[i] = mision_hs_anio_c[i]/1000;
			mision_hs_anio_m[i] = mision_hs_anio_m[i]/1000;
		}

		let dataviz_2 = Plot.plot({
			marks: [
				//#region ejes
				Plot.axisX({tickFormat: "", anchor: "bottom", label: "Año →" }),
				Plot.axisY({anchor: "left", label: "Hs misión (miles) ↑"}),
				//#endregion
				//#region etiquetas izquierda
				Plot.text(mision_hs_anio_tot.slice(9), {
					x: [2019],
					y: mision_hs_anio_tot[9],
					text: ["Total"],
					fill: "#bcbebf",
					fontWeight: "bold",
					dx: 18,
					fontSize: "15px",
				}),
				Plot.text(mision_hs_anio_m.slice(9), {
					x: [2019],
					y: mision_hs_anio_m[9],
					text: ["Militar"],
					fill: "#7ab97a",
					fontWeight: "bold",
					fontSize: "15px",
					dx: 25
				}),
				Plot.text(mision_hs_anio_c.slice(9), {
					x: [2019],
					y: mision_hs_anio_c[9],
					text: ["Civil"],
					fill: "#bd6296",
					fontWeight: "bold",
					fontSize: "15px",
					dx: 18
				}),
				//#endregion
				//#region curvas
					//#region total
					Plot.line(data, {
						x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
						y: (mision_hs_anio_tot),
						opacity: 0.3,
						curve: 'natural',
					}),
					//#endregion
					//#region militar
					Plot.areaY(data, {
						x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
						y: (mision_hs_anio_m),
						opacity: 0.6,
						curve: 'natural',
						fill: 'forestgreen',
					}),
					//#endregion
					//#region civil
				Plot.areaY(data, {
					x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
					y: mision_hs_anio_c,
					opacity: 0.4,
					curve: 'natural',
					fill: 'white',
				}),
				Plot.areaY(data, {
					x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
					y: (mision_hs_anio_c),
					opacity: 0.6,
					curve: 'natural',
					fill: 'mediumvioletred',
				}),
				//#endregion
				//#endregion
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
			marginRight: 50,
			line: true,
		})
		d3.select('#dataviz_2').append(() => dataviz_2)
	}
)
//#endregion