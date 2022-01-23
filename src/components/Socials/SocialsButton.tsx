import React, { useContext } from 'react';
import { DataContext, IDataContext } from '../../App';

export interface ISocialsButton {
    className?: string;
    style?: React.CSSProperties;
}

export const SocialsButton = (props: ISocialsButton): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { facebook, instagram } = data.baseInformation.socialMedia;

    const standardClassName: string = "row mx-auto";
    const className: string = props.className ? `${standardClassName} ${props.className}` : standardClassName;

    const standardStyle: React.CSSProperties = { maxWidth: '500px' };
    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <div className={className} style={style}>
            {
                instagram &&
                <div className="col px-1">
                    <a href={instagram} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary fw-bold bg-ig text-wrap w-100">
                        <i className="bi bi-instagram"></i>
                        <span>&nbsp;Instagram</span>
                    </a>
                </div>
            }

            {
                facebook &&
                <div className="col px-1">
                    <a href={facebook} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary bg-gradient ms-2 fw-bold text-wrap w-100">
                        <i className="bi bi-facebook"></i>
                        <span>&nbsp;Facebook</span>
                    </a>
                </div>
            }
        </div>
    );
}