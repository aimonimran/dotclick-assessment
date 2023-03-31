import React from 'react';
import Details from '../details/Details';
import Status from '../status/Status';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { vector1 } from '../../assets';
import Card from '../card/Card';

function Main() {
	return (
		<div className='flex-grow bg-[#D9D9D9] pt-6 pb-24 px-6 md:pl-20 md:pr-6'>
			<div className='space-y-6 pt-6'>
				<h2 className='font-bold text-[#72AA83] tracking-wider font-poppins'>
					You currently have 3 requests
				</h2>
				<div className='flex space-x-7'>
					<div className='flex-grow space-y-10'>
						<div className='bg-white px-5 py-8 space-y-6 rounded-sm shadow-[0px_3px_5px_0px_#00000024]'>
							<Details />
							<Status status='in-process' />
						</div>

						<div className='bg-white px-8 py-8 space-y-5 md:space-y-12 rounded-3xl shadow-[0px_3px_5px_0px_#00000024]'>
							<div className='w-full md:w-max space-y-6'>
								<Details />
								<Status status='completed' />
							</div>

							<div className='flex flex-wrap justify-evenly xl:justify-between items-center'>
								<Card
									tag='Rare Find'
									img={vector1}
									title='Holiday Inn'
									desc='1.5 miles away from joblocation.'
									singleCost='Singles: $120'
									doublesCost='Doubles: $145'
								/>
								<Card
									img={vector1}
									title='Holiday Inn'
									desc='1.5 miles away from joblocation.'
									singleCost='Singles: $120'
									doublesCost='Doubles: $145'
								/>
								<Card
									img={vector1}
									title='Holiday Inn'
									desc='1.5 miles away from joblocation.'
									singleCost='Singles: $120'
									doublesCost='Doubles: $145'
								/>
							</div>
						</div>
					</div>
					<div className='hidden md:inline-flex items-end'>
						<ChatBubbleLeftRightIcon className='w-24 h-24 cursor-pointer z-50 mb-[-18px] bg-[#44A16F] rounded-full p-4 text-white' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
