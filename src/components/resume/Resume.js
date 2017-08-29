import React from 'react'

function Resume(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div style={{height: '500px',backgroundImage: `url('http://erickvazquez.com/resume.svg')`}}>
						
					</div>
					<iframe src="http://docs.google.com/gview?url=http://www.erickvazquez.com/resume.pdf&embedded=true" 
					style={{width:'500px', height:'500px'}} title='ericksresume' frameborder="0"></iframe>
				</div>
			</div>
		</div>
		
	)
}

export default Resume