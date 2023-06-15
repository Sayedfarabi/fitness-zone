import React, { useState } from 'react';
import bgImage from './bg-image/contact_about_open_bg.png';
import InfoSectionCard from './info-section-card/InfoSectionCard';
import ScrollTrigger from 'react-scroll-trigger';
import "./info-section.css"


const InfoSection = () => {
    const [animationStart, setAnimationStart] = useState(false)
    const infoCardData = [
        {
            _id: "infoCard01",
            title: "About us",
            paragraph: {
                firstLine: "Vel illum dolore eu feugiat nulla facilisis",
                secondLine: "eros et accumsan et iusto odio dignissim qui",
                thirdLine: "blandit praesent luptatum"
            },
            link: "/about-us"
        },
        {
            _id: "infoCard02",
            title: "Open Delivery Day",
            paragraph: {
                firstLine: "Monday-Friday: 8:00AM-5:00PM CST",
                secondLine: "Saturday-Sunday: Closed",
                thirdLine: ""
            },
            link: "/about-us"
        },
        {
            _id: "infoCard03",
            title: "Contact Info",
            paragraph: {
                firstLine: "No. 96, Jecica City, NJ 07305, New York, USA",
                secondLine: "Phone: 888.444.6455 - Fax: 608.625.2600",
                thirdLine: "Organic@organica.co"
            },
            link: "/contact-us"
        },
    ]
    return (
        <ScrollTrigger onEnter={() => setAnimationStart(true)} onExit={() => setAnimationStart(false)}>
            <section className='py-12 bg-gradient-to-r from-gray-200 to-gray-200'>
                <div className='info-section-bg min-h-[60vh] flex justify-center items-center'

                >
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6 md:my-0'>
                        {
                            infoCardData &&
                            infoCardData.map(data => {
                                return <InfoSectionCard
                                    key={data?._id}
                                    data={data}>
                                </InfoSectionCard>
                            })
                        }
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default InfoSection;