import axios from "axios";

const getCategories =()=>{ // אפשר לנהל מכאן את ההתחברות לשרת (שליחת הבקשה) מצד הלקוח במקום בתוך חלקת הקומפוננטה שואו קטגורי (מיד בעלייתה)
    return axios.get("http://localhost:8080/get-categories");
}