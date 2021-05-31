import React from 'react';
import './styles/App.css';
import { quotesArr } from './quotes.js'; /*quotesArr = [ { quote: '...', author: '...', from: '...' }, {...}, {...} ];
                                           not every quote obj has a 'from' key */

//global function (shuffles quotes' order):
function shuffleIdxs() {
  let order = [];
  for (let i = 0; i < quotesArr.length; i++) { order.push(i) };
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: shuffleIdxs(),
      quoteCount: 0
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    const text = document.getElementById('text');
    const author = document.getElementById('author');
    text.classList.toggle('fadeIn');
    setTimeout(() => text.classList.toggle('fadeIn'), 1000);
    author.classList.toggle('fadeIn');
    setTimeout(() => author.classList.toggle('fadeIn'), 1000);
    this.setState(state => {
      return state.quoteCount === 0
        ? { order: shuffleIdxs(), quoteCount: (state.quoteCount + 1) % quotesArr.length }
        : { quoteCount: (state.quoteCount + 1) % quotesArr.length }
    })
  }

  render() {
    //fetch quote in quotesArr depending on order array and button presses:
    let quote = quotesArr[this.state.order[this.state.quoteCount]].quote;
    let author = quotesArr[this.state.order[this.state.quoteCount]].author;
    //display quotesArr's 'from' key value if present:
    let from = quotesArr[this.state.order[this.state.quoteCount]].from ? ', ' + quotesArr[this.state.order[this.state.quoteCount]].from : '';

    return (
      <div id="quote-box">
        <QuoteBox quote={quote} author={author} from={from}></QuoteBox>
        <div className="buttons-div">
          <button>
            <a id="tweet-quote" href="http://twitter.com/intent/tweet" target="_blank" rel="noreferrer" data-show-count="false"><i class="fab fa-twitter"></i>Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </button>
          <button id="new-quote" onClick={this.getNewQuote}>New quote</button>
        </div>
      </div>
    )
  }
}

//returns and animates <p> elements (quote, author and quotefrom):
function QuoteBox(props) {

  return (
    <>
      <blockquote>
        <p id="text">
          {props.quote}
        </p>
      </blockquote>
      <p id="author" >
        {props.author}
        <cite>
          <em>{props.from}</em>
        </cite>
      </p>
    </>
  );
}


function App() {

  return (
    <div className="App">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="UI-container">
        <header>
          <h1>Stellar Quotes Machine</h1>
        </header>
        <main>
          <QuoteMachine />
        </main>
        <footer>
          <p>Marco Costa 2021. The <a href="https://github.com/marcocosta1618?tab=repositories" target="_blank" rel="noreferrer" >code of this page</a> is hosted at GitHub.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;