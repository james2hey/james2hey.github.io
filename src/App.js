import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { // about, skills, experience, contact
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p className="Job-title">Software Developer</p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p><a>About</a> | <a>Skills</a> | <a>Experience</a> | <a>Contact</a></p>
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                 </header>

                    <div className="About">
                        <div className="Rhs">
                            <p>About</p>
                        </div>
                        <div className="Lhs">
                            <p>Stuff about me</p>
                        </div>
                    </div>

                <section className="Skills">
                    <table>
                        <td>asdf</td>
                        <td>d</td>
                    </table>
                </section>
                <section className="Skills">
                    <table>
                        <td>asdf</td>
                        <td>d</td>
                    </table>
                </section>

                <div className="Experience">
                    <table>
                        <td>asdf</td>
                        <td>d</td>
                    </table>

                </div>

                <table>
                    <td>asdf</td>
                    <td>d</td>
                </table>
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
