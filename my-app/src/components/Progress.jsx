import React from "react";
import cn from 'classnames';

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

        const progressClass = cn(
            {
                'progress': true,
            }
        );

        return (
            <div className={cn(progressClass)}>
                <div className={divAttrs.className} role={divAttrs.role} aria-valuenow={divAttrs.ariaValueNow}
                     aria-valuemin={divAttrs.ariaValueMin} aria-valuemax={divAttrs.ariaValueMax}
                     aria-label={divAttrs.ariaLabel} style={divAttrs.style}>
                    {percentage +"%"}
                </div>
            </div>
        )
    }
}

export default Progress;