const elegirPlato = function (menu){
    let seleccionado = 0;
    let platoSelecionado = "";
    for (let index=0;index<menu.length;index++){
        let eleccion = 0;
        switch(menu[index]){
            case 'Ceviche':
              if(seleccionado < 4){
                platoSelecionado = "Ceviche";
                seleccionado = 4; 
              }
              break;
            case 'Tacos al Pastor':
              if(seleccionado < 3){
                platoSelecionado = "Tacos al Pastor";
                seleccionado = 3; 
              }  
              break;
            case 'Empanada Chilena':
              if(seleccionado < 2){
                platoSelecionado = "Empanada Chilena";
                seleccionado = 2; 
              } 
              break;
            case 'Hamburguesa':
              if(seleccionado < 1){
                platoSelecionado = "Hamburguesa";
                seleccionado = 1; 
              } 
              break;
        } 
        if(platoSelecionado == ""){
            platoSelecionado = "Hamburguesa";
        }
    }
    return platoSelecionado;

}
let menu = ['Empanada Chilena','Hamburguesa','Tacos al Pastor','Ceviche'];
console.log("Plato seleccionado es " + elegirPlato(menu));

