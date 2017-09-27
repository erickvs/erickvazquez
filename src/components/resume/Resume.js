import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './Resume.css'

const downloadResumeBtn = (
	<Button href="/resume.pdf" className='download-btn'>
		<h2>Download copy</h2>
		<FontAwesome 
					className='download-color'
					name='download' 
					size='lg'
					/>
	</Button>
	)


function Resume(props) {
	return (
		<div className='resume-header'>
			<div className="container">
				<h1>Erick Vazquez Santillan</h1>
				<h4>
					erick.vs@icloud.com • Santa Clara CA 95050 • www.erickvazquez.com
				</h4>
				<div id='download-button-container'>
					{ downloadResumeBtn }
				</div>
				<h2>
					Targeting a position as a full-time software engineer.
				</h2>
				<h3>Summary of Qualifications</h3>
				<ul>
					<li>
						Skilled at designing and implementing client side single page 
						applications with HTML5, CSS3, JavaScript (ES6), Bootstrap, React 
						and Redux.
					</li>
					<li>
						Experience creating social web applications with full authentication 
						and authorization systems along with administrator privileges using 
						Ruby on Rails.
					</li>
					<li>
						Proficient in Java and Python.
					</li>
					<li>
						Working knowledge of REST architecture, Object Oriented Design, 
						Test Driven Development and version control.
					</li>
					<li>
						Practical experience building machine learning apps using Spark and 
						Python.
					</li>
					<li>
						Practical experience designing and implementing normalized SQL 
						database schemas.
					</li>
					<li>
						Competency using Adobe Illustrator and Photoshop to design SVG UI 
						elements for web applications.
					</li>
				</ul>
				<h3>Education</h3>
				<ul>
					<li>BS in Computer Science, May 2017.</li>
					<li>San Jose State University, San Jose, CA.</li>
				</ul>
				<h3>Relevant Coursework</h3>
				<p>Software Engineering, Object-Oriented Design, Data Structures and Algorithms, Programming in Python, Relational Database Systems, Programing
				Paradigms, Artificial Intelligence.</p>
				<h3>Leadership/Accomplishments</h3>
				<ul>
					<li>
					Coordinated and taught a Python programming class to a local 
					church group of diverse age range. Students achieved basic 
					understanding of the Python programming language and learned about the 
					important role of technology in today’s industry.
					</li>
					<li>
						Honored as a Dean’s scholar by achieving a ≥3.65 GPA in at least 
						two contiguous semesters.
					</li>
				</ul>
				<h3>Languages and Frameworks</h3>
				<p>
					React(Intermediate), Redux(Intermediate), Python(proficient), Java(proficient), Hibernate(beginner), SQL(intermediate), Ruby(intermediate,
					JavaScript(Intermediate), Rails(intermediate), Bootstrap(intermediate).
				</p>
				<h3>Projects</h3>
				<p><span>Face Detector - Face classification using support vector machines with stochastic gradient descent.</span></p>
				<p>
					Collaborated in a team of two to train a model using Apache Spark, Python, Numpy in a AWS M3.Large instance with images of faces found in the
					web and then used the model to create a face detecting app. The program takes a 15 second video, brakes the video into individual frames and then
					process each frame using the model to see if a face is detected in the frame, if so it draws a green square around the frame, else it draws a red
					square, the frames are then stitched together into a gif which is displayed in a web browser. We earned an A in the project and our professor was
					very impressed so he chose it as one of the top 5 best projects in class. The slides of the presentation along with an example of the output gif image
					can be seen in the project google <a href="https://goo.gl/3ghWmz">slides</a>. 
				</p>
				<h3>Work Experience</h3>
				<p><span>Ruby on Rails full stack developer, SJSU Research Foundation, March 2017 - July 2017</span></p>
				<p>
				Designed and implemented a web application using Ruby on Rails that allows users to store information in a PostgreSQL database that can be
				later retrieved using tags or the title of the resource. The web application has a full authentication and authorization system implemented from
				scratch using sessions, a friendly admin dashboard that controls who can sign up to the application, email confirmation using Send grid and
				several other features.
				</p>
				<p>
					<span>Software Developer, Fastr Auto Service, August 2017 – Current.</span>
				</p>
				<ul>
					<li>Designed and developed business website using HTML5, CSS3, Bootstrap and React with Redux deployed using Git to Heroku.</li>
					<li>Implemented a feature that allows the change of the language (English « Spanish) with the click of a button.</li>
					<li><a href="http://www.fastrauto.com">FASTR AUTO</a></li>
				</ul>
				<p>
					<span>Software Developer, Raising Brows, August 2016</span>
				</p>
				<ul>
					<li>Designed and developed business website using HTML5, CSS3, Bootstrap and Ruby on Rails deployed using Git to Heroku.</li>
					<li>Used Instagram API to connect the owners top 9 pictures into a gallery in the business website.</li>
					<li><a href="http://www.raising-brows.com">Raising Brows</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Resume