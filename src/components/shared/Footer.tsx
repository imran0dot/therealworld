import React from 'react';
import MaxWidth from '../../MaxWidth';

interface FooterLink {
    name: string,
    link: string
}

const footerLink: FooterLink[] = [
    {
        name: "Terms & Conditions",
        link: "#"
    },
    {
        name: "Privacy Policy",
        link: "#"
    },
    {
        name: "Download",
        link: "#"
    },
    {
        name: "Manage Membership",
        link: "#"
    }
];

const Footer: React.FC = () => {
    return (
        <div className='py-20'>
            <MaxWidth>


                {/* react footer menu  */}
                <div className='flex list-none gap-4 text-sm flex-col md:flex-row text-white mb-14'>
                    {
                        footerLink.map(({ name }) => {
                            return <li key={name}>{name}</li>
                        })
                    }
                </div>

                <div className='text-secondary-white flex flex-col lg:flex-row gap-10 '>
                    <div className='flex gap-10 flex-col w-full text-lg'>


                        {/* footer paragraph  */}
                        <div>
                            <small>Everything taught within The Real World is for education purposes only. It is up to each student to implement and do the work.</small>
                            <small>The Real World team doesn’t guarantee any profits or financial success.</small>
                        </div>

                        <div>
                            <small>Owned and Managed by New Era Learning LLC</small>
                            <br />
                            <br />
                            <small>Distributed by our partners</small>

                            <small>
                                Thrifty Consulting LLC<br />
                                800 North State St Ste 403, Dover, DE 19901
                            </small>

                            <br />
                            <br />

                            <small>
                                Legendary Courses, Inc<br />
                                221 N. Broad St.Middletown, DE 19709"
                            </small>
                        </div>
                    </div>

                    <div className='flex flex-3 gap-5 flex-col md:text-right justify-end  w-full'>
                        <h4 className='uppercase font-bold'>Support</h4>
                        <a className='text-white' href="mailto:imboy8585@gmail.com">support@jointheworld.com</a>
                        <button className='border border-transparent hover:border-white p-3 text-white block bg-secondary-dark duration-300 transition-all'>Login Now</button>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default Footer;