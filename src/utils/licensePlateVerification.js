export default function licensePlateVerification ( plate ){
    //License plate number verification in structure and type of data
    if ( plate.includes( "-" )){

        const plateArray = plate.split( "-" );
        return (plateArray[1].length === 4 || plateArray[1].length === 3) && !isNaN(plateArray[1]) && plateArray[0].length === 3;

    } else {

        return false;

    }
}