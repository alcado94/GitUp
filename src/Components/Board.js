import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { List,Segment,Loader,Dimmer } from 'semantic-ui-react';


class Board extends Component {

  constructor(){
    super();
    this.state = {
      repositories : null
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users/alcado94/repos")
      .then(response => response.json())
      .then(data => {
        this.setState({
          repositories: data
        });
      });
  }

  render() {
    return (
      <Segment raised >
        {this.state.repositories ? this.state.repositories.map((proyect) =>
          <List divided relaxed key={proyect.id}>
            <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  <Link to={`/board/${proyect.name}`}>
                    <List.Header>{proyect.name}</List.Header>
                  </Link>
                  <List.Description>Updated 10 mins ago</List.Description>
                </List.Content>
            </List.Item>
          </List>  
        ) : <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>}
      </Segment>
    );
  }
}

export default Board;
