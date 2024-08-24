$("h1").addClass("big-title")
const screen = document.getElementById("screen");

function appendToDisplay(input){
 screen.value += input
}

function clearDisplay(){
    screen.value = "";
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error."
    }
  
}


 document.addEventListener("keypress", function(event){
    
    handleType(event.key)
 })

function handleType(key){


switch (key) {
    case '+':
        appendToDisplay('+');
        break;
        case '-':
        appendToDisplay('-');
        break;
        case '*':
        appendToDisplay('*');
        break;
        case '/':
        appendToDisplay('/');
        break;
        case '.':
            appendToDisplay('.');
        break;
        case 'Enter':
        calculate();
        break;
        case 8:
        clearDisplay();
        ;
        break;
        case '0':
        appendToDisplay('0');
        break;
        case '1':
        appendToDisplay('1');
        break;
        case '2':
        appendToDisplay('2');
        break;
        case '3':
        appendToDisplay('3');
        break;
        case '4':
        appendToDisplay('4');
        break;
        case '5':
        appendToDisplay('5');
        break;
        case '6':
        appendToDisplay('6');
        break;
        case '7':
        appendToDisplay('7');
        break;
        case '8':
        appendToDisplay('8');
        break;
        case '9':
        appendToDisplay('9');
        break;


    default:
        console.log(btnInnerHtml);
        break;
}
}