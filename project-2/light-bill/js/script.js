

document.getElementById('electricity-bill').innerHTML = "Electricity Bill: ";
function elactricityBill() {
    var totalAmount = 0;

    if (units <= 50) {
        totalAmount = units * 1;
    } else if (units <= 150) {
        totalAmount = 50 * 1 + (units - 50) * 2;
    } else if (units <= 250) {
        totalAmount = 50 * 1 + 100 * 2 + (units - 150) * 3;
    } else {
        totalAmount = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
    }

    if (units > 150) {
        var surcharge = 0.2 * totalAmount;
        totalAmount += surcharge;
    }

    return totalAmount;
}

    var units = 300; 
    var amountToPay = elactricityBill(units);
    document.getElementById('electricity-bill').innerHTML = "Electricity Bill: " + (amountToPay.toFixed(2));

// document.getElementById('electricity-bill').innerHTML = "Electricity Bill: ";

// document.getElementById('bill').innerHTML = resultHTML;