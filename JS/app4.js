// Object property
let prop = 'color';
let camera = {
  brand: 'Canon',
  price: 35000,
  color: 'black',
  mfg: 2021
};


console.log(camera[prop]); 
console.log (camera.brand);
console.log (camera.megaPixel);
console.log (camera.price);

// nested object

let employee ={
	name : 'Aishu',
	Eid : 12345,
    position : 'HR',
	address : {
		street : 'Hulimavu',
		city : 'Bangalore',
		state : 'Karnataka',
	}
	
}
console.log(employee);

console.log (employee.address);
console.log (employee.address.street);

// CURD operation
// CREATE
let laptop = {
  brand: 'Dell',
  model: 'Inspiron 15',
  price: 50000,
  isWarrantyActive: true
};

// Read
console.log(laptop.Brand.model);
console.log(laptop.model);

// Update 
laptop.price = 50000;
console.log(laptop.price);

// Delete operation
delete laptop.isWarrantyActive; 
console.log(laptop);
