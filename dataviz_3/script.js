
d3.csv('astronautas.csv', d3.autoType).then(data => {

    let total_hs_mision = 0;
    let total_hs_mision_eva = 0;
    let sub_data = Array(157);

    for(let i = 0; i < 157; i++){
        total_hs_mision += data[i].mision_hs;
        total_hs_mision_eva += data[i].eva_mision_hs;    
    }

    console.log(sub_data)

    let horas_totales_dias = (total_hs_mision + total_hs_mision_eva) / 24;

   //console.log(horas_totales_dias.toFixed())




	let dataviz_3 = Plot.plot({
    
		marks: [
			Plot.axisX({label: "Ocupcion", lineWidth: 8, marginBottom: 50}),
			Plot.axisY({label: "Dias de mision", marginLeft: 100}),
            Plot.areaY(data, {
                x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                y: mision_hs_anio_c,
                opacity: 0.6,
                curve: 'natural',
                fill: 'slateblue'
                // https://observablehq.com/@ee2dev/sorting-with-plot-a-collection-of-plot-examples
              }),
            
		],	
	})


	d3.select('#dataviz_3').append(() => dataviz_3)
})