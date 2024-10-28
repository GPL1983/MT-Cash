import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
      <div className="dvHeader">
        <div className="container-xl">
          <div className="row justify-content-between">
            <div className="col-6">
              <img width={50} src="/src/assets/logo/mt-cash-logo.svg" alt="" />
            </div>
            <div className="col-6 text-end">
              <button
                className="btn border"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
                aria-controls="offcanvasBottom"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-bottom"
        tabIndex={-1}
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            Offcanvas bottom
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body small">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </>
  );
};

export default Header;
