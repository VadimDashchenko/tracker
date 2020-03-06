import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({title}) => (
    <span className="title">{title}</span>
);

Title.propTypes = {
    title: PropTypes.string
};

export default Title;