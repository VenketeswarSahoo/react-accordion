import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-4">
      <div
        className="bg-white py-2 px-4 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">
          {title}
        </p>
        <div>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px]">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
