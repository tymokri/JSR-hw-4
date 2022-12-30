import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';

class Progress extends React.Component {
    render() {
        const {percentage} = this.props;

        const divAttrs = {
            className: 'progress-bar',
            role: 'progressbar',
            ariaValueNow: ''+ percentage +'',
            ariaValueMin: '0',
            ariaValueMax: '100',
            ariaLabel: 'progressbar',
            style: {
                width: percentage +'%'
            }
        };

        const progressClass = cn('progress');

        return (
            <div className={cn(progressClass)}>
                <div {...divAttrs}>
                    {percentage +"%"}
                </div>
            </div>
        );
    }
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress;