import React, {} from "react";
import { Link } from "react-router-dom";



function PartnerForm(){
    return(
        <div class="">
        <div class="mt-12 shadow-md bg-white px-1 absolute">
  <ul class="relative">
    <li class="relative">
      <button class="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <Link to={`/danhsachphong`}>Danh sách phòng</Link></button>
    </li>
    </ul>
  </div>
</div>
    );
}
export default PartnerForm;