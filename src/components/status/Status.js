import React from 'react';

function Status({ status }) {
	return status === 'in-process' ? (
		<div className='status justify-between text-gray-400 uppercase text-xs font-semibold'>
			<p className='w-full py-2 text-center px-2 md:text-start md:pl-4 bg-[#FDF307]'>Received</p>
			<p className='border-[1.5px] border-gray-300 border-y-0 py-2 px-2 sm:px-6 md:px-12'>
				Negotiating
			</p>
			<p className='w-full py-2 text-center px-2 md:pr-4'>Completed</p>
		</div>
	) : (
		<div className='status'>
			<p className='w-full py-2 pl-4 bg-[#44A16F] text-white uppercase text-xs font-semibold'>
				Completed
			</p>
		</div>
	);
}

export default Status;
