    //let total_hs_mision = 0;
    //let total_hs_mision_eva = 0;
    //let sub_data = Array(157);

    //for(let i = 0; i < 157; i++){
    //    total_hs_mision += data[i].mision_hs;
    //    total_hs_mision_eva += data[i].eva_mision_hs;    
    //}

    //console.log(sub_data)

    //let horas_totales_dias = (total_hs_mision + total_hs_mision_eva) / 24;

   //console.log(horas_totales_dias.toFixed())


   d3.csv('astronautas.csv', d3.autoType).then(data => {
	let dataviz_3 = Plot.plot({

		marks: [
			Plot.axisX({label: "Ocupacion", lineWidth: 8, marginBottom: 50}),
			Plot.axisY({label: "Horas de mision eva",}),
			Plot.barY(data, {
				x: data.map(d => d.ocupacion),
				y:  "eva_mision_hs",
				fill: data.map(d => d.genero),
				title: "genero",
			}),
		],	
	})


	d3.select('#dataviz_3').append(() => dataviz_3);
})




    //let total_hs_mision = 0;
    //let total_hs_mision_eva = 0;
    //let sub_data = Array(157);

    //for(let i = 0; i < 157; i++){
    //    total_hs_mision += data[i].mision_hs;
    //    total_hs_mision_eva += data[i].eva_mision_hs;    
    //}

    //console.log(sub_data)

    //let horas_totales_dias = (total_hs_mision + total_hs_mision_eva) / 24;

   //console.log(horas_totales_dias.toFixed())


   d3.csv('astronautas.csv', d3.autoType).then(data => {
	let dataviz_3B = Plot.plot({

		marks: [
			Plot.barY(data, Plot.groupX({y: "sum"}, {x: "ocupacion", fill: "genero"})),
		],	
	})


	d3.select('#dataviz_3B').append(() => dataviz_3B);
})






/* 	let dataviz_3 = Plot.plot({
    
		marks: [
			Plot.axisX({label: "Ocupcion", lineWidth: 8, marginBottom: 50}),
			Plot.axisY({label: "Dias de mision", marginLeft: 100}),
            Plot.rectY(data, ).plot()
		],
	})


	d3.select('#dataviz_3').append(() => dataviz_3)
}) */




//d3.flatGroup(penguins, d => d.species, d => d.island, d => d.sex)