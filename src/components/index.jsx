import React from "react";
import './style.css';
function Index() {
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
					<li class="nav-item active"><a class="nav-link" href="home" >Home</a></li>
					<li class="nav-item"><a class="nav-link" href="about">About</a></li>
					<li class="nav-item"><a class="nav-link" href="service">Medical Facilities</a></li>
                    
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
   
   <section class="banner">
       <div class="container">
           <div class="row">
               <div class="col-lg-6 col-md-12 col-xl-7">
                   <div class="block">
                       <div class="divider mb-3"></div>
                       <span class="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                       <h1 class="mb-3 mt-3">Your most trusted health partner</h1>
                       
                       <div class="btn-container ">
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <section class="features">
       <div class="container">
           <div class="row">
               <div class="col-lg-12">
                   <div class="feature-block d-lg-flex">
                       <div class="feature-item mb-5 mb-lg-0">
                           <div class="feature-icon mb-4">
                               <i class="icofont-surgeon-alt"></i>
                           </div>
                           <span>24 Hours Service</span>
                           <h4 class="mb-3">Online Appoinment</h4>
                           <p class="mb-4">Get All time support for emergency.We have introduced the principle of family medicine.</p>
                       </div>
                   
                       <div class="feature-item mb-5 mb-lg-0">
                           <div class="feature-icon mb-4">
                               <i class="icofont-ui-clock"></i>
                           </div>
                           <span>Timing schedule</span>
                           <h4 class="mb-3">Working Hours</h4>
                           <ul class="w-hours list-unstyled">
                               <li class="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                               <li class="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                               <li class="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
                           </ul>
                       </div>
                   
                       <div class="feature-item mb-5 mb-lg-0">
                           <div class="feature-icon mb-4">
                               <i class="icofont-support"></i>
                           </div>
                           <h3>Emegency Cases</h3>
                           
                           <p>Get All time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   
   
   
   
   <section class="section service gray-bg">
       <div class="container">
           
           <div class="row">
               <div class="col-lg-4 col-md-6 col-sm-6">
                   <div class="service-item mb-4">
                       <div class="icon d-flex align-items-center">
                           <i class="icofont-laboratory text-lg"></i>
                           <h4 class="mt-3 mb-3">Hospital Services</h4>
                       </div>
   
                       <div class="content">
                           
                       </div>
                   </div>
               </div>
   
               <div class="col-lg-4 col-md-6 col-sm-6">
                   <div class="service-item mb-4">
                       <div class="icon d-flex align-items-center">
                           <i class="icofont-heart-beat-alt text-lg"></i>
                           <h4 class="mt-3 mb-3">Doctor Appointments</h4>
                       </div>
                       <div class="content">
                           
                       </div>
                   </div>
               </div>
               
               <div class="col-lg-4 col-md-6 col-sm-6">
                   <div class="service-item mb-4">
                       <div class="icon d-flex align-items-center">
                           <i class="icofont-tooth text-lg"></i>
                           <h4 class="mt-3 mb-3">Diagnostic Services</h4>
                       </div>
                       <div class="content">
                           
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
      
   
       
       <script src="plugins/jquery/jquery.js"></script>
       <script src="plugins/bootstrap/bootstrap.min.js"></script>
       <script src="plugins/slick-carousel/slick/slick.min.js"></script>
       <script src="plugins/shuffle/shuffle.min.js"></script>
       <script src="js/script.js"></script>
   
     </body>

    );
}

export default Index;