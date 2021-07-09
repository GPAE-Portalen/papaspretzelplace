export interface IGoogleMapsLinkProps {
    className?: string;
}

export const GoogleMapsLink = (props: IGoogleMapsLinkProps): JSX.Element => {
    const address: string = '302 Mill Street, Bristol, PA 19007';
    //const addressClean: string = address.replaceAll(',', '');
    const addressUrl: string = encodeURI(address);

    return (
        <address className={props.className}>
            <a href={`https://maps.google.com/maps?hl=sv&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer">
                <i className="bi bi-geo-alt"></i>&nbsp;{address}
            </a>

            <a href="mailto:papaspretzelplace@gmail.com" className="d-block">
                <i className="bi bi-envelope"></i>
                <span>&nbsp;papaspretzelplace@gmail.com</span>
            </a>

            <a href="tel:+1 267-554-7947" className="d-block">
                <i className="bi bi-telephone"></i>
                <span>&nbsp;+1 267-554-7947</span>
            </a>
        </address>
    );
}