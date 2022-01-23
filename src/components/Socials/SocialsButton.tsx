import React, { useContext } from 'react';
import { DataContext, IDataContext } from '../../App';

export interface ISocialsButton {
    className?: string;
    style?: React.CSSProperties;
}

export const SocialsButton = (props: ISocialsButton): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { facebook, instagram } = data.baseInformation.socialMedia;

    const standardClassName: string = "row gx-1 mx-auto";
    const className: string = props.className ? `${standardClassName} ${props.className}` : standardClassName;

    const standardStyle: React.CSSProperties = { maxWidth: '500px' };
    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <div className={className} style={style}>
            {
                instagram &&
                <div className="col">
                    <a href={instagram} target="_blank" rel="noreferrer" className="btn btn-sm btn-light fw-bold bg-ig text-wrap w-100 border-0 text-nowrap text-white">
                        <i className="bi bi-instagram"></i>
                        <span>&nbsp;Instagram</span>
                    </a>
                </div>
            }

            {
                facebook &&
                <div className="col">
                    <a href={facebook} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary bg-gradient fw-bold text-wrap w-100 border-0 text-nowrap">
                        <i className="bi bi-facebook"></i>
                        <span>&nbsp;Facebook</span>
                    </a>
                </div>
            }
        </div>
    );
}