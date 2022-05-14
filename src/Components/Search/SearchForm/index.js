import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, getSearchData } from "../../../redux/actions/search";
import SearchFormMain from "./SearchFormMain";
import SearchFormStars from "./SearchFormStars";
import SearchFormPrice from "./SearchFormPrice";
import SearchFormFeatures from "./SearchFormFeatures";
import SearchFormButton from "./SearchFormButton";
import SearchLoaiHinhCuTru from "./SearchLoaiHinhCuTru";
import SearchTienNghi from "./SearchTienNghi";

function SearchForm({ criteria, setCriteria, executeScroll }) {


    return (
        <aside className="lg:w-3/12 bg-white shadow-lg p-5 rounded-sm ">
            <form action="">
                

                <SearchFormMain
                    
                />
                
                <SearchFormStars
                    
                />
                
                <SearchTienNghi

                />

                <SearchLoaiHinhCuTru

                />
                
                <SearchFormPrice
                   
                />
                
                <SearchFormFeatures
                    
                />
                
                <SearchFormButton
                    
                />
            </form>
        </aside>
    );
}

export default SearchForm;
