const compareDates = () => {

    var today = new Date();
  
    var year = today.getFullYear().toString();
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
  
    let textBug = '';
    var formatDate = year + '-' + month + '-' + day;
    const departing = document.getElementById('departing-date').value;
    const returning = document.getElementById('returning-date').value;
  
    if (departing < formatDate) {
      textBug += "La fecha de salida es menor a la fecha actual \n";
    } if (returning < formatDate) {
      textBug += "La fecha de retorno es menor a la fecha actual \n";
    } if (departing > returning) {
      textBug += "La fecha de salida es mayor a la fecha de retorno \n";
    } if (departing == returning)
    {
      textBug += "Ambas fechas son iguales";
    }
    
    console.log(departing)
    console.log(returning)
    console.log(formatDate)
    document.getElementById('text').innerText = textBug

  }
  
  document.querySelector('#flights-btn')
  .addEventListener('click', () => compareDates());
  


