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


		let newarr = Array();
		for (let i=0; i<10; i++){
			mision_hs_anio_tot[i] = mision_hs_anio_tot[i]/100; //cuánto es un 1% de los viajes
			newarr.push({status: 'militar', anio: (i+2010), porcentaje: (mision_hs_anio_m[i]/mision_hs_anio_tot[i])})
			newarr.push({status: 'civil', anio: (i+2010), porcentaje: (mision_hs_anio_c[i]/mision_hs_anio_tot[i])})
		}


		let dataviz_2 = Plot.plot({
			marks: [
				Plot.axisX({tickFormat: "", labelAnchor: "center", anchor: "bottom", label: "Año" }),
				Plot.axisY({anchor: "left", label: "Porcentaje"}),
				Plot.areaY(newarr, {
					x: 'anio',
					y: 'porcentaje',
					fill: 'status',
					curve: 'natural',
					//opacity: 0.5,
				}),
				Plot.lineY(newarr, {
					x: 'anio',
					y: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
					curve: 'natural',
					opacity: 0.3,
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
				range: ["grey", "#EE6D2F"], 
				type: "categorical",
				legend: true,
				//marginLeft: 50,
			},
			line: true,
		})
		d3.select('#dataviz_2').append(() => dataviz_2)
	}
)
//#endregion