import '../index.css';
import React from 'react';

function Details() {
	return (
		<div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10'>
			<div className='border-b md:border-b-0 pb-4 md:pb-0 md:border-r border-gray-300 pr-6'>
				<h2 className='detail-title'>St Judes Hospital</h2>
				<p className='detail-desc'>Sarasota,FL. 33178</p>
			</div>
			<div className='detail'>
				<h2 className='detail-title flex space-x-6'>
					<span>10</span>
					<span>-</span>
					<span>17</span>
				</h2>
				<p className='detail-desc flex space-x-8'>
					<span>October</span> <span>December</span>
				</p>
			</div>
			<div className='pb-2 md:pb-0'>
				<h2 className='detail-title'>20 Rooms</h2>
				<p className='detail-desc'>10 Singles, 10 doubles</p>
			</div>
		</div>
	);
}

export default Details;
