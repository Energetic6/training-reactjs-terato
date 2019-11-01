import React from "react";
import PropTypes from "prop-types";

function Hello2(props) {
  return (
    <div>
      Hello {props.name}, age is {props.age}. Slug: {props.match.params.slug}
    </div>
  );
}

Hello2.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Hello2;
