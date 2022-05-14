import React from "react";
import './style.css';
function About() {
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
					<li class="nav-item active"><a class="nav-link" href="about">About</a></li>
					<li class="nav-item"><a class="nav-link" href="service">MedicalFacilities</a></li>

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
          <span class="text-white">About Us</span>
          <h1 class="text-capitalize mb-5 text-lg">About Us</h1>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section about-page">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<h2 class="title-color">Personal Health care for your healthy living</h2>
			</div>
			<div class="col-lg-8">
				<p>We provide the personal health care with qualified doctors and best hospitals around you with 24/7 support. you can even book the appointments for particular doctors or the hospitals.you can also view the different diagnostics available and book an appointment if you need any thing. </p>
				<img src="images/about/sign.png" alt="" class="img-fluid"/>
			</div>
		</div>
	</div>
</section>

<section class="fetaure-page ">
	<div class="container">
		<div class="row">
			<div class="col-lg-3 col-md-6">
				<div class="about-block-item">
					<img src="https://www.verywellfamily.com/thmb/lxgvIhKeTuXIdqoQP4S8TIYD65c=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/doctor-visit-570aaeb53df78c7d9edd0283.jpg" alt="" class="img-fluid w-100"/>
					<h4 class="mt-3">Healthcare for Kids</h4>
					<p>we take at most cre in providing the health care for the children . All the special care required for the childer will be provided.</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="about-block-item">
					<img src="https://m.economictimes.com/thumb/msid-69894218,width-1200,height-900,resizemode-4,imgsize-90877/untitled-14.jpg" alt="" class="img-fluid w-100"/>
					<h4 class="mt-3">Medical Counseling</h4>
					<p>The medical counselling for the students will also be available with good support so that it will be help ful for the patients.</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="about-block-item">
					<img src="https://previews.123rf.com/images/romanzaiets/romanzaiets2003/romanzaiets200305594/142508116-modern-equipment-in-operating-room-medical-devices-for-neurosurgery-.jpg" alt="" class="img-fluid w-100"/>
					<h4 class="mt-3">Modern Equipments</h4>
					<p>All the hospitals with the well equipped and modern technology will be provided.Cure for all the diseases will provided using these equipment</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="about-block-item">
					<img src="https://blog.ipleaders.in/wp-content/uploads/2018/02/BV-Acharya-3.jpg" alt="" class="img-fluid w-100"/>
					<h4 class="mt-3">Qualified Doctors</h4>
					<p>All qualified doctors in different specializations are provided where the patient will be able to book the appointment</p>
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

export default About;