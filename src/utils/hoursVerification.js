export default function hoursVerification ( currentTime ){
    //Current time verification in time intervals
    return (( parseInt(currentTime) >= 700 && parseInt(currentTime) <= 930) ||
        ( parseInt(currentTime) >= 1600 && parseInt(currentTime) <= 1930))
}