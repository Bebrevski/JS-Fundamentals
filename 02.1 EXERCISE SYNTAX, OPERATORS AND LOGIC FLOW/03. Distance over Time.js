function solve(arr) {
    let obj1Speed = arr[0] * 1000 / 3600;
    let obj2Speed = arr[1] * 1000 / 3600;

    let distanceFirstObj = obj1Speed * arr[2];
    let distanceSecondObj = obj2Speed * arr[2];

    console.log(Math.abs(distanceFirstObj - distanceSecondObj));
}