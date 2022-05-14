import React from "react";
import './style.css';

function Doctors() {
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
             <span class="text-white">All Doctors</span>
             <h1 class="text-capitalize mb-5 text-lg">Specalized doctors</h1>
   

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
                       <h2>Doctors</h2>
                       <div class="divider mx-auto my-4"></div>
                       <p>We provide a wide range of the best doctors available in different specializations.below contains the list of doctors. </p>
                   </div>
               </div>
           </div>
   
         <h1>Cardiologist</h1>
   
       <div class="row shuffle-wrapper portfolio-gallery">
             <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
                 <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                      <div class="doctor-img">
                              <img src="https://i.pinimg.com/236x/e8/10/41/e810413a5480597cc6199b0f4f6522f4.jpg" alt="doctor-image" class="img1"/>
                              
                      </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Thomas Henry</a></h4>
    
                       <p>Available at Fortis Hospital from Mon-Fri, 11 AM to 4 PM</p>
                   </div> 
                 </div>
             </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat2&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://media.istockphoto.com/photos/beautiful-female-doctor-with-clipboard-and-hand-in-pocket-picture-id623760942?k=20&m=623760942&s=170667a&w=0&h=pd9ecI5UDtf63fBKxTqgKEiQgx76OOVGN_b6lfYUrck=" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Harrision Samuel</a></h4>
                       <p>Available at Varun Cardiac sciences from Mon-Sat, 9AM to 4PM</p>
                   </div> 
                 </div>
         </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://thumbs.dreamstime.com/b/young-doctor-16088825.jpg" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Alexandar James</a></h4>
                       <p>Available at Chaitanya cardiac center from Mon-Thu, 10AM to 3PM, Praveen cardiac center on Fri, Sat</p>
                   </div> 
                 </div>
         </div>
   
         
   <h1>Dentists</h1>
             <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat5&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://media.istockphoto.com/photos/pretty-young-doctor-with-clipboard-picture-id168351014?k=20&m=168351014&s=612x612&w=0&h=kPMXuuBRBLqWOf2fE_GJlqJH2KZK_1aHthEgfdwkK98=" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Himana</a></h4>
                       <p>Available at Shikara Hospital from Mon-Fro, 10AM to 4PM</p>
                   </div> 
                 </div>
             </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat6&quot;]">
                   <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7u4co18RnnhBWN8E5X7523XwQmjeb-TKUy1qBrB5a9Isc2fp66FcNqYr8pVPv6EhMsM&usqp=CAU" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Henry samuel</a></h4>
                       <p>Available at Manipal Hospital from Mon-Sat, 9AM to 12PM, AIIMS Hospital on Mon-Sat from 2PM to 5PM</p>
                   </div> 
                 </div>
         </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat4&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://st3.depositphotos.com/3332767/18324/i/600/depositphotos_183246398-stock-photo-full-length-portrait-doctor-clipboard.jpg" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Thomas alexandar</a></h4>
                       <p>Available at AIIMS from Mon-Sat, 10AM to 3PM</p>
                   </div> 
               </div>
         </div>
   
         <h1>Neurologists</h1>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item illustration" data-groups="[&quot;cat2&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="data:image/jpeg;base64,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" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Natasha</a></h4>
                       <p>Available at AnilNeuro Care from Mon-Sat, 10AM to 5PM, NeuroLife Hospital on Fri, Sat</p>
                   </div> 
                 </div>
           </div>
   
            <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat5&quot;,&quot;cat6&quot;,&quot;cat1&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3BxsD8gTFhqWnMsggjyQr8BG65ZX4jaBHmYrjQZMjMgI8AGIMlFQLS11ChSdmSiRnAs&usqp=CAU" alt="doctor-image" class="img1"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a>Georgia</a></h4>
                       <p>Available at NeuroLife Hospital from Mon-Fri, 10AM to 4PM</p>
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
export default Doctors;