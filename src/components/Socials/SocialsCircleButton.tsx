import React, { useContext } from 'react';
import { DataContext, IDataContext } from '../../App';

export interface ISocialsCircleButton {
    className?: string;
    style?: React.CSSProperties;
}

export const SocialsCircleButton = (props: ISocialsCircleButton): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { facebook, instagram } = data.baseInformation.socialMedia;

    const standardClassName: string = "d-flex";
    const className: string = props.className ? `${standardClassName} ${props.className}` : standardClassName;

    const standardStyle: React.CSSProperties = { };
    const style: React.CSSProperties = Object.assign(standardStyle, props.style);

    return (
        <div className={className} style={style}>
            {
                instagram &&
                <a  href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary bg-ig rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram">
                    <i className="bi bi-instagram"></i>
                    <span className="d-none">Instagram</span>
                </a>
            }
    
            {
                facebook &&
                    <a  href={facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary bg-gradient ms-2 rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Facebook">
                            <i className="bi bi-facebook"></i>
                            <span className="d-none">Facebook</span>
                    </a> 
            }
        </div>
    );
}