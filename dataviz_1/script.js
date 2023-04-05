
d3.csv('astronautas.csv', d3.autoType).then(data => {

	//<!--TO DO-->
	//<!-- Implementar sum solo si sobra tiempo -->
	let arr = Array();
	
	let us_hs = 0;
	let russia_hs = 0;
	let canada_hs = 0;
	let japon_hs = 0;
	let italia_hs = 0;
	let pbajos_hs = 0;
	let runido_hs = 0;
	let china_hs = 0;
	let alemania_hs = 0;
	let francia_hs = 0;
	let emir_hs = 0;
	let kaj_hs = 0;
	let dinamarca_hs = 0;

	for(i = 0; i < data.length; i++){
		switch(data[i].nacionalidad){
			case 'EE.UU.':
				us_hs += data[i].mision_hs;
				break;
			case 'U.S.S.R/Rusia':
				russia_hs += data[i].mision_hs;
				break
			case 'Canada':
				canada_hs += data[i].mision_hs;
				break
			case 'Japon':
				japon_hs+= data[i].mision_hs;
				break
			case 'Paises Bajos':
				pbajos_hs += data[i].mision_hs;
				break
			case 'Italia':
				italia_hs	+= data[i].mision_hs;
				break
			case 'Reino Unido':
				runido_hs += data[i].mision_hs;
				break
			case 'China':
				china_hs += data[i].mision_hs;
				break
			case 'Alemania':
				alemania_hs += data[i].mision_hs;	
				break		
			case 'Francia':
				francia_hs += data[i].mision_hs;
				break
			case 'Emiratos Arabes Unidos':
				emir_hs += data[i].mision_hs;	
				break
			case 'Dinamarca':
				dinamarca_hs += data[i].mision_hs;
				break
			default:
				kaj_hs += data[i].mision_hs;
				break
		}
	}


	arr.push({pais: 'EE.UU.', hs_mision_por_pais: (Math.round(us_hs)/1000)}, 
			{pais: 'U.S.S.R/Rusia', hs_mision_por_pais: (Math.round(russia_hs)/1000)},
			{pais: 'Canada', hs_mision_por_pais: (Math.round(canada_hs)/1000)},
			{pais: 'Japon', hs_mision_por_pais: (Math.round(japon_hs)/1000)},
			{pais: 'Paises Bajos', hs_mision_por_pais: (Math.round(pbajos_hs)/1000)},
			{pais: 'Italia', hs_mision_por_pais: (Math.round(italia_hs)/1000)},
			{pais: 'Reino Unido', hs_mision_por_pais: (Math.round(runido_hs)/1000)},
			{pais: 'China', hs_mision_por_pais: (Math.round(china_hs)/1000)},
			{pais: 'Alemania', hs_mision_por_pais: (Math.round(alemania_hs)/1000)},
			{pais: 'Francia', hs_mision_por_pais: (Math.round(francia_hs)/1000)},
			{pais: 'Otros', hs_mision_por_pais: (Math.round(emir_hs+dinamarca_hs+kaj_hs)/1000)},
			/* {pais: 'Emiratos Arabes Unidos', hs_mision_por_pais: (Math.round(emir_hs)/1000)},
			{pais: 'Dinamarca', hs_mision_por_pais: (Math.round(dinamarca_hs)/1000)},
			{pais: 'Kazajistan', hs_mision_por_pais: (Math.round(kaj_hs)/1000)} */);


	let dataviz_1 = Plot.plot({
		
		y: { grid: true, label: null, domain: d3.sort(arr, (a, b) => d3.descending(a.hs_mision_por_pais, b.hs_mision_por_pais)).map(d => d.pais), },

		x: { grid: true, axis: "bottom", label: "Miles de horas de mision", labelAnchor: "center",},

		style: {
			fontSize: 17,
		}, 

        color: {
			legend: true,
			marginLeft: 85,
		},

		marks: [
		Plot.axisY({lineWidth: 7,}),
		
		Plot.barX(arr, {
			x: "hs_mision_por_pais",
			y: "pais",
			fill: "#EE6C2F"	
		}),
		],
        marginLeft: 150,
		marginBottom: 70,
		width: 1300,
		height: 1000,

	})
	d3.select('#dataviz_1').append(() => dataviz_1)
})