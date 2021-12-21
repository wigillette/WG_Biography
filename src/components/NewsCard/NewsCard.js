import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';
import {Card} from 'react-bootstrap';
import Dog1 from "../../shared/images/dog1.jpg";

class NewsCard extends React.Component {
  render(){
    return <div class = "NewsCard">
      <Card>
      <Card.Header>{this.props.header}</Card.Header>
      <Card.Img variant="top" src={Dog1}/>
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

NewsCard.propTypes = {};

NewsCard.defaultProps = {};

export default NewsCard;
