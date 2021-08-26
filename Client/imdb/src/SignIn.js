import './signin.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {
    Link,
  } from "react-router-dom";



export default function SignIn (){
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = async (values, e) => {
       // e.target.reset();
        try {
            const res = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: values.password,
                    email: values.Email
                })
            })
            const user = await res.json();
            console.log(user);
            //log in from context
        } catch(e) {
            console.log(e)
        }
       
    }


    return(
       <div className="signIn-container">
           <div className="signin-createAccount-container">
               <form onSubmit={handleSubmit(onSubmit)}>
                   <label>Email</label>
                    <input
                    type="text"
                    autoComplete= "off"
                    {...register("Email", {
                    required: "Required",
                    // pattern: {
                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //     message: "invalid email address"
                    //   }
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="Email"
                    message = "invalid Email"
                    render={({ message }) => <p>{message}</p>}
                    />

                    <label>Password</label>
                    <input
                    type="password"
                    autoComplete= "off"
                    {...register("password", {
                    required: "Required",
                    // pattern: {
                    //   value:  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                    // }
                    })}
                    />
                    <ErrorMessage
                    errors={errors}
                    name="password"
                    message = "password must contain at least 8 characters. must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters"
                    render={({ message }) => <p>{message}</p>}
                    />

                    <button type="submit" >Sign In</button>
               </form>

               <Link to="/create_Account">
                    <button>Create a New Account</button>
               </Link>
               <p class="text-center"><small>By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.</small></p>
           </div>

           <div className="perks">
                <h1>Benefits of your free IMDb account</h1>
                <div>
                    <p><strong>Personalized Recommendations</strong></p>
                    <p>Discover shows you'll love.</p>
                </div>
                <div>
                    <p><strong>Your Watchlist</strong></p>
                    <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                </div>
                <div>
                    <p><strong>Your Ratings</strong></p>
                    <p>Rate and remember everything you've seen.</p>
                </div>
                <div>
                    <p><strong>Contribute to IMDb</strong></p>
                    <p>Add data that will be seen by millions of people and get cool badges.</p>
                </div>
           </div>
       </div>
    );

}