import React, { Component, PropTypes } from 'react';
import { connector } from '../store/store';
import Color from '../components';

const { func, object, arrayOf } = PropTypes;

class ColorsContainer extends Component {
  static defualtComponent() {
    return <div><h1>No Colors</h1></div>;
  }

  static primaryComponent(colors) {
    return colors.map((color, index) => <Color color={color} key={String(index)} />);
  }

  componentDidMount() {
    this.props.fetchColorsAction();
  }

  render() {
    const { colors } = this.props;
    const defaultComponent = ColorsContainer.defualtComponent();
    const primaeryComponent = ColorsContainer.primaryComponent(colors);

    return (
      <div>
        {!colors ? defaultComponent : primaeryComponent}
      </div>
    );
  }
}

ColorsContainer.defaultProps = {
  colors: [{}],
};

ColorsContainer.propTypes = {
  fetchColorsAction: func.isRequired,
  colors: arrayOf(object)
};

export default connector(ColorsContainer);
