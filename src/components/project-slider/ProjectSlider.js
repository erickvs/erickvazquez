import React from 'react'
import Slider from 'react-slick'
import './ProjectSlider.css'
import FontAwesome from 'react-fontawesome'

function NextArrow(props) {
	return(<div id='next-arrow'></div>)
}

function PreviousArrow(props) {
	return(<div id='previous-arrow'></div>)
}

function Slide(props) {
	return(
		<div className="slide">
			<div className="project-circle">
				<FontAwesome name={props.icon} size='5x' />
			</div>
			<h2 className='project-name'>
				{props.children}
			</h2>
		</div>
	)
}


class ProjectSlider extends React.Component {
	render() {
		const settings = {
			// nextArrow: <NextArrow />,
			// prevArrow: <PreviousArrow />,
			centerMode: false,
			autoplay: true,
			className: 'col-md-10 col-md-offset-1 slider',
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [ { breakpoint: 768, settings: { slidesToShow: 1 } }, 
										{ breakpoint: 991, settings: { slidesToShow: 3 } },
										{ breakpoint: 100000, settings: { slidesToShow: 4 } } 
										 ]
		}
		return (
			<div id='project-slider'>
				<div className="container">
					
					<Slider {...settings}>
		        <div><Slide icon='rocket'>Project 1</Slide></div>
		        <div><Slide icon='book'>Project 2</Slide></div>
		        <div><Slide icon='bell'>Project 3</Slide></div>
		        <div><Slide icon='bluetooth'>Project 4</Slide></div>
		        <div><Slide icon='home'>Project 5</Slide></div>
		        <div><Slide icon='bicycle'>Project 6</Slide></div>
					</Slider>
					
				</div>
			</div>
		)
	}
}

export default ProjectSlider