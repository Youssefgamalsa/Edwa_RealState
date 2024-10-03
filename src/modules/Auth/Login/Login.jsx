// import { Link, useNavigate } from "react-router-dom";
// import "../../../../App.css";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { Authcontext } from "../../../../Context/Authcontext";
// import { UserUrls } from "../../../../BaseUrls/BaseUrls";
import prifile_img from "../../../assets/1.png";
import logo from "../../../assets/logo.png";
import { useForm } from "react-hook-form";
// import { useState } from "react";

export default function Login() {
  // const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);
  // // let { saveData } = useContext(Authcontext);
  // let navigate = useNavigate();
  let {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  // let submtion = async (data) => {
  //   try {
  //     let response = await axios.post(UserUrls.login, data);
  //     toast.success("Login successfully");
  //     navigate("/dashboard");
  //     console.log(response);
  //     localStorage.setItem("token", response.data.token);
  //     saveData();
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/login");
  //   }
  // });
  const displaySelectedImage = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="container-fluid up_container">
        <div className="row justify-content-center align-items-center vh-100 up ">
          <div className="col-lg-5 bg-white p-5 ">
            <img src={logo} alt="food-logo" className="w-50" />
            <div className="my-1">
              <h2> Login </h2>
              <span className="text-dark">
                please enter your Name && email && phone number
              </span>
            </div>
            <form className="p-1">
              <div
                className="input-group flex-nowrap my-3"
                style={{ width: "30%", margin: "auto" }}
              >
                <div>
                  <div data-mdb-ripple-init>
                    <label
                      className="form-label text-white m-1"
                      htmlFor="customFile1"
                    >
                      <img
                        id="selectedImage"
                        src={prifile_img}
                        alt="example placeholder"
                        style={{
                          width: "100px",
                          margin: "auto",
                          cursor: "pointer",
                        }}
                      />
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile1"
                      onChange={displaySelectedImage}
                    />
                  </div>
                </div>
              </div>
              <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-signature"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name "
                  aria-label="name"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email "
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap my-3">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Number "
                  aria-label="number"
                  aria-describedby="addon-wrapping"
                  {...register("number", {
                    required: "Number is Required ",
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-danger text-left">
                  {errors.password.message}
                </p>
              )}
              <button
                type="submit"
                className="btn btn-success d-block w-100 my-3 p-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
