import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/App.module.css';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div>
        <button className={css.margin} onClick={() => onLeaveFeedback('good')}>
          Good
        </button>
        <button
          className={css.margin}
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
