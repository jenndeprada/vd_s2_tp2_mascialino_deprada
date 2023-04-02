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
		
		let dataviz_2 = Plot.plot({
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
		d3.select('#dataviz_2').append(() => dataviz_2)
	}
)
//#endregion