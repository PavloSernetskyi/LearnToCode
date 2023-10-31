"use strict";
window.onload = function () {
    //grab button estimate total cost from html using id.
    const btn = document.getElementById("estimate");
    //run specific functions when i click button.
    btn.onclick = calculatePrice;
};


function getRoomRate(date, roomType){
    let nightlyRoomRate = 0;
    
    //if customer checken in Date Jun - Aug make it 250 per nigth.
    if(date > 5 && date < 8)
    {
//        nightlyRoomRate = 250;
        if(roomType === 'queen' || roomType === 'king')
        {
            nightlyRoomRate = 250;
        }
        
        // 350.
        else if(roomType === 'two-bedroom')
        {
            nightlyRoomRate = 350;
        }
    }
    //210
    else if (roomType === 'two-bedroom' && date < 5 || date > 8 || date < 12){
        nightlyRoomRate = 210;
    }
    //else make it 150/night. // something wrong it does not work here.
    else if (roomType === 'queen' || roomType === 'king' && date < 5 || date > 8 || date < 12)
    {
        nightlyRoomRate = 150;
    }
    //return nightly rate for that room.
    return nightlyRoomRate;
}

function calculatePrice(){
    //grab input from user.
    let name = document.getElementById('customer-name').value;
    let email = document.getElementById('customer-email').value;
    let date = new Date(document.getElementById('check-in-date').value);
    let numberOfNigths = document.getElementById('number-of-nights').value;

    let month = date.getMonth();
    // grabbing checked radio button by name. out of 3.
    let selectedRadioButton = document.querySelector('input[name="room-type"]:checked');
    //storing checked radio button.
    let selectedRoomType = selectedRadioButton.value;
    
    // call getRoom
    let roomRate = getRoomRate(month, selectedRoomType);
    // do some calculations.
    let basePricing = 150;
    //based on the room type, occupancy and date of stay, price may go up. write logic for that here.
    let box1 = document.getElementById('queen').checked;

    //dicounts if any.
    let discount = 0;
    let selectedRadioButton2 = document.querySelector('input[name="discounts"]:checked');
    //storing checked radio button.
    let selectedDicount = selectedRadioButton2.value;
    if(selectedDicount === 'aaa')
    {
        discount = roomRate * 0.10;
    }
    else if(selectedDicount === 'military')
    {
        discount = roomRate * 0.20;
    }

    else if(selectedDicount === 'none')
    {
        discount = 0;
    } 
    

    //discounted room cost.
    let discountedRoomCost = roomRate - discount;
    //the tax.
    let tax = discountedRoomCost * 0.12;
    //total cost of the stay.
    let totalCostOfStay = discountedRoomCost + tax;


    //dipslay output.

//Desired output:
// - the original room cost
// - the discount, if any
// - the discounted room cost
// - the tax
// - the total cost of the stay

//    let message = (`The original room cost $${basePricing}`); 
    let message2 = (`The month number is ${(month + 1)}`); 
    let message3 = (`The room cost based on 2 parameters: date and bed type and costs: $${(roomRate.toFixed(2))}`); 
    let message4 = (`The discount is ${(discount.toFixed2)}`); 
    let message5 = (`The discounted room cost is ${(discountedRoomCost)}`); 
    let message6 = (`The tax is ${(tax.toFixed(2))}`); 
    let message7 = (`The total cost of the stay is ${(totalCostOfStay.toFixed(2))}`); 

 //   document.getElementById('output').innerText = message;
    document.getElementById('output2').innerText = message2;
    document.getElementById('output3').innerText = message3;
    document.getElementById('output4').innerText = message4;
    document.getElementById('output5').innerText = message5;
    document.getElementById('output6').innerText = message6;
    document.getElementById('output7').innerText = message7;

}

