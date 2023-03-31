import React from 'react';
import Details from './Details';
import Card from './Card';
import Status from './Status';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { vector1 } from '../assets';

function Main() {
	return (
		<div className='flex-grow bg-[#D9D9D9] pb-11 lg:pb-8 px-6 md:pl-16 md:pr-6'>
			<div className='space-y-4 pt-6'>
				<h2 className='font-bold text-[#72AA83] tracking-wider font-poppins'>
					You currently have 3 requests
				</h2>
				<div className='flex space-x-6'>
					<div className='flex-grow space-y-4'>
						<div className='bg-white p-5 space-y-3 rounded-sm shadow-[0px_3px_5px_0px_#00000024]'>
							<Details />
							<Status status='in-process' />
						</div>

						<div className='bg-white p-5 space-y-5 rounded-3xl shadow-[0px_3px_5px_0px_#00000024]'>
							<div className='w-full md:w-max space-y-3'>
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
						<ChatBubbleLeftRightIcon className='w-20 h-20 cursor-pointer z-50 mb-[-8px] bg-[#44A16F] rounded-full p-4 text-white' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
