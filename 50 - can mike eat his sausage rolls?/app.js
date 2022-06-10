//! Mike went to buy some Sausage Rolls from the local supermarket, he did not realise that these Sausages Rolls all go out the next day!
//! Mike must eat as many Sausage Roles as he can before midnight (00:00). Your task is to work out how many Sausage Rolls he is not able to eat.

//! You will be given 3 inputs:
//! Bought: The number of Sausage Rolls Mike bought origionally
//! Time: The current time (Hours : Minutes) as a String
//! Rate: How many Sausage Rolls per Minute can Mike eat (He's a very good eater)

//! Example: Bought = 2000, Time = "18:20", Rate: 0.5

//! There are 5 Hours and 40 Minutes left until 00:00 - This is 340 Minutes
//! Eating 0.5 Rolls per minute will mean he eats 170 rolls

//! After this disappointing effort, there are 1830 rolls wasted.

//! samples:
//! eatThoseRolls(20, "23:55", 0.75) => 17
//! eatThoseRolls(126, "12:43", 4) => 0
//! eatThoseRolls(1026, "00:12", 0.2) => 741
//! eatThoseRolls(0, "10:17", 5) => 0
//! eatThoseRolls(0, "10:17", 5) => 0



function eatThoseRolls(bought, time, rate) {
    let x = Math.ceil(bought - rate*(60*(23 - +time.split(':')[0]) + (60 - +time.split(':')[1])))
    return x >= 0 ?  x : 0
}