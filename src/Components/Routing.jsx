import React from 'react';
import userMenu from './Header/Header';

// const Home = <div>{this.dropDownMenu}</div>
// const MyAccount = <div>My account</div>
// const MyTasks = <div>My tasks</div>

class Routing extends React.Component {
    render() {
        return (
            <ul>
                {/* {userMenu} */}
                {/* <li><a href={this.dropDownMenu}></a></li> */}
                {/* <li><a href="/MyAccount"></a></li>
                <li><a href="/MyTasks"></a></li> */}
            </ul>
        )
    }
}

export default Routing;