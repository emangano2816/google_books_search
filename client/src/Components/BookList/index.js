import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the google book api call
export function BookListItem({
  thumbnail,
  title,
  description,
  authors,
  link,
  index,
  onclick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-7 sm-8">
            <h3>{title}</h3>
            <p>Authors: {authors} </p>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
          </Col>
          <Col size="xs-1 sm-1">
            <Button
              id={index}
              onClick={onclick}
              type="success"
              className="input-lg">
              Save Book
            </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
