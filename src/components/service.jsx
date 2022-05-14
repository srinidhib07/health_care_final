import React from "react";
import "./style.css";

function Service()
{
    return (
        <body id="top">

<header>
	
	<nav class="navbar navbar-expand-lg navigation" id="navbar">
		<div class="container">
			<a class="navbar-brand" href="index.html">
				<img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid-icon"/>
			</a>

			<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
				aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
				<span class="icofont-navigation-menu"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarmain">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><a class="nav-link" href="home" >Home</a></li>
					<li class="nav-item"><a class="nav-link" href="about">About</a></li>
					<li class="nav-item active"><a class="nav-link" href="service">MedicalFacilities</a></li>

					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false"> <i class="icofont-thin-down"></i>Login</a>
						<ul class="dropdown-menu" aria-labelledby="dropdown02">
							<li><a class="dropdown-item" href="login">Sign In</a></li>
							<li><a class="dropdown-item" href="signup">Sign Up</a></li>
                    
						</ul>
					</li>

					
				</ul>
			</div>
		</div>
	</nav>
</header>

<section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Medical Facilities</span>
          <h1 class="text-capitalize mb-5 text-lg">Which we Provide</h1>

          
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section service-2">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="service-block mb-5">
					<img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""class="img2" />
					<div class="content">
						<h4 class="mt-4 mb-2 title-color"><a href="hospitals">Hospitals</a></h4>
						<p class="mb-4">We provide the medical services from specialized hospitals.</p>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="service-block mb-5">
					<img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="img2"/>
					<div class="content">
						<h4 class="mt-4 mb-2  title-color"><a href="doctors">Doctors</a></h4>
						<p class="mb-4">Directly book appointments with the available doctors.</p>
					</div>
				</div>
			</div>
			
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="service-block mb-5">
					<img src="https://images.unsplash.com/photo-1631941618536-2979d565b726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVzdGluZyUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="img2"/>
					<div class="content">
						<h4 class="mt-4 mb-2 title-color"><a href="diag">Diagnostics</a></h4>
						<p class="mb-4">Book appointments for tests and sample collections</p>
					</div>
				</div>
			</div>


			

			
			
		</div>
	</div>
</section>

<footer class="footer section gray-bg">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 mr-auto col-sm-6">
				<div class="widget mb-5 mb-lg-0">
					<div class="logo mb-4">
						<img src="images/logo.png" alt="" class="img-fluid"/>
					</div>
					<h2>Heath care for health living</h2>

				
				</div>
			</div>

			

			<div class="col-lg-2 col-md-6 col-sm-6">
				<div class="widget mb-5 mb-lg-0">
					<h4 class="text-capitalize mb-3">Support</h4>
					<div class="divider mb-4"></div>

					<ul class="list-unstyled footer-menu lh-35">
						<li><a href="#!">Terms & Conditions</a></li>
						<li><a href="#!">Privacy Policy</a></li>
						<li><a href="#!">Company Support </a></li>
						<li><a href="#!">FAQuestions</a></li>
						<li><a href="#!">Company Licence</a></li>
					</ul>
				</div>
			</div>

			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="widget widget-contact mb-5 mb-lg-0">
					<h4 class="text-capitalize mb-3">Get in Touch</h4>
					<div class="divider mb-4"></div>

					<div class="footer-contact-block mb-4">
						<div class="icon d-flex align-items-center">
							<i class="icofont-email mr-3"></i>
							<span class="h6 mb-0">Support Available for 24/7</span>
						</div>
						<h4 class="mt-2"><a href="mailto:support@email.com">Support@email.com</a></h4>
					</div>

				
				</div>
			</div>
		</div>

	</div>
</footer>
   

   

  </body>
    );
}
export default Service;