import React from 'react';
import './NewsCard.css';
import {Card} from 'react-bootstrap';
class NewsCard extends React.Component {
  render(){
    return <div class = "NewsCard">
      <Card>
      <Card.Header>{this.props.header}</Card.Header>
      <Card.Img variant="top" src={this.props.image}/>
      <Card.Body>
        <Card.Title>
          {this.props.title}
        </Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  }
}

export default NewsCard;
