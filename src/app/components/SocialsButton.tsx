export const SocialsButton = (): JSX.Element => (
    <div className="row mx-auto mb-3" style={{ maxWidth: '500px' }}>
        <div className="col px-1">
            <a href="https://www.instagram.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary fw-bold bg-ig text-wrap w-100">
                <i className="bi bi-instagram"></i>
                <span>&nbsp;Instagram</span>
            </a>
        </div>

        <div className="col px-1">
            <a href="https://www.facebook.com/papaspretzelplace/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary bg-gradient ms-2 fw-bold text-wrap w-100">
                <i className="bi bi-facebook"></i>
                <span>&nbsp;Facebook</span>
            </a>
        </div>
    </div>
);