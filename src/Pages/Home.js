import React, { useState } from "react";
import Logo from "../logo.png";
import Banner from "../assets/images/banner.svg";
import Timer from "./components/Timer";

const Home = () => {
  const [email, setEmail] = useState(""); // State to hold the email input
  const [error, setError] = useState(""); // State to hold error messages

  const handleInputChange = (event) => {
    setEmail(event.target.value); // Update state with the current input value
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address."); // Set error message
      return;
    }

    console.log("Email submitted:", email); // Log the email to the console
    setEmail(""); // Clear the input field after submission
  };

  return (
    <div id="home">
      <section>
        <nav>
          <div className="container">
            <img src={Logo} alt="logo" className="brand" />
          </div>
        </nav>
        <div className="cid-rOM5rKjpOn">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 text-section">
                <h1 className="display-1">Coming soon!</h1>
                <p className="banner-text display-7">
                  At Japhets Wings, we’re dedicated to elevating your
                  experience with innovative solutions and exceptional service.
                  Stay tuned as we prepare to take flight and unveil something
                  truly special. Your journey begins soon!
                </p>
                <div className="form-container">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row align-items-center">
                      <div className="col-auto">
                        <div className="input-group mb-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email Address"
                            aria-label="Enter Your Email Address"
                            value={email} // Bind state to input
                            onChange={handleInputChange} // Handle input change
                            required // Ensure the field is required
                          />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">
                              Notify Me
                            </button>
                          </div>
                        </div>
                        {error && <div className="text-danger">{error}</div>} {/* Display error message */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 banner-container">
                <img src={Banner} alt="Banner" className="banner" />
                <div className="my-3 timer">
                  <Timer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
