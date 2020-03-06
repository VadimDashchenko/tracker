import React from 'react';
import play from '../../assets/icons/play.png';
import pause from '../../assets/icons/pause.png';
import remove from '../../assets/icons/remove.svg';
import PropTypes from 'prop-types';
import './styles.scss';

const TrackerItem = (props) => {
    const {name, time} = props;
    return (
        <div className="tracker active">
            <div className="tracker__info">
                <span className="tracker__info-name">tracker name</span>
                <span className="tracker__info-time">tracker time</span>
            </div>
            <div className="tracker__action">
                <img className="tracker__action-play icon" src={play} alt="start our tracker" />
                {/*<img className="tracker__action-pause icon" src={pause} alt="pause our tracker" />*/}
                <img className="tracker__action-delete icon" src={remove} alt="delete our tracker" />
            </div>
        </div>
    )
};

TrackerItem.propTypes = {};

export default TrackerItem;