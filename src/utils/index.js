export const formatNumber = (number) => {
    if(number > 999 && number < 1000000){
      return (number/1000).toFixed(1) + 'K';
    }else if(number > 1000000){
      return (number/1000000).toFixed(1) + 'M';
    }
      return number;
    
  }

