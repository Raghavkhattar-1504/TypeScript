type Vehicle = {
    type: 'motorbike' | 'car';
    make: string;
    model: string;
    fuel: 'petrol' | 'diesel',
    doors?: number;
    bootSize?: number;
  }
  

  //here we dont have boot and doors in a motorcycle , so we use discriminated union which creates the difference in the type or funcions

  const myCar: Vehicle = {
    make: 'vw',
    model: 'golf',
    fuel: 'diesel',
    type: 'car',
    bootSize: 400,
    doors: 5,
  };

  