import React from "react";
import './style.css';

function Diagnostics() {
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
					<li class="nav-item"><a class="nav-link" href="service">Services</a></li>

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
             <h1 class="text-capitalize mb-5 text-lg">Diagnostic Centers</h1>
   

           </div>
         </div>
       </div>
     </div>
   </section>
   
   
   
   <section class="section doctors">
     <div class="container">
           <div class="row justify-content-center">
                <div class="col-lg-6 text-center">
                   <div class="section-title">
                       <h2>Diagnostic Centers</h2>
                       <div class="divider mx-auto my-4"></div>
                       <p>You can view the testing centers in your location.</p>
                   </div>
               </div>
           </div>
   
         
       <div class="row shuffle-wrapper portfolio-gallery">
             <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
                 <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                      <div class="doctor-img">
                              <img src="data:image/jpeg;base64,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" alt="doctor-image" class="img2"/>
                      </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Vijaya Diagnostic Center</a></h4>
                      <p>Mon - Sun 7 AM to 9 PM</p>
                   </div> 
                 </div>
             </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat2&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="data:image/jpeg;base64,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" alt="doctor-image" class="img2"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Apollo Diagnostics</a></h4>
                       <p>Available 24/7</p>
                   </div> 
                 </div>
         </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://tse2.mm.bing.net/th?id=OIP.dLkw70duUO6J00_Qu11AYQHaFj&pid=Api&P=0&w=258&h=194" alt="doctor-image" class="img2"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Pramodini Imaging Center</a></h4>
                       <p>Mon - Sat 7 AM - 5 PM</p>
                   </div> 
                 </div>
         </div>
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="data:image/jpeg;base64,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" alt="doctor-image" class="img2"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Accu Health Diagnostics</a></h4>
                       <p>Mon - Sat 7 AM - 9 PM</p>
                       
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
export default Diagnostics;