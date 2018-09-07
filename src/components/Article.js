import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
   constructor(props){
       super(props) 
   
    this.state = {
            // isOpen: props.defaultOpen,
            count: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount(){
        console.log('mounted');    
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.defaultOpen !== this.props.defaultOpen){
    //         this.setState({
    //             isOpen:  nextProps.defaultOpen
    //         })
    //     }
    // }
    
    render(){
        const {article, isOpen, onButtonClick} = this.props
        console.log('props',this.props);
        
        // const body = this.state.isOpen && <section>{article.text}</section>
        const body = isOpen && <section>{article.text}</section>

        return (
        <div className = "Hello" style={{color: "red"}}>
        <h2 onClick={this.incrementCounter}>
        {article.title} 
        <button onClick={onButtonClick}>{isOpen ? "close" : "open"}</button>
        clicked  {this.state.count}
        </h2>
        { body }
        <h3>create date: {(new Date(article.date)).toDateString()} </h3>
        </div>
        )
    }
    
    incrementCounter =()=> this.setState({
        count: this.state.count + 1
    })

//     handleClick =()=> {
//     console.log('click')
// //     this.setState({
// //        isOpen: !this.state.isOpen
// //    })
//   }
}

export default Article;