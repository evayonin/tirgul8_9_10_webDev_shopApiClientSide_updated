import {useState} from "react";
import axios from "axios";

function Register() { // כמו שנצטרך לעשות בעבודה אבל יש עוד אופציה בregister2. אביה השתמשה בזה שכאן לתרגיל החנות.

    const[user,setUser] = useState({ // ע״י אובייקט עם 2 שדות במקום 2 משתנים
        name:"",
        password:"",
    });

    const register =()=>{
        //http: - פרוטוקול
        //localhost -> ip - הכתובת של השרת
        //8080 -> פורט
        //register-user הנתיב לשירות הספציפי בתוך האפליקציה / בשרת
        axios.post("http://localhost:8080/register-user",{name:user.name,password:user.password}). // ככה חייב לשלוח את הדאטה כדי שיעבוד ויישלח מהשרת לדאטה בייס את היוזר בצורה תקינה
        then((response)=>{
            console.log(response.data)

        })

    }

    return(
        <div>
            <h3>Register</h3>
            <div>
                <input type={"text"}
                       value={user.name}
                       placeholder={"enter username"}
                       onChange={(e) => setUser({...user, name: e.target.value})} // כשרוצים לעדכן רק שדה אחד בסטייט של המשתנה
                />
                <br/>
                {user.name.length < 5 && <label> username len must to be at least 5 letters </label>}
            </div>


            <div>
                <input type={"password"}
                       value={user.password}
                       placeholder={"enter password"}
                       onChange={(e) => setUser({...user, password: e.target.value})}/>
                <br/>
                {user.password.length < 8 && <label> password len must to be at least 8 letters </label>}
            </div>

             <button onClick={register}>Register</button>
        </div>
    )
}

export default Register;