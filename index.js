// Code your solution in this file!
const hqLocation = 42;

function distanceFromHqInBlocks(pickupLocation) {
    if (hqLocation >= pickupLocation ) {
        return hqLocation - pickupLocation ;
    }
    else{
        return pickupLocation - hqLocation ;
    }
}

const block = 264;

function distanceFromHqInFeet(destination) {
    if (hqLocation >= destination) {
        return (hqLocation - destination) * block ;
    }
    else{
        return (destination -hqLocation) * block ;
    } 
}



function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * block;
    }
    else{
        return (destination - start) * block;
    }    
}

function calculatesFarePrice(start, destination) {
    const block = 264; // Define the length of a block in feet
  
    // Calculate the total distance in feet
    let distance = Math.abs(destination - start) * block;
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      // Assuming $0.02 per foot after the first 400 feet
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // Distance greater than 2500 feet
    }
  }
  