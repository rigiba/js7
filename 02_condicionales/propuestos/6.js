const dorsal = prompt("Introduce dorsal");

if (dorsal >= 0 && dorsal <= 99) {
      switch (parseInt(dorsal)) {
            case 1:
                  console.log("Portero");
                  break;
            case 3:
            case 4:
            case 5:
                  console.log("Defensa");
                  break;
            case 6:
            case 8:
            case 11:
              console.log("Centrocampista");
                  break;
            case 9:
                  console.log("Delantero");
                  break;
            default:
                  console.log("Cualquiera");
                  break;
          }
} else {
      console.log("Error, el dorsal no está entre 0 y 99");
}
