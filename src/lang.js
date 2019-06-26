import React, { Component } from 'react';

class Language extends Component {
  state = { language: 'React'}

  shouldComponentUpdate(nextProps, nextState) {
    // debugger
    if (this.state.language === nextState.language) {
      return false
    } else {
      return true
    }
  }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({language: 'Vue'})
  //   }, 2000)
  // }

  componentDidMount(){
    this.inteval = setInterval(()=>{
         // console.log(this.interval)
      //call 3rd party to fectch data
    })
  }

  componentWillUnmount() {
    clearInterval(this.inteval)
  }

  changeLang = (e) => {
    e.preventDefault();
    this.setState({language: 'Vue'})
  }

  render() {
    // console.log("rendering component")
    return (
      <div>
        <br /><hr />
        <br /><hr />
        {this.state.language}
        <button onClick={this.changeLang}>Change Language</button>
      </div>
    );
  }
}

export default Language;
