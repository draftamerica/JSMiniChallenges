var multiplier = {
    currentValue: 1,

    multiply: function(ourNumber) {
        console.log("==multiply==");
        console.log("ourNumber", ourNumber);
        var temporaryValue = (ourNumber * multiplier.currentValue);
        console.log("temporaryValue", temporaryValue);
        multiplier.currentValue = temporaryValue;
    }

}
multiplier.multiply(5)
