contract Car {
    mapping (uint => string) public carNames;
    mapping (uint => string) public carTypes;
    mapping (uint => string) public carManufacturers;
    mapping (uint => uint) public manufacturationDates;
    uint public amountOfCars = 0;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	function Car() {
        addCar('Alto', 'G5', 'Suzuki', 2004);
        addCar('Alto2', 'G52', 'Suzuki2', 20042);
	}

	function addCar(string carName, string carType, string carManufacturer, uint manufacturationDate){
	    carNames[amountOfCars] = carName;
	    carTypes[amountOfCars] = carType;
	    carManufacturers[amountOfCars] = carManufacturer;
	    manufacturationDates[amountOfCars] = manufacturationDate;
	    amountOfCars++;
	}

	function getCarName(uint carid) returns(string) {
		return carNames[carid];
	}

	function getCarType(uint carid) returns(string) {
    		return carTypes[carid];
    	}

    	function getCarManufacturer(uint carid) returns(string) {
        		return carManufacturers[carid];
        	}


        	function getManufacturationDate(uint carid) returns(uint) {
            		return manufacturationDates[carid];
            	}

            	function getAmountOfCars() returns (uint) {
            	    return amountOfCars;
            	}
}
