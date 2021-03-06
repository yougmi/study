import React, { Component } from 'react';
import TOC  from "./components/TOC";
import Content  from "./components/Content";
import Subject  from "./components/Subject";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode:"read",
            subject : {title:'web', sub: 'world Wid Web'},
            welcome: {title: "Welcome", desc: "Hello, React!!"},
            contents : [
                { id: 1, title: "HTML", desc: "HTML is HyperText" },
                { id: 2, title: "CSS", desc: "CSS id for design" },
                { id: 3, title: "Javascript", desc: "Javascript is for interactive" },
            ]
        }
    }
    render () {
        var _title, _desc = null;
        if(this.state.mode == "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode == "read") {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                {/* <Subject 
                    title = {this.state.subject.title} 
                    sub = {this.state.subject.sub}>
                </Subject> */}
                 <header>
                    <h1><a href="/" onClick={function(e){
                        console.log('e: ', e);
                        e.preventDefault();
                        // this.state.mode = "welcome";
                        this.setState({
                            mode : "welcome"
                        })
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>
                <Subject title="webtitle222222" sub="subtitle2222222"></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}
export default App;
