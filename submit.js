function validateFormOnSubmit(formObject) {
    const nameTrimmed = formObject.name.value.trim();
    // check if they entered more than one "word"
    if(!nameTrimmed.includes(" ")) {
        alert("Please include your first and last name")
        return false;
    }

    // 1) do the same check for cardholder name


    // 2) validate if total is greater than 0
    const itemTotal = parseFloat(document.getElementById("total").innerText);
    if(true) {
        alert("You can't checkout without buying anything!")
        return false;
    }

    // 3) check if cvv has only 3 digits
    // hint: you'll want to check if the string "contains" only digits and if there are only 3 of them
    const cvv = formObject.cvv.value
    if(true){
        alert("Invalid cvv")
        return false;
    }


    
    /* 
    BONUS: check if expiry date follows the correct format
    that is:
    - has the form "MM/YY"
    - MM is between 01 and 12
    - YY is between 00 and 99
    */
    alert("submitted!")
    return true;
}