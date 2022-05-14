import React from "react";
import './style.css';

function Hospitals() {
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
             <h1 class="text-capitalize mb-5 text-lg">Multi Speciality Hospitals</h1>
   

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
                       <h2>Hospitals</h2>
                       <div class="divider mx-auto my-4"></div>
                       <p>You can view the hospitals in your location.</p>
                   </div>
               </div>
               
                  
           </div>
   
         <h1>Cardiology</h1>
   
       <div class="row shuffle-wrapper portfolio-gallery">
             <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
                 <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                      <div class="doctor-img">
                              <img src="data:image/jpeg;base64,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" alt="doctor-image" class="img-fluid w-100"/>
                      </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Chaitanya Cardiac Center</a></h4>
                      
                   </div> 
                 </div>
             </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat2&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMDI5MjUwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="doctor-image" class="img-fluid w-100"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Praveen Cardiatic Center</a></h4>
                       
                   </div> 
                 </div>
         </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89LwXDAvxBRL3tAqw336Yuum9F-0gEMmBLQ&usqp=CAU" alt="doctor-image" class="img-fluid w-100"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Varun Cardiactic Sciences</a></h4>
                       
                   </div> 
                 </div>
         </div>
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAr3gZ-m2SABESZLmC8DVX5me0RzOMALn-7A&usqp=CAU" alt="doctor-image" class="img-fluid w-100"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Manipal Hospital</a></h4>
                       
                   </div> 
                 </div>
         </div>
   
       </div>
       <h1>Neurology</h1>
   
       <div class="row shuffle-wrapper portfolio-gallery">
             <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
                 <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                      <div class="doctor-img">
                              <img src="data:image/jpeg;base64,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" alt="doctor-image" class="img-fluid w-100"/>
                      </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Neuro Life Hospital</a></h4>
                      
                   </div> 
                 </div>
             </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat2&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwp8qeOS_awJ_TGTjdaAQpVmsm7q4Xj76kDg&usqp=CAU" alt="doctor-image" class="img-fluid w-100"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Fortis Neuro Center</a></h4>
                       
                   </div> 
                 </div>
         </div>
   
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar-LghpgNkIfan3FmG-_FjgVZXDryXsdY6A&usqp=CAU" alt="doctor-image" class="img-fluid w-100"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">AIIMS</a></h4>
                       
                   </div> 
                 </div>
         </div>
         <div class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
               <div class="position-relative doctor-inner-box">
                   <div class="doctor-profile">
                       <div class="doctor-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVsmeF3evNuDkteKdVgdpYdFvrEum7ZaelQ&usqp=CAU" alt="doctor-image" class="img-fluid w-100"/>
                       </div>
                   </div>
                   <div class="content mt-3">
                       <h4 class="mb-0"><a href="bookapp">Anil Neuro Care</a></h4>
                       
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
export default Hospitals;