import React from "react";
import Checkbox from "../../Global/Checkbox";

function SearchLoaiHinhCuTru({ criteria, setCriteria }) {
    
    return (
        <div className="text-gray-900">
            <h2 className="text-1xl font-semibold pt-4">Loại hình lưu trú:</h2>

            
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Nhà nghỉ B&B"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Biệt thự"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Nhà nghỉ Homestay"/>   
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Khác"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Nhà nghỉ"/>
                    </label>
                    <label htmlFor="bbhomestay" className="mt-2 block">
                        <Checkbox
                            id="homestaybb"
                            name="bb"
                            setCriteria={setCriteria} criteria={criteria} title="Khu nghỉ dưỡng"/>
                    </label>
        </div>
        
    )
}

export default SearchLoaiHinhCuTru;