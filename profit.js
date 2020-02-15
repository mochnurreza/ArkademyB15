function getMaxProfit(pricesArr) {
    if (stockPricesYesterday.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }
    
    
    var minPrice = pricesArr[0]
    var maxProfit = pricesArr[1] - pricesArr[0]
    var minIndex = 0
    
    
    for (var i = 1, length = pricesArr.length; i < length; ++i) {  
      if (pricesArr[i] - minPrice > maxProfit) {
        maxProfit = pricesArr[i] - minPrice
      }
      if (pricesArr[i] < minPrice && i !== length - 1) {
        minPrice = pricesArr[i]
        minIndex = i
      }
    }
    
    return maxProfit
  }
  var stockPricesYesterday = [10, 2, 11, 20, 3, 5];
  getMaxProfit(stockPricesYesterday)