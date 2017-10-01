var App = {
    launch: function(){
        App.getA();
        App.getB();
        App.getModulus();
        App.displayResult();
    },
    
    getA: function(){
        let input = prompt("What number do you want for a?", 5);
        if(input != null){
            $('#a').html(input);
        }
    },

    getB: function(){
        let input = prompt("What number do youw ant for b?", 26);
        if(input != null){
            $('#b').html(input);
        }
    },

    getModulus: function(){
        let first = parseFloat($('#a').html());
        let second = parseFloat($('#b').html());
        let answer = calculateMod(first, second);
        $('#mod').html(answer);
        $(".displayMod").css('display', 'inline-block');
        alert(first + " % " + second + " = " + answer);
    },

    calculateMod: function (first, second){
        if(typeof first !== 'number' || typeof second !== 'number'){
            throw Error('Invalid input; not a number.');
        }

        let mod = first % second;
        return mod;
    },

    displayResult: function(){

    }
};