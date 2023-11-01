"use strict";
window.onload = function () {

    //! onsubmit event used within HTML form.
    const form = document.getElementById("form");

    //using onsubmit event with form through form id.
    form.onsubmit = function (event) {
        event.preventDefault();

        calculatePrice();

    };

    //using onclick event with button,
    //grab button estimate total cost from html using id.
    //run specific functions when i click button.
    //grab button by id with on click event.
    // //grab button estimate total cost from html using id.
    // const btn = document.getElementById("estimate");
    // //run specific functions when i click button.
    // btn.onclick = calculatePrice;
};


function hideDiscountIfNone() {
    // target area that I want to hide in output.
    let hide = document.getElementById('message4');
    //when user choose none radio button then thwre is no discounts should be on the screen.
    let radioNone = document.getElementById('none');

    if (radioNone.checked) {
        // hides if button checked.
        hide.style.display = "none";
    }
    else {
        //shows text or do no thing if button is NOT checked.
        hide.style.display = "block";
    }
}

function getRoomRate(date, roomType) {
    let nightlyRoomRate = 0;
    //if: in season. then calculate appropriately depending on what checkbox was checked. queen/king or two-bedroom.
    if (date > 5 && date < 8) {
        // queen/king $250.
        if (roomType === 'queen' || roomType === 'king') {
            nightlyRoomRate = 250;
        }

        // two-bedroom $350.
        else if (roomType === 'two-bedroom') {
            nightlyRoomRate = 350;
        }
    }

    //out of season.
    else {
        // queen/king $150.
        if (roomType === 'queen' || roomType === 'king') {
            nightlyRoomRate = 150;
        }
        // two-bedroom $210.
        else if (roomType === 'two-bedroom') {
            nightlyRoomRate = 210;
        }
    }
    //return nightly rate for that room.
    return nightlyRoomRate;
}

function calculatePrice() {
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

    //calculate room price for x amount of days.
    let roomPricePerStay = roomRate * numberOfNigths;

    //dicounts if any.
    let discount = 0;
    let selectedRadioButton2 = document.querySelector('input[name="discounts"]:checked');
    //storing checked radio button.
    let selectedDiscount = selectedRadioButton2.value;
    //accesing butons by value.
    if (selectedDiscount === 'aaa') {
        discount = roomPricePerStay * 0.10;
    }

    //! 'military' is att value in radio button in html.
    else if (selectedDiscount === 'military') {
        discount = roomPricePerStay * 0.20;
    }
    //value none.
    else if (selectedDiscount === 'none') {
        discount = 0;
    }


    //discounted room cost.
    let discountedRoomCost = roomPricePerStay - discount;
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
    //let message2 = (`The month number is ${(month + 1)}`);
    let message3 = ''
    if (discount != 0) {
        message3 =
            `The orginal room cost based on the season, bed type, and costs: $${(roomRate.toFixed(2))} per day <br>
    The discount is ${(discount.toFixed(2))} <br>
    The discounted room price per stay cost is $${(discountedRoomCost)}; <br>
    The tax is ${tax.toFixed(2)} <br>
    The total cost of the stay is $${totalCostOfStay.toFixed(2)}`;
    }
    else {
        message3 =
            `The orginal room cost based on the season, bed type, and costs: $${(roomRate.toFixed(2))} per day <br>
    The tax is ${tax.toFixed(2)} <br>
    The total cost of the stay is $${totalCostOfStay.toFixed(2)}`;
    }


    document.getElementById('output3').innerHTML = message3;
}




//for debuging.
//   let message8 = (`Room price per ${numberOfNigths} days is $${(roomPricePerStay.toFixed(2))}`);

//   document.getElementById('output').innerText = message;
//    document.getElementById('output2').innerText = message2;




