import React from 'react'
// import Link from 'next/link'

const Footer = () => (
 // create a simple footer with current year copywrite and link to nasa website with a small paragraph explaining that the app is a demo for a job interview at approach.app
    <footer className="footer">
        <div className="footer__links">
            {/* <Link href="https://www.nasa.gov/"> */}
                <a>NASA</a>
            {/* </Link> */}
            {/* <Link href="https://approachapp.com/"> */}
                <a>Approach</a>
            {/* </Link> */}
        </div>
        <div className="footer__copywrite">
            <p>&copy; {new Date().getFullYear()} NASA</p>
        </div>
        <style jsx>{`
            .footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                background-color: #000;
                color: #fff;
            }
            .footer__links {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 20%;
            }
            .footer__links a {
                color: #fff;
            }
            .footer__copywrite {
                width: 20%;
            }
        `}</style>
    </footer>

    
)

export default Footer