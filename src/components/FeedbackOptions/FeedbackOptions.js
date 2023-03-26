import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
        <div>
            {options.map((item, idx) => (
                <button
                    key={idx}
                    type="button"
                    name={item}
                    onClick={onLeaveFeedback}
                    className={css.btn}
                >
                    {item[0].toUpperCase() + item.slice(1)}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
