import React from "react";
import './style.css';

function BookApp() {
    return (
        <body>
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
    <section class="section appoinment">
       <div class="container">
           <div class="row align-items-center">
               <div class="col-lg-6 ">
                   <div class="appoinment-content">
                       <img src="https://tse4.mm.bing.net/th?id=OIP.3JZ2Ey5a7xEKrpzu2BSQaAHaE8&pid=Api&P=0&w=277&h=184" alt="" class="img-fluid"/>
                       
                   </div>
               </div>
               <div class="col-lg-6 col-md-10 ">
                   <div class="appoinment-wrap mt-5 mt-lg-0">
                       <h2 class="mb-2 title-color">Book appoinment</h2>
                       <p class="mb-4">Give your details to book an appointment</p>
                            <form id="#" class="appoinment-form" method="post" action="#">
                       <div class="row">
                            <div class="col-lg-6">
                               <div class="form-group">
                                   
                               </div>
                           </div>
                           <div class="col-lg-6">
                               <div class="form-group">
                                   
                               </div>
                           </div>
   
                            <div class="col-lg-6">
                               <div class="form-group">
                                   <input name="date" id="date" type="text" class="form-control" placeholder="dd/mm/yyyy"/>
                               </div>
                           </div>
   
                           <div class="col-lg-6">
                               <div class="form-group">
                                   <input name="time" id="time" type="text" class="form-control" placeholder="Time"/>
                               </div>
                           </div>
                            <div class="col-lg-6">
                               <div class="form-group">
                                   <input name="name" id="name" type="text" class="form-control" placeholder="Full Name"/>
                               </div>
                           </div>
   
                           <div class="col-lg-6">
                               <div class="form-group">
                                   <input name="phone" id="phone" type="Number" class="form-control" placeholder="Phone Number"/>
                               </div>
                           </div>
                       </div>
                       <div class="form-group-2 mb-4">
                           <textarea name="message" id="message" class="form-control" rows="6" placeholder="Your Problem"></textarea>
                       </div>
   
                       <a  class="btn btn-main btn-round-full" href="success" >Make Appoinment <i class="icofont-simple-right ml-2  "></i></a>
                   </form>
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
export default BookApp;