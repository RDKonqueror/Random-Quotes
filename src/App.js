import QuoteBlock from './comps/QuoteBlock';
import JeffBezos from './comps/JeffBezos';
import GeorgeWashington from "./comps/GeorgeWashington";
import HenrikIbsen from './comps/HenrikIbsen';
import DouglasCoupland from './comps/DouglasCoupland';
import HelenKeller from './comps/HelenKeller';
import ZigZiglar from './comps/ZigZiglar';
import MarkTwain from './comps/MarkTwain';
import ElonMusk from './comps/ElonMusk';
import {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  const [quotesList, setQuotesList] = useState([]);
  const [quoteState, setQuoteState] = useState({});

  const randomNumbers = (max) => {
    return(
      Math.floor(Math.random() * max)
    );
  };

  const changeQuote = (list) => {
    let randomIndex = randomNumbers(list.length);

    while (list[randomIndex].quote === quoteState.quote) {
      randomIndex = randomNumbers(list.length);
    };

    setQuoteState(quotesList[randomIndex]);
  };

  useEffect(() => {
    if (quotesList.length === 0) {
      fetch('./quotes.json').then((res) => res.json()).then((res) => setQuotesList(res.quotes));
    } else {
      changeQuote(quotesList);
    }
  }, [quotesList]);
  
  return (
    <>
      <Switch>
        <Route exact path="/"
          render={() => { return <QuoteBlock quotes={quoteState} changeEvent={() => changeQuote(quotesList)} />}}
        />
        <Route exact path="/JeffBezos" component={JeffBezos} />
        <Route exact path="/GeorgeWashington" component={GeorgeWashington} />
        <Route exact path="/HenrikIbsen" component={HenrikIbsen} />
        <Route exact path="/DouglasCoupland" component={DouglasCoupland} />
        <Route exact path="/HelenKeller" component={HelenKeller} />
        <Route exact path="/ZigZiglar" component={ZigZiglar} />
        <Route exact path="/MarkTwain" component={MarkTwain} />
        <Route exact path="/ElonMusk" component={ElonMusk} />
      </Switch>
    </>
  );
}

export default App;