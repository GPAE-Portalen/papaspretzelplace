export interface IGoogleMapsLinkProps {
    className?: string;
}

export const GoogleMapsLink = (props: IGoogleMapsLinkProps): JSX.Element => {
    const address: string = '302 Mill Street, Bristol, PA 19007';
    const addressClean: string = address.replaceAll(',', '');
    const addressUrl: string = encodeURI(address);

    return (
        <address className={props.className}>
            <a href={`https://maps.google.com/maps?hl=sv&q=${addressUrl}&ie=UTF8&t=roadmap&z=10&iwloc=B`} target="_blank" rel="noreferrer">
                <i className="fas fa-map-marker-alt"></i>&nbsp;{addressClean}
            </a>
        </address>
    );
}