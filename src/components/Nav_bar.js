import React from "react";

export const NavigationBar1 = () => (
  <nav class="navbar navbar-expand-lg navbar-dark elegant-color">
    <a class="navbar-brand" href="/">
      <img
        class="navbar-logo"
        src={require("./logo_ligthing.ico")}
        alt=""
        style={{ height: 25, width: 25, marginRight: -10 }}
      />
    </a>
    <a class="navbar-brand" href="/">
      Westwood Electricity
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/westwood/">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/westwood/#/about">
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/westwood/#/services">
            Services
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/reactjs/westwood/#/contact">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
