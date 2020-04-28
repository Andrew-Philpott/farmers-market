import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import redux from "redux";

function ProduceList(props) {
  return (
    <React.Fragment>
      <Container>
        <h2>{props.month}</h2>
        {props.selection.map((item) => (
          <p>{item}</p>
        ))}
      </Container>
    </React.Fragment>
  );
}

ProduceList.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array,
};

export default ProduceList;
