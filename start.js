class Card extends React.Component {
    render () {
      return (
      <div className= "github-profile">
          one git hub profile
          </div>
      );
    }
  }
  
  class App extends React.Component {
    
    render () {
       return (
       <div>
           <div className="header">{this.props.title}</div>
           <Card />
         </div>
       )
    }
  }
  
  
  ReactDOM.render(
      <App title="The GitHub Cards App" />,
    mountNode,
  );