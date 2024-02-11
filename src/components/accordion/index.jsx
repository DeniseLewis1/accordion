import { useState } from "react";
import data from "./data";
import "./styles.css"

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [selections, setSelections] = useState([]);

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    };

    const handleMultiSelection = (currentId) => {
        let selectionsCopy = [...selections];
        const indexOfCurrentId = selectionsCopy.indexOf(currentId);
        if (indexOfCurrentId === -1) {
            selectionsCopy.push(currentId);
        } else {
            selectionsCopy.splice(indexOfCurrentId, 1);
        }

        setSelections(selectionsCopy);
    };

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? 
                    data.map(item => <div className="item">
                        <div onClick={
                            enableMultiSelection ? 
                            () => handleMultiSelection(item.id) : 
                            () => handleSingleSelection(item.id)
                            } className="title">
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === item.id || selections.indexOf(item.id) !== -1 ? 
                            <div className="content">{item.answer}</div> : 
                            null
                        }
                    </div>) : 
                    <div>No Data</div>
                }
            </div>
        </div>
    );
}