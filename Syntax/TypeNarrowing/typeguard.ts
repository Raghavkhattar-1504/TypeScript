const vehicleHandler = (vehicle: Vehicle) => {
    switch (vehicle.type) {
      case 'car':
        console.log(`The car has ${vehicle.doors} doors`);  
        break;
      case 'motorbike':
        console.log(`The only fuel my motorbike can take is ${vehicle.fuel}`);
        break;
    }
  }