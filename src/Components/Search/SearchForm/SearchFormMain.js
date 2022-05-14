import React from "react";

function SearchFormMain({ criteria, setCriteria, cities }) {
    return (
        <div className="text-gray-900">
            <h2 className="text-1xl font-semibold pt-4">Thời điểm:</h2>
            <div className="mt-5">
                <label htmlFor="check-in" className="block">Nhận phòng:</label>
                <input
                    id="check-in"
                    className="px-6 py-3 mt-2 w-full border border-gray-500"
                    type="date"
                />
            </div>
            <div className="mt-5">
                <label htmlFor="check-out" className="block">Trả phòng:</label>
                <input
                    id="check-out"
                    className="px-6 py-3 mt-2 w-full border border-gray-500"
                    type="date"
                    
                />
            </div>
            <div className="mt-5">
                <label htmlFor="city" className="block">Địa điểm</label>
                <select
                    id="city"                
                    placeholder="Select one"
                    className="px-6 py-3 mt-2 w-full border border-gray-500"
                    
                >
                    <option value="all">All</option>
                    {cities &&
                        cities.map((city, i) => {
                            return (
                                <option value={city} key={i}>
                                    {city}
                                </option>
                            );
                        })}
                </select>
            </div>
            <div className="mt-5">
                <label htmlFor="guest-count" className="block">Số lượng khách</label>
                <select
                    id="guest-count"
                    placeholder="Select one"
                    className="px-6 py-3 mt-2 w-full border border-gray-500"
                    
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
    );
}

export default SearchFormMain;
