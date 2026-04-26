function Credential(){
    return(
        <div className="credential-container">
            <h2 className="credential-title">Demo details</h2>
            <div className="credential-item">
                <h3 className="credential-content">Email: <p className="Credential-value">baranibtech4@gmail.com</p></h3>
            
            </div>
            <div className="credential-item">
                <h3 className="credential-content">Password: <p className="Credential-value">Barani@123</p></h3>
            
            </div>
            <p className="credential-footer">Use these credentials to sign in</p>
        </div>
    )
}
export default Credential;