import React from 'react';

function Card({ tag, img, title, desc, singleCost, doublesCost }) {
	return (
		<div className='relative mr-10 mt-10 md:mt-0 md:mb-5 md:mr-0 border text-[#959595] font-semibold border-gray-300 pt-2 space-y-1 flex flex-col items-center shadow-[1px_2px_5px_0px_#00000024] rounded-lg bg-[#F5F4F4]'>
			{tag && (
				<p className='absolute top-[-15px] right-[-30px] bg-[#D96A6B] text-white px-6 py-2 rounded-lg text-xs z-50'>
					{tag}
				</p>
			)}
			<img src={img} alt='vector' className='w-10 h-10' />
			<h3 className='text-[#8CC679] italic pb-1'>{title}</h3>
			<div className='bg-[#EEEEEE] shadow-[0px_-3px_5px_0px_#00000024] rounded-lg px-3 py-2 space-y-3'>
				<p className='text-xs px-3'>{desc}</p>
				<div className='flex justify-between'>
					<div className='text-xs'>
						<p>{singleCost}</p>
						<p>{doublesCost}</p>
					</div>
					<button className='bg-[#44A16F] text-sm text-white rounded-lg px-4'>Book now</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
