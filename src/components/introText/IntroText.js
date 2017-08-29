import React from 'react'
import './IntroText.css'

class IntroText extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			descriptions: [ 'WEB DEVELOPER',
											'PHOTOGRAPHER',
											'SCIENTIST',
											'LOVES HORCHATA'],
			pause: 0,
			typingSpeed: 100,
			descriptionIndex: 0,
			letterIndex: 0,
			forwardTyping: true,
			leadText: '',
		}
	}

	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.state.typingSpeed
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
  	const descriptions = this.state.descriptions
  	const SHORT_PAUSE = 8
		const LONG_PAUSE = 25

 
		// Get the current description
		const word = descriptions[this.state.descriptionIndex]

		// If we need a pause
		if (this.state.pause > 0) {
				this.setState( (prevState) => {
					return { 
						pause: prevState.pause - 1 
					}
				})
			}
		
		// When we typed the whole word
		else if (this.state.letterIndex > word.length  && this.state.forwardTyping) {
			this.setState({
				forwardTyping: false, 
				pause: LONG_PAUSE
			})
		}

		// When we typed and deleted the whole word
		else if (this.state.letterIndex < 0  && !this.state.forwardTyping) {
			if (this.state.descriptionIndex < descriptions.length - 1) {
				this.setState((prevState) => {
					return { 	descriptionIndex: prevState.descriptionIndex + 1, 
										forwardTyping: true,
										pause: SHORT_PAUSE}
				})
			}
			else {
				this.setState({ 
					descriptionIndex: 0, 
					forwardTyping: true, 
					pause: SHORT_PAUSE
				})
			}
		}

		// If the letter index is less than (word.length - 1)
		else if (this.state.letterIndex <= word.length  && this.state.forwardTyping) {
				const result = word.substring(0, this.state.letterIndex)
				this.setState((prevState) => {
					return { 
						leadText: result, 
						letterIndex: prevState.letterIndex + 1
					} 
				})
		}
		
		else if (this.state.letterIndex >= 0  && !this.state.forwardTyping) {
				const result = word.substring(0, this.state.letterIndex)
				this.setState((prevState) => {
					return {
						leadText: result, 
						letterIndex: prevState.letterIndex - 1
					} 
				})
		}
  }

	render() {
		return(
			<div className="intial-text-heading-container">
				<h1 id='homeHeadingName'>ERICK VAZQUEZ</h1>
				<h2 id='leadText'>{this.state.leadText}<span>|</span></h2>
			</div>
		)
	}
}

export default IntroText