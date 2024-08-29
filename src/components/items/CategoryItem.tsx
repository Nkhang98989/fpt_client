import React from 'react'

type propstype ={
    type? : number;
};
function CategoryItem({type = 1}: propstype) {
    if(type==1){
  return (
    <div className='border rounded-lg p-2 flex flex-col items-center'>
        <div className='font-bold mb-3 w-full'>Điện thoại</div>
        <div className='w-[180px] h-[180px] '>
            <img className='w-full h-100 object-cover hover:scale-105' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png" alt=""/>
        </div>
    </div>
  )
}else{
    return (
    <div className='flex flex-col gap-3'>
        <div className='border rounded-lg p-2 py-4 flex gap-2'>
            <div>Laptop</div>
            <div className='w-[80px] h-[80px]'>
            <img className='w-full h-full object-cover hover:scale-110' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png" alt=""/>
            </div>
        </div>
        <div className='border rounded-lg p-2 py-4 flex gap-2'>
            <div>Laptop</div>
            <div className='w-[80px] h-[80px]'>
            <img className='w-full h-full object-cover hover:scale-110' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png" alt=""/>
            </div>
        </div>
    </div>
    );
}
}

export default CategoryItem