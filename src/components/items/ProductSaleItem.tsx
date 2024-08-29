import React from 'react'

function ProductSaleItem() {
  return (
    <div>
        <div className='border-2 border-primary-500 flex flex-col items-center py-[40px] px-5 rounded-lg'>
            <div className='w-[160px] h-[160px]'>
                <img src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_1_638132669986743805_smart-tivi-samsung-uhd-4k-au7700-dd.jpg" alt="" />
            </div>
            <h3 className='font-bold'>
            Smart Tivi Samsung UHD 4K 55 inch UA55AU7700
            </h3>
        </div>
        <div className='bg-primary-500 text-white rounded-full text-center my-3 relative text-sm'>
            Đã bán 0/5 suất
            <span className=' absolute left-0 bottom-0'>
                <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="FeatureGoldenHour_icFireView__0mXu5"><path d="M10.6934 22.9993C1.22731 22.9109 -0.806229 14.7728 5.03195 6.27996C5.03195 6.27996 5.8232 7.16486 6.18191 7.96139C6.18191 7.96139 7.95038 1.85682 10.7818 0C10.7818 0 13.2584 5.13 13.7886 7.60664C14.0789 6.87007 14.4319 6.15974 14.8436 5.48343C14.8436 5.48343 24.7673 23.1298 10.6934 22.9993Z" fill="#EF4F34"></path><path d="M10.1657 21.4065C2.29267 21.4065 2.38498 14.33 5.0357 9.73012C5.49181 10.033 5.88278 10.424 6.18567 10.8801C6.18567 10.8801 8.39724 4.51176 10.0773 3.27344C10.0773 3.27344 12.554 8.05001 13.2622 10.1732C13.2622 10.1732 14.1457 8.84523 14.6772 8.40344C14.6759 8.40212 22.1058 21.4065 10.1657 21.4065Z" fill="#F68C22"></path><path d="M10.1421 20.0797C4.06255 20.0797 5.27845 14.5672 5.92201 13.0269C5.92201 13.0269 6.73173 13.4331 7.05615 14.0819C7.05615 14.0819 7.94895 9.38053 9.97458 7.75977C9.97458 7.75977 12.4064 11.6501 12.893 13.1904C12.893 13.1904 13.7845 12.3794 14.2711 12.1354C14.2764 12.1354 17.7619 20.0797 10.1421 20.0797Z" fill="#FFD935"></path><path d="M10.1718 19.1066C6.4793 19.1066 7.22176 15.7622 7.61475 14.8285C7.61475 14.8285 8.10665 15.0738 8.30315 15.4668C8.30315 15.4668 8.84384 12.6156 10.0743 11.6318C10.0743 11.6318 11.5486 13.9924 11.844 14.9288C11.844 14.9288 12.3847 14.4369 12.6801 14.2892C12.6801 14.2865 14.7941 19.1066 10.1718 19.1066Z" fill="#FFF697"></path></svg>
            </span>
        </div>

        <div className='flex gap-2 mt-4'>
            <div className='flex-1'>
            <div className='text-xl font-bold'>8.990.00 đ</div>
            <div>
                <del className='text-gray-500'>12.500.77 đ</del>
            <span className='bg-yellow-300 rounded-lg '>-30%</span>
            </div>
            </div>
            <div className='bg-primary-500 text-white rounded-full p-4 py-2 h-fit'>
                Sắp diễn ra
            </div>
        </div>
    </div>
  )
}

export default ProductSaleItem