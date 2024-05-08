
let choice = 12;
let msg = document.getElementById('msg');

switch(choice){

    case 11:
    case 12:
    case 1:
    case 2:
        msg.innerHTML = "Winter";
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        msg.innerHTML = "Summer";
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        msg.innerHTML = "Monsoon";
        break;
    default:
        msg.innerHTML = "Invalid season";
        break;
}