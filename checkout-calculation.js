const itemQuantityEl  = document.getElementsByName("item-quantity")
const croissants = {
    earlGrey: {
        quantity:0,
        cost:6.75
    },
    matchaPistachio: {
        quantity:0,
        cost:7.34
    },
    passionFruit: {
        quantity:0,
        cost:8
    },
    sakeWhitePeach: {
        quantity:0,
        cost:6.10
    },
    saltedCaramelCoffee: {
        quantity:0,
        cost:6.55
    },
    tripleChoco: {
        quantity:0,
        cost:7.13
    },
}

/* 
updateTotal - updates the total cost after a croissant has been incrementeds

Parameters:
- totalEl: This is the element to be updated with the calculated cost
- changedCroissant: a croissant object with the following form
{
    quantity: number
    cost: number
}
- newQuantity: the new quantity retrieved from the ui after a "change" event


Return: void
*/

function updateTotal (totalEl, changedCroissant, newQuantity) {
    // if there is a change in quantity
    if (newQuantity !== changedCroissant.quantity) {
        // calculate the difference to see if we need to add or subtract
        const changedValue = newQuantity-changedCroissant.quantity;
        //cast string to float
        const totalVal = parseFloat(totalEl.innerText);
        // update the total with the difference
        const newtotal =totalVal + changedValue*changedCroissant.cost;
        // update ui
        totalEl.innerText = newtotal.toFixed(2);
    }
}


for (let i = 0; i <itemQuantityEl.length; i++){
    // 1) use an accessor method to get the <span> with the "total amount"
    // const totalEl = ...
    itemQuantityEl[i].addEventListener("change", function(event) {
        // 2) use the event object to get the element that is changing (or the "target" element)
        // const changedEl = ...

        // 3) Now I want the "id" of that element. We will use it to figure out what croissant we picked
        // const elementId = ...

        // 4) Since there is a "change" in quantity, figure out how to get the value of the new quantity
        // const newQuantity = ...

        // 5) use elementId to get the croissant that changed from "croissants"
        // const changedCroissant = ...

        // 6) Call "updateTotal" method with the proper parameters
        updateTotal(totalEl, changedCroissant, newQuantity)

        // finally, we will update the quantity in our "croissants" object
        changedCroissant.quantity=parseInt(newQuantity);

    })
}
