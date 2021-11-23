//problem-1/ seer to mon javascript problem solve
function seerToMon (seer) {
    // input error alart part start
    if (typeof seer != 'number') {
    return 'Please give a number'
    }
    if (seer < 0) {
    return 'Please enter a positive number.'
    }
    // input error alart part end
    var mon = seer/ 40;
    return mon;
    }
    var seerInputValue =400;
    var mon = seerToMon(seerInputValue);
    console.log( mon);
    // problem-2 / total sales programming problem solve
    function totalSales (shirtQuantity, pantQuantity, shoesQuantity) {
    // input error alart part start
    if (typeof shirtQuantity != 'number' && pantQuantity != 'number' & shoesQuantity != 'number') {
    return 'Please give a number'
    }
    if (shirtQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0) {
    return 'Please enter a positive number.'
    }
    // input error alart part end
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoesPrice = 500;
    //shirt, pant, shoes calculation
    const totalShirtPrice = shirtQuantity * perShirtPrice;
    const totalPantPrice = pantQuantity * perPantPrice;
    const totalShoesPrice = shoesQuantity * perShoesPrice;
    // adding all product quantity
    const totalProductsSalesPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalProductsSalesPrice;
    }
    const totalShopping = totalSales ( 3, 1, 1);
    console.log (totalShopping);
    //problem-3 -- t-shirt delivery cost problem solve
    function deliveryCost (deliveredtShirt) {
    // input error alart part start
    if (typeof deliveredtShirt != 'number') {
    return 'Please give a number'
    }
    if (deliveredtShirt < 0) {
    return 'Please enter a positive number.'
    }
    // input error alart part end
    // per tshirt level wise deliveryCost
    const oneToHundredPerTshirtDeliveryCost = 100;
    const oneHundredToTwoHundredPerTshirtDeliveryCost = 80;
    const upTwoHundredTshirtDeliveryCost = 50;
    // 1-100 tshirt delivary cost calculation
    if ( deliveredtShirt<=100) {
    const firstHundredDeliverycharges = deliveredtShirt * oneToHundredPerTshirtDeliveryCost;
    return firstHundredDeliverycharges;
    }
    // 101-200 tshirt delivary cost calculation
    else if (deliveredtShirt <=200) {
    const firstHundredDeliveryCost = 100 * oneToHundredPerTshirtDeliveryCost;
    const restDeliveredTShirt = deliveredtShirt - 100;
    const secondHundredDeliveryCost = restDeliveredTShirt * oneHundredToTwoHundredPerTshirtDeliveryCost;
    const totalDeliveryCost = firstHundredDeliveryCost + secondHundredDeliveryCost;
    return totalDeliveryCost;
    }
    // 200+ tshirt delivary cost calculation
    else{
    const firstHundredDeliveryCost = 100 * oneToHundredPerTshirtDeliveryCost;
    const secondHundredDeliveryCost = 100 * oneHundredToTwoHundredPerTshirtDeliveryCost;
    const restDeliveredTShirt = deliveredtShirt - 200;
    const upTwoHundredDeliveryCost = restDeliveredTShirt * upTwoHundredTshirtDeliveryCost;
    const totalDeliveryCost = firstHundredDeliveryCost + secondHundredDeliveryCost + upTwoHundredDeliveryCost;
    return totalDeliveryCost;
    }
    }
    const tshirtDeliveryCharge = deliveryCost (500);
    console.log(tshirtDeliveryCharge);
    // problem-4/ perfectFriend problem solve
    const friendsNames = ['yeasaleh', 'junayed', 'arefin','raza', 'faraz', 'tarif', 'saleh', 'nazmul']
    function perfectFriend(names) {
    for (const friend of names) {
    // input error alart part start
    if (typeof friend !== "string") {
    return "Friend's Name Should Be A String"
    }
    // input error alart part end
    }
    for (const friend of names) {
    if (friend.length === 5) {
    return friend
    }
    }
    }
    console.log(perfectFriend(friendsNames));