function checkForLeap(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))  {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}

checkForLeap(1999);
checkForLeap(2000);
checkForLeap(1900);