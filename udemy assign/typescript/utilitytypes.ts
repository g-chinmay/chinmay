interface word {
    x: number;
    y: any;
  }
              
  let pointPart: Partial<word> = {};
  pointPart.x = 10;
   
  console.log ("partial example");
  let me:Partial<word> = {
  };
  
  me.y="demo example";
  console.log(pointPart);
  console.log (me);
  
  //Requires example
  //changes properties of an object that are required 
  
  
  
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000
  };
  console.log(myCar);
  
  //Record example
  //defines an object with specific key type or value type
  
  
  
  const ne: Record<string, number> = {
    'gita': 21,
    'chandini': 25
  };
  
  console.log(ne);
  
  //this demonstrates usage of Partial, Requires,Record
  //------------------------
  //pick
  //removes all except th specified  from an obj type 
  
  
  
  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob1: Pick<Person, 'name'> = {
    name: 'lakshmi'
  };
  console.log ('lakshmi');
  
  //omit example
  //removes keys from object type
  
  
  
  
  interface Person {
    name: string;
    age: number;
  Gender:string;
    location?: string;
  }
  const bob: Omit<Person, 'age' | 'Gender' | 'location'> = {
    name: 'saisri'
  };
  console.log (bob.name);
  
  //Exclude
  //removes types from the union
  
  type Primitive = string | number | boolean
  const value1: Exclude<Primitive, string> = true; 
  console.log (typeof value1);
  // working of Exclude type