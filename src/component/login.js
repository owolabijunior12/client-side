
import React from "react";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
// import IBOY from "./IBOY.jpg"
import "../style/Login.css";
import { accessUrl } from "./sportify.js";

function Login() {
    // const [token, setToken] = useState("");
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = (data) => {
          console.log(data);
      }
    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // }
  return (
    <div className="login">
      <img
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSV5E74Dd_xq7-nf_PqIY97aWqynfqV1_fIQ&usqp=CAU'
       alt=""
      /> 
       {/* <header className="App-header">
              
              <h1>Spotify React</h1>
               {!token ?
                   <a href={accessUrl}>Login
                       to Spotify</a>
                   : <button onClick={logout}>Logout</button>}
           </header> */}
      <div>
             <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p>Please check the First Name</p>}
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p>Please check the Last Name</p>}
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                <Form.Field>
                    <label>Comfirm Password</label>
                    <input
                        placeholder='Comfirm Password'
                        type="password"
                        {...register("comfirmpassword", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                {errors.comfirmpassword && <p>Please check the Password</p>}
                <Button type='submit'><a href={accessUrl}>Register</a></Button>
                <small>Already have an account!  <a href="">Login</a></small>    
            </Form>
      </div> 
    </div>
  );
}
export default Login;
