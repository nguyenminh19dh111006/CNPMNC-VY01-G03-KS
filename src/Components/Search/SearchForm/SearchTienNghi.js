import React, {useEffect, useState} from "react";
import Checkbox from "../../Global/Checkbox";

function SearchTienNghi({ criteria, setCriteria }) {
    
    return (
        <div className="text-gray-900">
            <h2 className="text-1xl font-semibold pt-4">Tiện nghi:</h2>

            
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Wifi"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Hồ bơi"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Chỗ đậu xe"/>   
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Nhà hàng"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Lễ tân 24h"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Đưa đón sân bay"/>
                    </label>
        </div>
        
    )
}

export default SearchTienNghi;