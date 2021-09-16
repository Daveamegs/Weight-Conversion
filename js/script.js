
function convertToGrams(){
    var weightInKg = parseInt(document.getElementById("weightInKg").value, 10)
    var ans = weightInKg * 1000
    console.log(weightInKg + "kg" + " in Grams is " + ans + "g")

    // DISPLAYING RESULT
    document.getElementById("result").value = ans

    // CHANGING THE MASS UNITS
    document.getElementById("outputUnit").innerHTML = "Grams"


}

function convertToPounds(){
    var weightInKg = parseInt(document.getElementById("weightInKg").value, 10)
    var ans = weightInKg * 2.205
    console.log(weightInKg + "kg" + " in Pounds is " + ans + "lbs")

    // DISPLAYING RESULT
    document.getElementById("result").value = ans

    // CHANGING THE MASS UNITS
    document.getElementById("outputUnit").innerHTML = "Pounds"


}

function convertToTonnes(){
    var weightInKg = parseInt(document.getElementById("weightInKg").value, 10)
    var ans = weightInKg / 1000
    console.log(weightInKg + "kg" + " in Tonnes is " + ans + "t")

    // DISPLAYING RESULT
    document.getElementById("result").value = ans

    // CHANGING THE MASS UNITS
    document.getElementById("outputUnit").innerHTML = "Tonnes"    
}

// function convertToMilligrams(){
//     var weightInKg = parseInt(document.getElementById("weightInKg").value, 10)
//     var ans = weightInKg * 1000
//     console.log(weightInKg + "kg" + " in Grams is " + ans + "g")
    
// }

// function convertToMegaTonnes(){
//     var weightInKg = parseInt(document.getElementById("weightInKg").value, 10)
//     var ans = weightInKg * 1000
//     console.log(weightInKg + "kg" + " in Grams is " + ans + "g")
    
// }