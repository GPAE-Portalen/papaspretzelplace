import React, { useState, useEffect, Fragment } from 'react';
import { IContactEmailAddress } from '../../interfaces';

export interface IAddressProps {
    className?: string;
}

export const Address = (props: IAddressProps): JSX.Element => {
    const [contactEmailAddress, setContactEmailAddress] = useState<IContactEmailAddress>();

    useEffect(() => {
        if(!contactEmailAddress) {
            const data: IContactEmailAddress = window.repository.getContactEmailAddress();
            setContactEmailAddress(data);
        }
    }, [contactEmailAddress]);

    const address: string = '302 Mill Street, Bristol, PA 19007';
    const addressUrl: string = encodeURI(address);

    return (
        <address className={props.className}>
            <a href={`https://maps.google.com/maps?hl=en&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer" className="d-inline-block my-1">
                <i className="bi bi-geo-alt"></i>&nbsp;{address}
            </a>

            <br />

            {
                contactEmailAddress &&
                <Fragment>
                    <a href="mailto:papaspretzelplace@gmail.com" className="d-inline-block my-1">
                        <i className="bi bi-envelope"></i>
                        <span>&nbsp;{contactEmailAddress.email}</span>
                    </a>

                     <br />
                </Fragment>
            }

            <a href="tel:+1 267-554-7947" className="d-inline-block my-1">
                <i className="bi bi-telephone"></i>
                <span>&nbsp;+1 267-554-7947</span>
            </a>
        </address>
    );
}