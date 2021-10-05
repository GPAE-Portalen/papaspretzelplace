import React, { useContext } from 'react';
import { DataContext, IDataContext } from '../../App';

export const SocialsCircleButton = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { facebook, instagram } = data.baseInformation.socialMedia;

    return (
        <div className="d-flex">
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