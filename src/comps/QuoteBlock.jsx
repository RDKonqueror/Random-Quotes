import {Link} from 'react-router-dom';
import '../App.css';

const QuoteBlock = (props) => {
    return (
        <>
            <div className="wrapper">
                <button onClick={props.changeEvent}>
                    random <i class="fa fa-refresh" aria-hidden="true"></i>
                </button>
                <div className="quote-block" style={{ borderLeftColor: props.quotes.colour }}>
                    <p className="quote">{props.quotes.quote}</p>
                    <Link exact to={"/" + props.quotes.authId}>
                        <div className="container" style={{ color: props.quotes.colour }}>
                            <span className="author">{props.quotes.author}</span>
                            <span className="genre">{props.quotes.genre}</span>
                        </div>
                    </Link>
                </div>
                <footer>Rahul Dey @ DevChallenges.io</footer>
            </div>
        </>
    );
}

export default QuoteBlock;