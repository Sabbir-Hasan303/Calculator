let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');   //.....taken all the button in buttons variable
let screenValue = '';                           //....clear screenValue first
for (item of buttons) {                         //...storing a clickable button information in item using for of loop..
    item.addEventListener('click', (e) => {     //...create a object "e"....
        buttonText = e.target.innerText;        //...target button's innertext store in buttontext..
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;         //....Display the value in screen...
        }
        else if (buttonText == 'AC') {
            screenValue = "";                   //.....clear screenValue
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);   //...evaluate screenValue by using eval function...
        }
        else if (buttonText == '<=') {
            screenValue = screenValue.slice(0,-1); //...for backspace....
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}