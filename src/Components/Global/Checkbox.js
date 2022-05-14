import React from "react";

function Checkbox({value, title}) {
    return (
        <label className="inline-flex items-center mt-3 ">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-orange-600 cursor-pointer"/>
            <span className="ml-2 text-gray-700 cursor-pointer">
                {value} {title}
            </span>
        </label>
    );
}
export default Checkbox;
