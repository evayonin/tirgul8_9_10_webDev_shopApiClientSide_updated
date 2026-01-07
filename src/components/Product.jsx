function Product({product ,addToCart}){ // אביה הכניס ערכים מהטבלה עצמה שהיא יצרה אצלה בדאטה בייס
    return(
        <div>
          <h2 style={{color:product.color}}>{product.name} - {product.price} $</h2>
          <button onClick={()=>addToCart(product)}>add to cart</button>
        </div>
    )
}export default Product;