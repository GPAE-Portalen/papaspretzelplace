import React, { useContext } from 'react';
import { DataContext, IDataContext } from '../../App';

export const SocialsButton = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { facebook, instagram } = data.baseInformation.socials;

    return (
        <div className="row mx-auto mb-3" style={{ maxWidth: '500px' }}>
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