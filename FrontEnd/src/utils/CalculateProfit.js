export const CalculateProfit=(order)=>{
    if(order.orderItem?.buyprice && order.orderItem.sellprice){
        return order.orderItem?.sellprice-order.orderItem?.buyprice
    }
    return "-"
}