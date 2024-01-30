import React from "react";
import axios from "axios";

import Layout from '../Components/layout';
import ContactCard from "../Components/ContactCard";

function ContactUs()
{

	return (
		<>
			<Layout>
				<div className="w-full flex flex-col justify-center items-center">
						<div className='w-[80%] py-8 md:py-16 items-center'>
							<div className='font-poppins font-bold md:text-5xl text-4xl md:mb-auto mb-6'>Contact Us</div>
							<div className="md:pt-16 pb-5">
								<div className="text-3xl font-poppins font-bold md:py-6 py-4">Non-sports Clubs & Societies</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
									<ContactCard name='Ms. Shazrina' email='shazrinar@sunway.edu.my'/>
									<ContactCard name='Ms. Valerie' email='valeriek@sunway.edu.my'/>
									<ContactCard name='Mr. Nazmi' email='nazmi@sunway.edu.my'/>
								</div>
							</div>
							<div className="pb-5">
								<div className="text-3xl font-poppins font-bold md:py-6 py-4">Sports Clubs & Societies</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
									<ContactCard name='Mr. Mok' email='ccmok@sunway.edu.my'/>
									<ContactCard name='Mr. Jeremy' email='jeremyk@sunway.edu.my'/>
									<ContactCard name='Ms. Hajar' email='sitihajarm@sunway.edu.my'/>
								</div>
							</div>
							<div className="pb-5">
								<div className="text-3xl font-poppins font-bold md:py-6 py-4">General</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
									<ContactCard name='Sunway University Student Council' email='ccmok@sunway.edu.my'/>
									<ContactCard name='Sunway College Student Council' email='scc.info@imail.sunway.edu.my'/>
									<ContactCard name='Student LIFE Office' email='-'/>
								</div>
							</div>
						</div>
					</div>
			</Layout>
		</>
	)
}

export default ContactUs;