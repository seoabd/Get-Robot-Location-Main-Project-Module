function getLocation(coordinates, commands)  {
    let x = coordinates[0];
    let y = coordinates[1];
    
      for(let command of commands){
        if(command === 'forward'){
          y++;
        }
        if(command === 'back'){
          y--;
        }
        if(command === 'right'){
          x++;
        }
        if(command === 'left'){
          x--;
        }
      }
      return [x, y];
    }
