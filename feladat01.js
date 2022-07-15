export function feladat01(szinek) {
    let number = szinek.length;
    let sum = 0;
    let top;
    let bottom;
    let fraction;
  
    for (let i = 2; i < number; i++) {
  
      number = szinek.length;
      top = 1;
      bottom = 1;
  
      for (let j = 0; j < i; j++) {
        if (number > j){
          top *= (number - j);
        }
        if (j != 0)
          bottom *= (j+1);
  
      }
  
      fraction = top / bottom;
      sum += fraction;
  
    }
  
    sum++;
  
    if (szinek.length < 2 || sum === undefined) {
      sum = 0;
    }
  
  }
  
