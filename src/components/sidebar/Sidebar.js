import React from 'react';

const navLinks = ['Current Requests', 'Ongoing Stays', 'Previous Stays', 'Reports'];

function Sidebar() {
	return (
		<nav className='hidden lg:inline-flex font-poppins flex-col justify-between h-screen sticky top-0 pb-10 pt-5 px-4 w-1/6 shadow-[3px_0px_5px_0px_#00000024] z-50'>
			<div className='font-bold'>
				<h1 className='text-lg lg:text-2xl italic pb-10 pl-4 cursor-pointer text-[#323232]'>
					LODGN
				</h1>
				<ul>
					{navLinks.map((navLink, i) => (
						<li
							className={`py-3 text-sm border-b-[1.5px] border-gray-300 cursor-pointer ${
								i === 0 && 'text-[#72AA83]'
							}`}
						>
							{navLink}
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col items-center'>
				<button className='text-sm bg-gradient-to-b from-[#48AE77] to-[#439B6C] rounded-lg text-white py-2 w-full mb-2'>
					Log-Out
				</button>
				<div className='text-center text-xs font-semibold text-[#494949]'>
					<p>Help-Desk:</p>
					<p>786-874-9988</p>
				</div>
			</div>
		</nav>
	);
}

export default Sidebar;
