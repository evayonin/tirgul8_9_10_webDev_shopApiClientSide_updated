import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product.jsx";

const ShowCategory = () => {

    const [categories,setCategories] = useState([]);
    const [selectCategory,setSelectCategory] = useState(""); // הקטגוריות שהיוזר בחר
    const [products,setProducts] = useState([]); // המוצרים בקטגוריה שנבחרה

    useEffect(() => {
      axios.get("http://localhost:8080/get-categories")
          .then((response) => {
              if (response.data!==null){
                  setCategories(response.data)
              }
          })
    },[])

    // const handleChoice=()=>{  // כדי לראות שבחרנו נכון - נרצה לקבל המוצרים לפי את האיידי של הפונקציה שמחזירה
    // קודם אביה עשתה alert(selectedCategory) כדי לראות שבחר נכון.
    //    axios.get("http://localhost:8080/get-products-by-category-id?categoryId=" + selectCategory) // הסלקטד קטגורי זה בעצם האיידי (הווליו באופשן שנבחר (האיידי) שווה לווליו בסלקט) - מה שבריטרן
    //        .then((response) => {
    //            if (response.data!==null){
    //                setProducts(response.data)
    //            }
    //        })
    // }
    // זה מתקשר לשרת במתודה המתאימה בקונטרולר ובצד שרת יצרנו ממחלקה של הדאטה בייס את המתודה getProductsByCategoryId שמקושרת באותה מתודה בקונטרולר.


    useEffect(()=>{ // כדי שיעלה מיד עם עליית הקומפוננטה ולא עם לחיצת כפתור - מיד שולח בקשה לשרת
        axios.get("http://localhost:8080/get-products-by-category-id?categoryId=" + selectCategory) // המוצרים שיציג לי
               .then((response) => {
                   if (response.data!==null){
                       setProducts(response.data) // מעדכן מאת מערך המוצרים שנציד - נציד רק את המוצרים מאותה הקטגוריה
                   }})
    },[selectCategory]) //  קורא מחדש בכל שינוי של הקטגוריה

    return(
        <div>
            {
                categories.length===0? // הקטגוריות חוזרות מבקשת הקטגוריות מהצד שרת (יש שם בקונטרולר נתיב עם מתודה שמביאה לי את הקטגוריות)  בעת עליית הקומפוננטה
                    <p>No categories yet...</p>:
                    <select value={selectCategory} // המשתנה ייקבל את הערך שבחרנו בסלקט בדפדפן. בהתחלה ריק לפני שבחרו. יתעדכן ע״י און צ׳יינג׳ אחרי הלחיצה על הoption שרוצים
                            onChange={(event)=>setSelectCategory(event.target.value)}>
                        <option> בחר קטגוריה </option>
                        {
                          categories.map((category,index)=>{ // מכל הקטגוריות
                              return(
                                  <option value={category.id} key={index}>{category.name}</option> // יציג לי אופציות בחירה (כל option) של כל הקטגוריות הקיימות בסלקט
                              )
                          })
                        }
                    </select>
            }
            {/*<button onClick={handleChoice}>send  //כדי לקבל את המוצרים לפי הקטגוריה
            </button>*/}

            { // אחרי שבחר קטגוריה (הבקשה לשרת מביאה לי את רשימת המוצרים באותה קטגוריה בדאטה בייס):
                products.length!==0&& // נציג רק אם יש מוצרים בקטגוריה
                // אביה פשוט הכניסה מראש אצלה בטבלה רשומות של מוצרים ויש עמודת קטגוריה איידי לכל מוצר וכך יודעים אילט מוצרים להציג
                <div>
                    {
                        products.map((product,index)=>{ // עובר על כל המוצרים
                            return(
                                <Product key={index} product={product} /> // לפי מה שאביה הכניסה בטבלה אצלה (כל רשומה היא קומפוננטה פרודאקרט)
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
 export default ShowCategory;