function Product({product ,addToCart}){ // אביה הכניס ערכים מהטבלה עצמה שהיא יצרה אצלה בדאטה בייס
    // כקגע add to cart לר עושה כלום
    return(
        <div>
          <h2 style={{color:product.color}}>{product.name} - {product.price} $</h2>
          <button onClick={()=>addToCart(product)}>add to cart</button>
            <img style={{width:"100px" , height:"100px"}} src={product.url} alt={product.name} // יציג את תמונת המוצר (מהרישור בדאטה בייס) , אחרת אם אין יציג שם מוצר
            />
        </div>
        // הערה חשובה!!! :
        // יודע להציג לי את המוצר ככה בגלל setProducts מערך המוצרים בבקשה בקומפוננטה showCategory כשמוכנסים למערך אובייקטים של product לפי המוצרים שחוזרים בבקשה
    )
}export default Product;