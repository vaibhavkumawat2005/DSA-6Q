function bubbleSorting(array){
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);   
    
    for(let i =0 ; i<array.length;i++){
        console.log(array[i])
    }
};

bubbleSorting([10,52,41,85,13])