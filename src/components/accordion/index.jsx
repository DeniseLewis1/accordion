import { useState } from "react";
import data from "./data";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    };

    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0 ? 
                    data.map(item => <div className="item">
                        <div onClick={() => handleSingleSelection(item.id)} className="title">
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === item.id ? 
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