// Code your solution in this file!
function distanceFromHqInBlocks (distance){

if (distance < 42){
    return (42-distance);
}else {
    return (distance-42);
}

   
}
function  distanceFromHqInFeet(distance){
    if (distance < 42){
        return ((42-distance)*264);
    }else {
        return ((distance-42)*264);
    }
}
function distanceTravelledInFeet(start, destination){
    if (destination < start){
        return ((start-destination)*264);
    } else{
        return ((destination-start)*264);
    }
}

function calculatesFarePrice(start, destination){

    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return   ((distance - 400)* 0.02);
    }else if(distance > 2000 && distance <= 2500) {
        return 25;

    } else if (distance > 2500) {
        return "cannot travel that far";
    }
}