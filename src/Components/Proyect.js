import React, { Component } from 'react';

import { Header,Segment,Dimmer,Loader } from 'semantic-ui-react';


class Proyect extends Component {

  constructor(props){
      super(props);
      this.state = {
        proy : null,
        commits : null
      }
  }

  componentDidMount(){
    let r =fetch("https://api.github.com/repos/alcado94/"+this.props.match.params.repoName)
      .then(response => response.json())
      .then(data => {
        this.setState({
          proy: data
        });
      });
    
    /*fetch("https://api.github.com/repos/alcado94/"+this.props.match.params.repoName +"/commits")
      .then(response => response.json())
      .then(data => {
        this.setState({
          commits: data
        });
      });*/
  }

  render() {
    console.log(this.state.commits);
    console.log(this.state.proy);
    return (
      <div>
        <Segment raised>
        { this.state.proy ? 
          <Header>
             {this.state.proy.full_name }
             {this.state.proy.commit }
          </Header>
          : <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>}
        </Segment>
        
      </div>
    );
  }
}

export default Proyect;
