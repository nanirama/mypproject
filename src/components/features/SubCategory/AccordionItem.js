import React, { useState, useRef } from "react";
import CategoryItem from '../CategoryItem'
const AccordionItem = ({ data, title, active, onToggle }) => {

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();


  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  if(!title){
      return ''
  }
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {title}{active}
        <span className={active ? 'control active' : 'control'}></span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
        {data && data.map((scat, sindex) => <CategoryItem key={sindex} data={scat} />)}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
