import { RiMenu2Fill, RiMenu2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <div className="w-full bg-primary-500 flex justify-center text-white py-4">
      <div className="w-content flex">
        <div className="flex-1 flex ">
          <div>
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/small/fptshop_logo_c5ac91ae46.png"
              alt=""
            />
          </div>

          <div className="flex flex-1 justify-center items-start gap-4 px-[80px]">
            <div className="flex rounded-full p-2 bg-[#801d21] items-center gap-2 px-3">
              <RiMenu2Fill />
              <span>Danh mục</span>
            </div>

            <div className="flex flex-col flex-1">
              
              <div className="flex-1 bg-white rounded-full px-2 text-gray-500 flex items-center py-[4px]">
                <input
                  className="flex-1 rounded-full px-3"
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <span className="w-[32px] h-[32px] rounded-full bg-primary-300 text-2xl flex justify-center items-center">
                  <IoMdSearch />
                </span>
              </div>

              <div className=" flex gap-4 mt-1">
                <a href="">Điện thoại</a>
                <a href="">Điện thoại</a>
                <a href="">Điện thoại</a>
                <a href="">Điện thoại</a>
                <a href="">Điện thoại</a>
                <a href="">Điện thoại</a>

              </div>
            </div>



          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#801d21] rounded-full p-2 w-[44px] h-[44px] flex items-center justify-center">
            <FaUser />
          </div>

          <div className="flex rounded-full py-2 px-4 bg-black gap-2 items-center h-fit">
            <div>
              <FaCartShopping />
            </div>
            <span>Giỏ hàng</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header