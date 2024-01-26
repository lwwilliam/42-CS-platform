import React from "react";
import axios from "axios";

import Layout from '../Components/layout';

function ContactUs()
{

	

	return (
		<div>
			<Layout>
				<div className="w-full flex flex-col justify-center items-center">
						<div className='w-[80%] py-8 md:py-16 items-center'>
							<div className='font-poppins font-bold md:text-5xl text-4xl md:mb-auto mb-6'>Contact Us</div>

						</div>
					</div>
			</Layout>
		</div>
	)
}

export default ContactUs;