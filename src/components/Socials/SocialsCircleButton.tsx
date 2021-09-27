export const SocialsCircleButton = (): JSX.Element => (
    <div className="d-flex">
        <a href="https://www.instagram.com/papaspretzelplace/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary bg-ig rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Instagram">
            <i className="bi bi-instagram"></i>
            <span className="d-none">Instagram</span>
        </a>

        <a href="https://www.facebook.com/papaspretzelplace/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary bg-gradient ms-2 rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Facebook">
            <i className="bi bi-facebook"></i>
            <span className="d-none">Facebook</span>
        </a>
    </div>
);