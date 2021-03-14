export interface ILogoProps {
    alt: string;
    height?: string;
    width?: string;
    className?: string;
}

export const Logo = (props: ILogoProps): JSX.Element => (
    <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt={props.alt} height={props.height} width={props.width} className={props.className} />
);