import React, { useState, useEffect } from "react";
import Logo from "../logo.png";
import Banner from "../assets/images/banner.svg";
import Timer from "./components/Timer";

const Home = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Load reCAPTCHA script
    const loadRecaptcha = () => {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6Lfj30wqAAAAAJFjOBdAq6tkkedZ71wi8puf38Re";
      document.body.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Set loading to true

    try {
      // Execute reCAPTCHA and get the token
      const token = await window.grecaptcha.execute(
        "6Lfj30wqAAAAAJFjOBdAq6tkkedZ71wi8puf38Re",
        { action: "submit" }
      );

      // Submit the form to Formspree with the token
      const response = await fetch("https://formspree.io/f/xovaopkr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, recaptcha: token }), // Include token in submission
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleResend = () => {
    setSubmitted(false);
    setError("");
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
                  At Japhets Wings, we’re dedicated to elevating your experience
                  with innovative solutions and exceptional service. Stay tuned
                  as we prepare to take flight and unveil something truly
                  special. Your journey begins soon!
                </p>

                <div className="form-container">
                  {submitted ? (
                    <div className="text-success">
                      <h4>Thank you! We will notify you soon.</h4>
                      <button
                        className="btn btn-primary"
                        onClick={handleResend}
                      >
                        Resend
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="form-row align-items-center">
                        <div className="col-auto">
                          <div className="input-group mb-2">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Your Email Address"
                              aria-label="Enter Your Email Address"
                              value={email}
                              onChange={handleInputChange}
                              required
                              name="email"
                            />
                            <div className="input-group-append">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                              >
                                {loading ? (
                                  <div className="spinner"></div>
                                ) : (
                                  "Notify Me"
                                )}
                              </button>
                            </div>
                          </div>
                          {error && <div className="text-danger">{error}</div>}
                        </div>
                      </div>
                    </form>
                  )}
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
