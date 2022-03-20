const state = {
  labels: ['', '', '', '', ''],
  datasets: [
    {
      label: 'Puntos',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 0, 0, 0, 0],
    },
  ],
};

// function getData(){
//   let nombres = [];
//   let puntos = [];
//   data.Oscars.forEach(element => {
//       if (element.Puntos >= 0){
//           nombres.push(element['Ahora vamos a registrarte.\r\nPor favor, ingresa tu nombre y apellido'])
//           puntos.push(element.Puntos)
//       }
//   });

//   return {nombres, puntos};
// }

export default state;
