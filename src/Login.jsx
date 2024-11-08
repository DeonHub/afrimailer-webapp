import Loader from "./components/Loader";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import openNotification from "./components/OpenNotification";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length !== 0 && password.length !== 0) {
      const body = { email, password };
      setIsLoading(true);

      if(email === "admin@afriam.com" && password === "qwertyuiop"){
        
        openNotification("topRight", "success", "Success", "Login Successful");
  
        setTimeout(() => {
          setIsLoading(false);
          navigate(`/dashboard`);
        }, 2000);
      }else{
        setTimeout(() => {

          setIsLoading(false);
          openNotification("topRight", "error", "Login Error", "Invalid email or password");
          setEmail("");
          setPassword("");

        }, 2000);
      }
      


      // axios
      //   .post(`${import.meta.env.VITE_API_URL}/auth/login`, body, { credentials: 'include' }, { headers: {
      //     'Content-Type': 'application/json',
      //   },})
      //   .then((response) => {
      //     if (response.data.success) {

      //       setIsLoading(false);

      //       openNotification("topRight", "success", "Success", "Login Successful");

      //       setTimeout(() => {
      //         navigate(`/dashboard`);
      //       }, 1000);
      //     }
      //   })
      //   .catch((error) => {
      //     setIsLoading(false);
      //     openNotification("topRight", "error", "Login Error", error.response.data.message);
      //     setEmail("");
      //     setPassword("");

      //     console.log("error :>> ", error.response.data.message);
      //   });
    } else {
      setIsLoading(false);
      openNotification("topRight", "error", "Login Error", "Please provide email and password");
    }
  };

  return (

    isLoading ? (<Loader />) : (
      <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="text-center text-3xl font-bold text-black mt-5"> Afriam HRM</h2>
     
      <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={handleInputChange}
              placeholder="Enter email address..."
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              onChange={handleInputChange}
              placeholder="Enter password..."
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={handleSubmit}  
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Sign Up
        </a>
      </p>
    </div>
    </div>
      </>
    )
    
  );
};


export default Login;