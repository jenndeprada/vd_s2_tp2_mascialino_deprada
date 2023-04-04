
d3.csv('astronautas.csv', d3.autoType).then(data => {

	function existe(obj, prop, elem){
		for(let i=0;i<obj.length; i++){
			if(obj[i][prop] == elem){
				return true;
			}
		}
		return false;
	}

	
	let hs_pais_ocup = new Object();

	/*arr.push(
		{pais: 'us', hs: Array()},
		{pais: 'russia', hs: Array()},
		{pais: 'canada', hs: Array()},
		{pais: 'japon', hs: Array()},
		{pais: 'italia', hs: Array()},
		{pais: 'pbajos', hs: Array()},
		{pais: 'runido', hs: Array()},
		{pais: 'china', hs: Array()},
		{pais: 'alemania', hs: Array()},
		{pais: 'francia', hs: Array()},
		{pais: 'emir', hs: Array()},
		{pais: 'kaj', hs: Array()},
		{pais: 'dinamarca', hs: Array()}
	)*/

	for(i = 0; i < data.length; i++){
		/*switch(data[i].nacionalidad){
			case 'EE.UU.':
				arr[0].find()
				//si el trabajo esta en la lista
				//sumar las hs al trabajo
				//sino
				//agregarlo a la lista
				//sumar las hs
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
		}*/
		
		console.log(data[i].nacionalidad, ': ', existe(hs_pais_ocup, 'nacionalidad', data[i].nacionalidad) );

		if(existe(hs_pais_ocup, 'nacionalidad', data[i].nacionalidad)){
			if(existe(hs_pais_ocup[data[i].nacionalidad], 'ocupacion', data[i].ocupacion)){
				hs_pais_ocup[data[i].nacionalidad][data[i].ocupacion].hs += data[i].mision_hs;
			}else{
				hs_pais_ocup[data[i].nacionalidad].push({ocupacion: data[i].ocupacion, hs: data[i].mision_hs})
			}
		}else{
			hs_pais_ocup[data[i].nacionalidad] = {[data[i].ocupacion]: [data[i].mision_hs]};
			console.log(hs_pais_ocup)
		}
	}


	/*arr.push({pais: 'EE.UU.', hs_mision_por_pais: Math.round(us_hs)}, 
			{pais: 'U.S.S.R/Rusia', hs_mision_por_pais: Math.round(russia_hs)},
			{pais: 'Canada', hs_mision_por_pais: Math.round(canada_hs)},
			{pais: 'Japon', hs_mision_por_pais: Math.round(japon_hs)},
			{pais: 'Paises Bajos', hs_mision_por_pais: Math.round(pbajos_hs)},
			{pais: 'Italia', hs_mision_por_pais: Math.round(italia_hs)},
			{pais: 'Reino Unido', hs_mision_por_pais: Math.round(runido_hs)},
			{pais: 'China', hs_mision_por_pais: Math.round(china_hs)},
			{pais: 'Alemania', hs_mision_por_pais: Math.round(alemania_hs)},
			{pais: 'Francia', hs_mision_por_pais: Math.round(francia_hs)},
			{pais: 'Emiratos Arabes Unidos', hs_mision_por_pais: Math.round(emir_hs)},
			{pais: 'Dinamarca', hs_mision_por_pais: Math.round(dinamarca_hs)},
			{pais: 'Kazajistan', hs_mision_por_pais: Math.round(kaj_hs)});*/

	console.log(hs_pais_ocup)

	let dataviz_1 = Plot.plot({
		
		y: { grid: true,label: null, domain: d3.sort(arr, (a, b) => d3.descending(a.hs_mision_por_pais, b.hs_mision_por_pais)).map(d => d.pais), },

		x: { grid: true, axis: "bottom", label: "Horas de mision", labelAnchor: "center",},

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
			fill: data.map(d => d.ocupacion), 
			title: data.map(d => d.ocupacion),	
		}),
		],
        marginLeft: 150,
		marginBottom: 70,
		width: 1300,
		height: 1000,

	})
	d3.select('#dataviz_1').append(() => dataviz_1)
})