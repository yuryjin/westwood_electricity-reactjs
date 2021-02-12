import React from "react";
import "./Services.css";

export const Services = () => (
  <>
  <div className="servicespage">
    <div className="jumbotron-services d-none d-lg-block hero-image-desktop-version-services">
      <div className="container text-white">
        <h1 className="text-white" align="left">Here you can find all our services!</h1>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <p align="justify">Lorem ipsum dolor sit amet, nostrud salutatus assentior ei vis,
            mutat melius iriure no qui, pro illum clita id. An sale discere
            ullamcorper cum. Has ut unum meis forensibus.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="jumbotron-services d-block d-lg-none hero-image-mobile-version-services">
      <div className="container text-white">
        <h1 className="text-white" align="left">Here you can find all our services!</h1>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <p align="justify">Lorem ipsum dolor sit amet, nostrud salutatus assentior ei vis,
            mutat melius iriure no qui, pro illum clita id. An sale discere
            ullamcorper cum. Has ut unum meis forensibus.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="services-page-wrapper-content">
      <h1 className="services-page-main-header-title">Our services</h1>
      <div className="container services-page-container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                <div class="card cardo">
                  <img
                    className="card-img-top"
                    src={require("./media/service-page/electrical-safety-inspection.jpg")}
                    alt=""
                    style={{ height: 200, width: "100%" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Electrical safety inspection</h5>
                    <p class="card-text" align="justify">
                      Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                      aliquip vel. An per falli dicam persecuti. Has cu minimum
                      efficiendi, ea laudem deseruisse vim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                <div class="card cardo">
                  <img
                    class="card-img-top"
                    src={require("./media/service-page/electrical-overhaul.jpg")}
                    alt=""
                    style={{ height: 200, width: "100%" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Electrical system overhaul</h5>
                    <p class="card-text" align="justify">
                      Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                      aliquip vel. An per falli dicam persecuti. Has cu minimum
                      efficiendi, ea laudem deseruisse vim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                  <div class="card cardo">
                    <img
                      class="card-img-top"
                      src={require("./media/service-page/child-proofing.png")}
                      alt=""
                      style={{ height: 200, width: "100%" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">Child proofing</h5>
                      <p class="card-text" align="justify">
                        Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                        aliquip vel. An per falli dicam persecuti. Has cu minimum
                        efficiendi, ea laudem deseruisse vim.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                <div class="card cardo">
                  <img
                    class="card-img-top"
                    src={require("./media/service-page/electrical-surge.jpg")}
                    alt=""
                    style={{ height: 200, width: "100%" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Surge protection</h5>
                    <p class="card-text" align="justify">
                      Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                      aliquip vel. An per falli dicam persecuti. Has cu minimum
                      efficiendi, ea laudem deseruisse vim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                <div class="card cardo">
                  <img
                    class="card-img-top"
                    src={require("./media/service-page/recessed-lighting.jpg")}
                    alt=""
                    style={{ height: 200, width: "100%" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Recessed lighting installation</h5>
                    <p class="card-text" align="justify">
                      Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                      aliquip vel. An per falli dicam persecuti. Has cu minimum
                      efficiendi, ea laudem deseruisse vim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                <div class="card cardo">
                  <img
                    class="card-img-top"
                    src={require("./media/service-page/wiring.jpg")}
                    alt=""
                    style={{ height: 200, width: "100%" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Wiring</h5>
                    <p class="card-text" align="justify">
                      Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                      aliquip vel. An per falli dicam persecuti. Has cu minimum
                      efficiendi, ea laudem deseruisse vim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);

/*

  <div className="servicespage" style={{ minHeight: "90vh" }}>
    <h1 style={{ paddingTop: 100, marginBottom: 50 }}>Our services</h1>
    <div className="container container-services border border-light">
      <div className="row pb-5">
        <div className="col">
          <div class="card cardo">
            <img
              class="card-img-top"
              src={require("./media/service-page/electrical-safety-inspection.jpg")}
              alt=""
              style={{ height: 200, width: 320 }}
            />
            <div class="card-body">
              <h5 class="card-title">Electrical safety inspection</h5>
              <p class="card-text" align="justify">
                Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                aliquip vel. An per falli dicam persecuti. Has cu minimum
                efficiendi, ea laudem deseruisse vim.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card cardo">
            <img
              class="card-img-top"
              src={require("./media/service-page/electrical-overhaul.jpg")}
              alt=""
              style={{ height: 200, width: 320 }}
            />
            <div class="card-body">
              <h5 class="card-title">Electrical system overhaul</h5>
              <p class="card-text" align="justify">
                Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                aliquip vel. An per falli dicam persecuti. Has cu minimum
                efficiendi, ea laudem deseruisse vim.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card cardo">
            <img
              class="card-img-top"
              src={require("./media/service-page/child-proofing.png")}
              alt=""
              style={{ height: 200, width: 320 }}
            />
            <div class="card-body">
              <h5 class="card-title">Child proofing</h5>
              <p class="card-text" align="justify">
                Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                aliquip vel. An per falli dicam persecuti. Has cu minimum
                efficiendi, ea laudem deseruisse vim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="card cardo">
            <img
              class="card-img-top"
              src={require("./media/service-page/electrical-surge.jpg")}
              alt=""
              style={{ height: 200, width: 320 }}
            />
            <div class="card-body">
              <h5 class="card-title">Surge protection</h5>
              <p class="card-text" align="justify">
                Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                aliquip vel. An per falli dicam persecuti. Has cu minimum
                efficiendi, ea laudem deseruisse vim.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card cardo">
            <img
              class="card-img-top"
              src={require("./media/service-page/recessed-lighting.jpg")}
              alt=""
              style={{ height: 200, width: 320 }}
            />
            <div class="card-body">
              <h5 class="card-title">Recessed lighting installation</h5>
              <p class="card-text" align="justify">
                Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                aliquip vel. An per falli dicam persecuti. Has cu minimum
                efficiendi, ea laudem deseruisse vim.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card cardo">
            <img
              class="card-img-top"
              src={require("./media/service-page/wiring.jpg")}
              alt=""
              style={{ height: 200, width: 320 }}
            />
            <div class="card-body">
              <h5 class="card-title">Wiring</h5>
              <p class="card-text" align="justify">
                Lorem ipsum dolor sit amet, in movet suavitate eum, ea ullum
                aliquip vel. An per falli dicam persecuti. Has cu minimum
                efficiendi, ea laudem deseruisse vim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

*/