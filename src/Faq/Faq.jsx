import React from 'react';
import "../Components/components.css";
import json from './faqs.json';
// import Loading from '../Components/LoadingOverlay';
import Layout from '../Components/layout';

function FAQ() {

	return (
		<>
			<Layout>
				<div className="w-full flex flex-col justify-center items-center">
					<div className='w-[80%] py-8 md:py-16 items-center'>
						<div className='font-poppins font-bold md:text-5xl text-4xl md:mb-auto mb-6'>Frequently Asked Questions</div>
							<div className='pt-10'>
								{json.map((edge) => (
									<div key={edge} className='px-7 py-3'>
										<div className='font-poppins text-xl font-bold pb-2'>{edge.Question}</div>
										<div className='font-poppins text-lg font-medium pl-4'>{edge.Answer}</div>
									</div>
								))}
							</div>
					</div>
				</div>
			</Layout>
		</>
  );
}

export default FAQ;