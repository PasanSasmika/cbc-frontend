export function loadCart(){

    const cart = localStorage.getItem("cart");

    if(cart!=null){
        return JSON.parse(cart)
    }else{
        return []
    }
}

export function addToCart(productId, qty){
    const cart = loadCart()

    const index = cart.findIndex(
        (item)=>{
            return item.productId==productId
        }
    )

    if(index== -1){
        cart.push(
            {productId, qty}
        )
    }else{
        const newQty = cart[index].qty + qty
        if(newQty<=0){
            cart.splice(index,1)
        }else{
            cart[index].qty = newQty
        }
    }
   saveCart(cart) 
}

export function saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart))
}

export function deleteItem(productId){
    const cart = loadCart()

    const index = cart.findIndex(
        (item)=>{
            return item.productId==productId
        }
    )
    if(index!=-1){
        cart.splice(index,1)
    }
}