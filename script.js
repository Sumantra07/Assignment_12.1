/*
 *
 * Implementing a pure function
 * takes two params
 * param 1 is actionType
 * param 2 is counter value
 * 
 * 
 */
function counterReducer(actionType, counter) {

    var counter_value = 0;
    if (actionType === 'INC') {
        counter_value = counter + 1;
    }
    else if (actionType === 'DEC') {
        counter_value = counter - 1;
    }
    return counter_value;
}
// invoking counterReducer
var me = counterReducer('INC', 5);
// printing on console
console.log("INC " + me);
// invoking counterReducer
var me = counterReducer('DEC', 5);
// printing on console
console.log("DEC " + me);



