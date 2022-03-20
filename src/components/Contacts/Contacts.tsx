import React, { useContext, Fragment } from 'react';
import { DataContext, IDataContext } from '../../App';

export const Contacts = (): JSX.Element => {
    const data: IDataContext = useContext(DataContext);
    const { contacts, address } = data.baseInformation;
    const fullAddress: string = `${address.street}, ${address.city}, ${address.state}`;
    const addressUrl: string = encodeURI(fullAddress);

    return (
        <address>
            <h2 className="h4">Contacts</h2>

            {
                address.street && address.city && address.state &&
                <Fragment>
                    <a href={`https://maps.google.com/maps?hl=en&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer" className="d-inline-block my-1">
                        <i className="bi bi-geo-alt"></i>&nbsp;{fullAddress}
                    </a>

                    <br />
                </Fragment>
            }

            {
                contacts.emailAddress &&
                <Fragment>
                    <a href={`mailto:${contacts.emailAddress}`} className="d-inline-block my-1">
                        <i className="bi bi-envelope"></i>
                        <span>&nbsp;{contacts.emailAddress}</span>
                    </a>

                    <br />
                </Fragment>
            }

            {
                contacts.phoneNumber &&
                <a href={`tel:${contacts.phoneNumber}`} className="d-inline-block my-1">
                    <i className="bi bi-telephone"></i>
                    <span>&nbsp;{contacts.phoneNumber}</span>
                </a>
            }
        </address>
    );
}