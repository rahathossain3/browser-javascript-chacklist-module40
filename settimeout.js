/* 
    setTimeout () ----ekbar e cole
    setInterval () ----- loop akare bar bar cole....
    formula: setInterval(function,time_in_mil_sec);
    setInterval ke off korte hole  clearInterval use kore te hobe..
    setInterval ekta time id return kore .. 
    javascript non Blocking & asycinconus hisabe kaj kore..    
 */




// setInterval(function () {
//     console.log('ist ok');
// }, 3500);

let second = 0
const timeId = setInterval(function () {
    console.log(++second);
    if (second > 3) {
        // setInterval ke off korer jaonno
        clearInterval(timeId);
    }


}, 3500);










setTimeout(() => {
    console.log('exploring MDN articales');
}, 4000);

// setTimeout(doSomting, 5000);

//setTimeout use korle  sob kas ses korar por eitar excute kore.,,, r jodi time set kore dioya hoy taile oi time ses hobar por code running hobe
// formula : setTimeout(function/varibale, time_in_mily_second);    1 sec =1000 mily sec
// je timeout er time kom thakbe sei code ayge runninig hobe..

// doSomting()