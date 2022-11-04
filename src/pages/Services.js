import React from 'react';
import './Services.css'
import grlogo from '../images/grlogo.png';


function Services() {
	const allIndicator = document.querySelectorAll('.indicator li');
	const allContent = document.querySelectorAll('.content li');

	allIndicator.forEach(item => {
		item.addEventListener('click', function (){
			const content = document.querySelector(this.dataset.target)

			allIndicator.forEach(i=> {
				i.classList.remove('active');
			})
			
			allContent.forEach(i=> {
				i.classList.remove('active');
			})
			
			content.classList.add('active');
			this.classList.add('active');
		})
	})
	return (
	<div class="container">
		<div className="Applogos">
          <img src={grlogo} className="App-logo-s" alt="" />
        </div>
		<div class="wrapper">
			<ul class="indicator">
				<li class="active" data-target="#creative"> Creative Branding</li>
				<li data-target="#media">Influencer Marketing</li>
				<li data-target="#strategy">Brand Strategy</li>
				<li data-target="#consulting">Consulting</li>
			</ul>
			<ul class="content">
				<li class="active" id="creative">
					<h1>Creative</h1>
					<p>A truly consumer-centric storytelling engine. We lean on the power of all our creative ideas, both client and agency to find “right” based on consumer.</p>
				</li>
				<li id="media">
					<h1>Media</h1>
					<p>A truly consumer-centric storytelling engine. We lean on the power of all our creative ideas, both client and agency to find “right” based on consumer.</p>
				</li>
				<li id="strategy">
					<h1>Strategy</h1>
					<p>A truly consumer-centric storytelling engine. We lean on the power of all our creative ideas, both client and agency to find “right” based on consumer.</p>
				</li>
				<li id="consulting">
					<h1>Consulting</h1>
					<p>A truly consumer-centric storytelling engine. We lean on the power of all our creative ideas, both client and agency to find “right” based on consumer.</p>
				</li>
			</ul>
			
		</div>
	</div>
	);

}

export default Services;
