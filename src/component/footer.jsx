
export default function Footer () {
    return (
        <>
        
            <footer className="py-5">
        <div className="row">
            <div className="col-6 col-md-2 mb-3">
            <h5>PRODUCTC</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
            <h5>USEFUL LINK</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">HomePro</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Feel</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Porm</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">DAQ</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kungfu</a></li>
            </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
            <h5>COTANCT</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">roblox</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">phuri</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Jususweb</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Q&amp;A</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">DARK</a></li>
            </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
            <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Receive teachings from your prophet.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
            </form>
            </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>©2023 Jusus Corporation. christianity, the JUSUS logo and Powering Imagination are among our registered and unregistered trademarks in the E.U. and other countries.</p>
            <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="https://twitter.com/jesus"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/explore/tags/jesus/?hl=en"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="https://www.facebook.com/dalemegustasiamasajesus"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
            </ul>
        </div>
        </footer>

        
        
       
       
        </>
     );
    }