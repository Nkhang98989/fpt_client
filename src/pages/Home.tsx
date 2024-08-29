import { Carousel } from "@material-tailwind/react";
import CategoryItem from "../components/items/CategoryItem";
import ProductSaleItem from "../components/items/ProductSaleItem";

const Home = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* banner */}
      <div className="w-full relative ">
        <img
          src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_bg_3e9455a6ba.png"
          alt=""
          className="max-h-[560px] w-full"
        />
        <div className=" absolute top-0 left-0 right-0 flex flex-col items-center py-8">
          <div className="w-content">
            <Carousel className="rounded-xl">
              <div className="h-[280px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_beeb2af002.png"
                  alt="image 2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-[280px]">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_beeb2af002.png"
                  alt="image 2"
                  className="h-full w-full object-contain"
                />
              </div>
            </Carousel>
          </div>
           {/* slider */}
          <div className="w-content">
            <Carousel className="rounded-xl">
                <div className="grid grid-cols-2 gap-3 ">
                  <div className="h-[210px]">
                    <img src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png" className="w-full h-full object-cover rounded-lg shadow-md" alt="" />
                  </div>
                  <div className="h-[210px]">
                    <img src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png" className="w-full h-full object-cover rounded-lg shadow-md" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-[210px]">
                    <img src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_34af40215b.png" className="w-full h-full object-cover rounded-lg shadow-md" alt="" />
                  </div>
                  <div className="h-[210px]">
                    <img src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/H2_614x212_7364e9c23b.png" className="w-full h-full object-cover rounded-lg shadow-md" alt="" />
                  </div>
                </div>
            </Carousel>
          </div>
        </div>
      </div>
     

      {/* danh muc */}
      <div>
        <div className="w-content m-auto grid grid-cols-5 gap-3">
              <CategoryItem/>
              <CategoryItem type={2}/>
              <CategoryItem/>
              <CategoryItem type={2}/>
              <CategoryItem/>
        </div>
      </div>
      {/* gio vang gia soc */}

      <div>
        <div className="w-content m-auto">
          <div className="relative">
            <img className="w-full h-full " src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/Banner_3_8b463ecffe.png" alt="" />
            <div className=" absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-8px]">
              <img src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/Group_2085662063_1d88d569fe.png" alt="" />
            </div>
          </div>
            <div className="px-2 pb-2 bg-black">
              <div className="bg-white rounded-lg">
                <div className="border-b">
                  <div className="w-fit py-3 px-5 bg-primary-300 rounded-tl-lg ">
                    <div className="text-center text-primary-500 font-bold">Sắp diễn ra - 30/9/2024</div>
                    <div className="flex gap-2 items-cente mt-2">
                      <span>Bắt đầu trong:</span>
                      <div className=" flex gap-1 items-center">
                        <span className="bg-primary-500 p-1 py-0  text-white rounded-md">12</span>
                        <span className="bg-primary-500 p-1 py-0  text-white rounded-md">12</span>
                        <span className="bg-primary-500 p-1 py-0  text-white rounded-md">12</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 grid grid-cols-4 gap-3">
                    <ProductSaleItem/>
                    <ProductSaleItem/>
                    <ProductSaleItem/>
                    <ProductSaleItem/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      {/* slider o giua */}
      {/* chuan bi cho chuyen du lich */}
    </div>
  );
};

export default Home;