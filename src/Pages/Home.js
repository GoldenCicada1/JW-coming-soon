import React, { Component } from "react";
import Logo from "../assets/images/logo.svg";
import Banner from "../assets/images/banner.svg";
import Timer from "./components/Timer";
export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <section>
          <nav>
            <div className="container">
              <img src={Logo} alt="logo" className="brand"></img>
            </div>
          </nav>
          <div className="cid-rOM5rKjpOn">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center left">
                  <h1 className="display-1">Coming soon!</h1>
                  <p className="banner-text display-7">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <div classNameName="form-container">
                    <form>
                      <div className="form-row align-items-center">
                        <div className="col-auto">
                          <div className="input-group mb-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Email Address"
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">Notify Me</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 banner-container">
                  <div className="banner"></div>
                  <div className="my-3">
                    <Timer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
