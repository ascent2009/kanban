import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const authorName = 'Dmitry D.';
        const YEAR = new Date().getFullYear();
        return (
            <div className="footerStyle">
                <div className="footerTasksStatus">
                    <p>Active tasks: 'N'</p>
                    <p>Finished tasks: 'M'</p>
                </div>
                <div className="copyright">Kanban board by {authorName}, {YEAR}</div>
            </div>
        )
    }
}





export default Footer;