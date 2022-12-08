import React from 'react'
import './css/styles.css';
import { useNavigate } from "react-router-dom";
import useScript from "./useScript"

// This is a new landing page formatted


function LandingPage () {
    const navigate = useNavigate();
    useScript("https://use.fontawesome.com/releases/v6.1.0/js/all.js");
    useScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js");
    useScript("https://cdn.startbootstrap.com/sb-forms-latest.js");


  return (
    <div>
        <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">PFW</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="" onClick={() => navigate("/SignIn")}>Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">DONS 365</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5"></h2>
                    </div>
                </div>
            </div>
        </header>

        <section class="contact-section bg-black">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">2101 E Coliseum Blvd, Fort Wayne, IN 46805</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Official Website</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="https://www.pfw.edu/">https://www.pfw.edu/</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">+1 (260) 481-6812</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="https://twitter.com/purduefw"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="https://www.facebook.com/PurdueFortWayne/"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </section>
        </>
    </div>
  )
}

export default LandingPage