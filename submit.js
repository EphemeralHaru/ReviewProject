/* 
note: if we return true from this function, pay attention the the URL
you'll notice it has changed. Try to figure out where these changes came from.

Hopefully you notice something related to the "name" attribute in HTML :) 
*/


function validateFormOnSubmit(formObject) {
    const nameTrimmed = formObject.name.value.trim();
    // check if they entered more than one "word"
    if(!nameTrimmed.includes(" ")) {
        alert("Please include your first and last name")
        return false;
    }

    // 1) do the same check for cardholder name
    const cardHolderNameTrimmed = formObject.cardholder.value.trim();
    if(!cardHolderNameTrimmed.includes(" ")) {
        alert("Please include your first and last name for cardholder")
        return false;
    }


    // 2) validate if total is greater than 0
    const itemTotal = parseFloat(document.getElementById("total").innerText);
    if(itemTotal=== 0) {
        alert("You can't checkout without buying anything!")
        return false;
    }

    // 3) check if cvv has only 3 digits
    const cvv = formObject.cvv.value
    if(!cvv || cvv.match(/[^0-9]/) || cvv.length !== 3){
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
    const expiryDateArr = formObject.expiry.value.split("/")
    if(expiryDateArr.length < 2){
        alert("Invalid expiry date")
        return false
    } else {
        if (expiryDateArr[0].length < 2 || expiryDateArr[1].length < 2 ) {
            alert("Invalid expiry date")
            return false;
        } 

        const month =  parseInt(expiryDateArr[0])
        const year = parseInt(expiryDateArr[1])
        if ( !month || month < 1 || month > 12 || !year || year< 0 || year >99 ) {
            alert("Invalid expiry date")
            return false;
        }
    }
    
    alert("submitted!")
    return true;
}