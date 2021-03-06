import { useEffect, useState } from "react";
import '../App.css';

const ZigZiglar = () => {
    const [data, setData]=useState([]);

    useEffect(() => {
        fetch('./quotes.json').then((res) => res.json()).then((res) => setData(res.quotes));
    }, [data]);

    return(
        <>
            <h2>Quotes by Zig Ziglar</h2>
            <div className="grid-container">
                {data.filter((q) => q.authId === "ZigZiglar").map((val) => {
                    return (
                        <div className="quote-block" style={{ borderLeftColor: val.colour }}>
                            <p className="quote">{val.quote}</p>
                        </div>
                    )
                })}
            </div>
            <footer>
                &#169; copyright 2021
            </footer>
        </>
    );
}

export default ZigZiglar;