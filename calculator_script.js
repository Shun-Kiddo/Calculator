    const display = document.getElementById("numberPlaceHolder");
    function addtoDisplay(input) {
      display.value += input;
    }

    function clearDisplay() {
      display.value = '';
    }

    function backspace() {
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      try {
        let expression = display.value.replace(/÷/g, '/').replace(/x/g, '*');
        display.value = Function('"use strict";return (' + expression + ')')();
      } catch (error) {
        display.value = 'Error';
      }
    }
    
    document.addEventListener('keydown', function(event) {
      if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/'].includes(event.key)) {
        addtoDisplay(event.key);
      } else if (event.key === 'Enter') {
        calculate();
      } else if (event.key === 'Backspace') {
        backspace();
      }
    });