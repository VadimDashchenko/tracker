import PropTypes from 'prop-types';

const tracker = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    time: PropTypes.string
});

export default tracker;