
var expr = '';
document.addEventListener('DOMContentLoaded',function()
    {
        exp_input = document.getElementById('Expression');

        buttons = document.querySelectorAll('button');

        buttons.forEach( function(button)
        {
            button.addEventListener('click', function() {
                input_button(button.textContent);
            });
        });


        
        function input_button(expr)
        {
            switch(expr)
            {
                case '=':
                    evaluate();
                    break;
                case 'CLEAR':
                    clear_expression();
                    break;
                case 'DELETE':
                    delete_last();
                    break;
                default:
                    add_value(expr);
                    break;
            }
            // if(value === '=')
            // {
            //     evaluate();

            // }
            // else if(value === 'CLEAR')
            // {
            //     clear_expression();
            // }
            // else if(value === 'DELETE')
            // {
            //     delete_last();
            // }
            // else
            // {
            //     add_value(expr);
            // }
        }

        function add_value(expr)
        {
            exp_input.expr += expr;
        }
        function clear_expression()
        {
            exp_input.expr = '';
        }
        function delete_last()
        {
            let a = exp_input.expr;
            exp_input.expr = a.slice(0,-1);
        }
        function evaluate()
        {
            let a = exp_input.expr;
            try
            {
                const result = eval(a);
                exp_input.expr = result;
            }catch(error)
            {
                exp_input.expr = 'Error';
            }
        }
});



document.addEventListener('DOMContentLoaded', function () {
    expressionInput = document.getElementById('expression');
 
    buttons = document.querySelectorAll('button');
 
   buttons.forEach(function (button) {
     button.addEventListener('click', function () {
       handleButtonClick(button.textContent);
     });
   });
 
   function handleButtonClick(value) {
     switch (value) {
       case '=':
         calculateResult();
         break;
       case 'Delete':
         deleteLastCharacter();
         break;
       case 'clear':
         clearExpression();
         break;
        default:
         appendToExpression(value);
         break;
     }
   }
 
   function appendToExpression(value) {
     expressionInput.value += value;
   }
 
   function deleteLastCharacter() {
     expressionInput.value = expressionInput.value.slice(0, -1);
   }
 
   function clearExpression() {
     expressionInput.value = '';
   }
 
 
   function calculateResult() {
     try {
       const result = eval(expressionInput.value);
       expressionInput.value = result;
     } catch (error) {
       expressionInput.value = 'Error';
     }
   }
 });
 

    
