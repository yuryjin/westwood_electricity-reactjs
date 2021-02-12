import React, { Component } from "react";
import "./Home.css";
import SweetAlert from 'sweetalert2-react';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.RedirectToAboutPage = this.RedirectToAboutPage.bind(this);
    this.RedirectToServicesPage = this.RedirectToServicesPage.bind(this);
    this.RedirectToContactsPage = this.RedirectToContactsPage.bind(this);
  }

  sayHello() {
    alert("Hello!");
  }
  RedirectToAboutPage() {
    window.location.href = "./about";
  }
  RedirectToServicesPage() {
    window.location.href = "./services";
  }
  RedirectToContactsPage() {
    window.location.href = "./contact";
  }
  render() {
    return (
      <div className="homepage">
        <section>
          <div>
            <div className="jumbotron jumbotron-home d-none d-lg-block hero-image-desktop-version-home">
              <div className="container homepage-content text-center" align="left">
                <div className="header_and_tagline" align="left">
                  <h1 className="headermain">Westwood Electricity</h1>
                  <h3 className="tagmain">We get to work and get it done!</h3>
                  {/* 
                  <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.RedirectToAboutPage}
                      >
                        About Us
                      </button>
                    */}
                  <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.RedirectToServicesPage}
                      >
                        Services
                      </button>
                      {/* 
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.RedirectToContactsPage}
                      >
                        Contacts
                      </button>
                      */}
                </div>
              </div>
            </div>
            <div className="jumbotron jumbotron-home d-block d-lg-none hero-image-mobile-version-home">
              <div className="container homepage-content text-center" align="left">
                <div className="header_and_tagline" align="left">
                  <h1 className="headermain">Westwood Electricity</h1>
                  <h3 className="tagmain">We get to work and get it done!</h3>
                  {/* 
                  <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.RedirectToAboutPage}
                      >
                        About Us
                      </button>
                    */}
                  <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.RedirectToServicesPage}
                      >
                        Services
                      </button>
                      {/* 
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={this.RedirectToContactsPage}
                      >
                        Contacts
                      </button>
                      */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="homepage-maincontent-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 container-homepage">
                  <div className="text-header">
                    <h2>Westwood Electricity</h2>
                  </div>
                  <div className="text-wrapper-text">
                    <p align="justify">Lorem ipsum dolor sit amet, ad vix velit praesent, ius ea feugiat consequuntur. Cu sea quot causae meliore, eu probo tincidunt deterruisset eam, has te ornatus laboramus. Te sed vidisse laoreet aliquando, nec cu alii definiebas. Diceret invidunt ei per, his ut commodo constituam. Nec ex insolens qualisque, id pri summo nonumy. Pri error nonumes dissentiunt id, pri cu laudem dolorum neglegentur, accusam efficiantur sit an. Lorem ipsum dolor sit amet, ad vix velit praesent, ius ea feugiat consequuntur. Cu sea quot causae meliore, eu probo tincidunt deterruisset eam, has te ornatus laboramus. Te sed vidisse laoreet aliquando, nec cu alii definiebas. Diceret invidunt ei per, his ut commodo constituam. Nec ex insolens qualisque, id pri summo nonumy. Pri error nonumes dissentiunt id, pri cu laudem dolorum neglegentur, accusam efficiantur sit an.</p>
                    <p align="justify">Lorem ipsum dolor sit amet, ad vix velit praesent, ius ea feugiat consequuntur. Cu sea quot causae meliore, eu probo tincidunt deterruisset eam, has te ornatus laboramus. Te sed vidisse laoreet aliquando, nec cu alii definiebas. Diceret invidunt ei per, his ut commodo constituam. Nec ex insolens qualisque, id pri summo nonumy. Pri error nonumes dissentiunt id, pri cu laudem dolorum neglegentur, accusam efficiantur sit an. Lorem ipsum dolor sit amet, ad vix velit praesent, ius ea feugiat consequuntur. Cu sea quot causae meliore, eu probo tincidunt deterruisset eam, has te ornatus laboramus. Te sed vidisse laoreet aliquando, nec cu alii definiebas. Diceret invidunt ei per, his ut commodo constituam. Nec ex insolens qualisque, id pri summo nonumy. Pri error nonumes dissentiunt id, pri cu laudem dolorum neglegentur, accusam efficiantur sit an.</p>
                  </div>
                  <SweetAlert show="true" title="Message" text="This site is for demonstration purposes only, showcasing author's skills. This site isn't real, you can't order electricity overhaul service from here." onConfirm={this.hideAlert} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script type="text/javascript">
          swal("Hello world!");
        </script>
      </div>
    );
  }
}

/*

      <div className="homepage">
        <div className="jumbotron jumbotron-home">
          <div className="container homepage-content" align="left">
            <div className="row">
              <div className="col-6 smallbox">
                <div className="shade">
                  <div className="header_and_tagline">
                    <h1 className="headermain">Westwood Electricity</h1>
                    <h3 className="tagmain">We get to work and get it done!</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row button-group">
              <div className="col">
                <div className="btn-toolbar mb-3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.RedirectToAboutPage}
                  >
                    About Us
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.RedirectToServicesPage}
                  >
                    Services
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.RedirectToContactsPage}
                  >
                    Contacts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

*/