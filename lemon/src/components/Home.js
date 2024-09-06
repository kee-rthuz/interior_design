













import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import PopupForm from './Contact';
// Import your images here
import Bg from '../asstes/a.avif';
import tr from '../asstes/1.jpg';
import Bt from '../asstes/2.jpg';
import bb from '../asstes/3.jpg';
import As from '../asstes/1.avif';
import Ad from '../asstes/2.avif';
import Af from '../asstes/3.avif';
import Ag from '../asstes/4.avif';
import Ah from '../asstes/6.avif';
import Aj from '../asstes/7.avif';
import Ak from '../asstes/8.avif';
import Al from '../asstes/9.avif';
import Zx from '../asstes/10.avif';
import Zc from '../asstes/11.avif';
import Zv from '../asstes/12.jpg';
import Zb from '../asstes/13.avif';
import Zn from '../asstes/14.avif';

import Navigation from './MiddleNavbar';

const VideoOverlaySection = ({ openPopup }) => {
  return (
    <div className="relative w-full h-screen mt-16 sm:mt-24">
      {/* Video Background */}
      <ReactPlayer
        url="https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_30fps.mp4"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />

      {/* Text Content */}
      <div className="relative h-[500px] w-[500px]">
        {/* Border Container */}
        <div className="border-container absolute top-48 z-10 -ml-32 left-[400px] h-[550px] w-[310px] border-blue-400 border-4"></div>

        {/* Text and Button Container */}
        <div className="relative z-20 text-white flex flex-col items-start justify-center h-full px-8 md:ml-[22rem]">
          <span className="block font-bold text-sm uppercase tracking-wide mt-[550px]">House</span>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-none">
            Customised<br />Completion
          </h1>

          {/* Button */}
          <div className="mt-24">
            <button
              type='submit'
              onClick={openPopup}
              className="bg-blue-400 text-black font-semibold py-3 px-6 hover:bg-blue-500 transition-all inline-block w-[155px]"
            >
              Call me →
            </button>
          </div>
        </div>

        {/* Video */}
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Quick Enquire Button */}
      <div className="fixed top-1/2 transform -translate-y-1/2 -right-8 z-30">
        <button onClick={openPopup} className="bg-blue-400 text-black font-semibold py-3 px-6 hover:bg-blue-500 transition-all block w-[155px] rotate-90 mb-28">
          Quick Enquire
        </button>
        <a href="https://wa.me/YOUR_PHONE_NUMBER" className="bg-blue-400 ml-14 text-[#000] font-semibold py-3 px-5 hover:bg-green-600 transition-all block w-[50px]">
          <i className="fab fa-whatsapp mr-2"></i>
        </a>
      </div>

      {/* Mobile View Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .relative.w-full.h-screen.mt-16.sm\\:mt-24 {
            height: 100vh;
          }
          .relative.h-\\[500px\\].w-\\[500px\\] {
            height: 100vh;
            width: 100vw;
          }
          .border-container {
            left: 10px; /* Move the border slightly to the left */
            top: 10px; /* Adjust the top position if needed */
            height: 200px; /* Decrease the height */
            width: 100px; /* Decrease the width */
            border: 4px solid blue; /* Ensure the border is visible */
            background-color: rgba(0, 0, 255, 0.1); /* Debugging background color */
          }
          .text-white.flex.flex-col.items-start.justify-center.h-full.px-8.md\\:ml-\\[22rem\\] {
            margin-left: 0;
            padding: 2rem;
          }
          .block.font-bold.text-sm.uppercase.tracking-wide.mt-\\[550px\\] {
            margin-top: 0;
          }
          .mt-24 {
            margin-top: 2rem;
          }
          .fixed.top-1/2.transform.-translate-y-1/2.right-4.z-30 {
            right: -50px; /* Move the button to the right by 50px */
            top: auto;
            bottom: 50%;
            transform: rotate(90deg) translateY(50%);
          }
        }
      `}</style>
    </div>
  );
};

const AboutUsSection = () => (
  <div className="max-w-7xl mx-auto mt-16 px-4">
    <h2 className="text-2xl md:text-4xl font-semibold text-[#808080] mb-6">ABOUT US</h2>

    <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
      <div className="w-full lg:w-2/3 flex flex-col items-start ">
        <h3 className="text-xl sm:text-3xl font-bold text-black mb-6 sm:mb-10">
          We Excite you with Exclusive Interior Designs
        </h3>

        <div className="text-[#808080] mb-6 lg:mb-20 text-sm">
          <p className="leading-loose">
            We customize interior designs according to the demand
            of our clients. With an experienced team, we help your dreams come true. A venture
            born in 2012 is now one among the most trusted and customer-friendly
            Interior Designing hubs in Kochi.
          </p>
        </div>

        <div className="flex flex-row items-center mb-8 lg:mb-0">
          <div className="border-4 w-20 h-20 sm:w-[170px] sm:h-[20vh] border-blue-400 p-2 flex items-center justify-center mb-1 sm:mb-0">
            <span className="text-4xl sm:text-8xl font-bold text-black">15</span>
          </div>
          <p className="text-black text-xl sm:text-2xl sm:ml-4 ml-2">
            Years<br />
            Experienced<br />
            Experts
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-28 mx-auto">
        <img
          src={Bg}
          alt="Interior Design"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

    </div>
  </div>
);

const WhatWeDoSection = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="border-t-4 border-blue-400 w-[100px]  mb-10  sm:mx-0"></div>

    <div className="flex flex-col md:flex-row items-start justify-between">
      <div className="w-full md:w-1/3 mb-12 md:mb-0">
        <h2 className="text-3xl font-bold text-[#808080] mb-4">
          <span className="pb-2">WHAT WE DO</span>
        </h2>
      </div>

      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
        <div className="text-[#808080] mb-6 lg:mb-20 text-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Home Interiors</h3>
          <p className="leading-loose">
            We offer customised designs to beautify the interiors of your home. Our team would assist you in making your dream design come true. With Lemon, turn your interiors exclusively extraordinary.
          </p>
        </div>

        <div className="text-[#808080] mb-6 lg:mb-20 text-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Flat Interiors</h3>
          <p className="leading-loose">
            Give the interiors of your flat an aesthetic touch with Lemon. We offer the best and sophisticated designs that would let your interiors embrace the elegance.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const specifications = [
  { id: 1, title: "Create your Me Space", paragraph: "Dreams bloom from the bedroom and knowing that fact our designers help you create the 'Me Space' for you in the bedroom", image: tr, category: 'Bedroom' },
  { id: 2, title: "Budget Friendly Fresh Feel", paragraph: "Bedrooms must always give you a fresh feeling. Our experts have no boundaries to creativity and we offer you budget friendly services.", image: Bt, category: 'Bedroom' },
  { id: 3, title: "Spacious Room to make you Comfortable", paragraph: "We make sure that your bedroom gets enough facilities that would let you stay in comfort. Our experienced experts design your dream space with enough storage and a fresh sleeping area", image: Bg, category: 'Bedroom' },
  { id: 4, title: "Kitchen with an Expert touch", paragraph: "It is more about how you cook than what you cook. Cooking with happiness matters. Experts from Sekenz Interior Designing help you cook at the best designed kitchen making your cooking sessions pleasant.", image: bb, category: 'Kitchen' },
  { id: 5, title: "Well designed Modular Kitchen", paragraph: "Reaching out to the spices and tools at a fast pace makes the cooking process more easy and smooth. We design your Kitchen with proper storage at a close proximity with the cooking area.", image: Ak, category: 'Kitchen' },
  { id: 6, title: "Modern Kitchen With Elegant designs ", paragraph: "Who does not love elegance?Make your Kitchen one of the things about which you are always proud. We design sophisticated modular kitchens which would create a wow effect. ", image: Al, category: 'Kitchen' },
  { id: 7, title: "Classic and Impressive ", paragraph: "Turn your living room into the most attractive space in your home. Our interior designers will help you to impress your guest with the classic style of your living room. ", image: Zx, category: 'Living' },
  { id: 8, title: "Bright and Vibrant", paragraph: " Living room is one of the spaces at your home where you spend time along with your family and friends. We help you to make your family time the best providing the vibrant and bright designs for your living room. ", image: Zc, category: 'Living' },
  { id: 9, title: "Well arranged with a touch of creativity ", paragraph: "Keeping your living room well arranged with the furniture not being over crowded gives it a royal look. We incorporate the best creativity to make your living room look fresh and delicate. ", image: Zv, category: 'Living' },
  { id: 10, title: "Finding the Beauty in Everything ", paragraph: "To find out the beauty in everything around you is what we are looking for. We make it happen for you. Make everything look gorgeous and that's how your interior would become extraordi. ", image: Zn, category: 'Others' },
  { id: 11, title: "Exclusive Designs for your villa ", paragraph: "Sekenz interior Designers offers exclusive design to make your Villas look extremely beautiful. We utilise the avilable space to the maximum to make it turn to a stunning work of art. ", image: Zb, category: 'Others' },

  // Add more specifications for other categories like Living, Others
];

const SpecificationsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const filteredSpecifications = activeTab === 'All'
    ? specifications.slice(0, 4) // Show only the first 4 items when "All" is selected
    : specifications.filter(spec => spec.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <h2 className="text-3xl font-semibold text-[#808080] mb-4 sm:mb-0">Our Specifications</h2>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSpecifications.map((spec, index) => (
          <div
            key={spec.id}
            className={`relative shadow-lg overflow-hidden group ${index === 0 ? '' : 'hidden sm:block'}`}
            style={{ width: '100%', height: '300px' }}
            onMouseEnter={() => setHoveredId(spec.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative w-full h-full">
              <img
                src={spec.image}
                alt={spec.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 group-hover:top-0 group-hover:bottom-auto transition-all duration-300">
                <h3 className="text-white text-3xl font-semibold text-center drop-shadow-lg group-hover:text-black">
                  {spec.title}
                </h3>
                {hoveredId === spec.id && (
                  <p className="text-white text-base text-center mt-2 group-hover:text-black">
                    {spec.paragraph}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PackageCard = ({ title, items, price, openPopup }) => {
  return (
    <div className={`flex flex-col p-4 `}>
      <h2 className="text-xl font-bold mb-4 text-[#000] p-2 rounded">{title}</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm leading-loose">{item}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <p className="text-lg font-bold text-[#000]">INR {price}*</p>
        <button onClick={openPopup} className="bg-blue-400 text-black font-bold py-2 px-4 mt-8 w-2/2">
          TALK TO EXPERT
        </button>
      </div>
    </div>
  );
};

const PackageComparisonSection = ({ openPopup }) => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="border-t-4 border-blue-400 w-[100px] mb-10 sm:mx-0"></div>

    <div className="flex flex-col md:flex-row justify-start items-start gap-8">
      <h2 className="text-3xl font-semibold text-[#808080] mb-8 md:mb-0 md:w-1/4">Packages</h2>

      <div className="flex flex-col md:w-3/4 text-[#808080]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <PackageCard
            title="Package 2 BHK"
            items={[
              'KITCHEN (Base Cabinet + Wall Cabinet)',
              'LIVING ROOM (LCD unit)',
              'DINING ROOM (Crockery unit)',
              'BED ROOM 01 (3 Door Swing Wardrobe, Queen Size Cot, Side table)',
              'BED ROOM - 02 (3 Door Swing Wardrobe, Queen Size Cot, Side table)',
              'LOOSE FURNITURE (CENTER TABLE, SOFA, 6 SEATER DINING TABLE WITH 6 CHAIRS)'
            ]}
            price="486,550"
            openPopup={openPopup}
          />
          <PackageCard
            title="Package 3 BHK"
            items={[
              'KITCHEN (Base Cabinet + Wall Cabinet)',
              'FOYER / SIT OUT (Shoe Rack)',
              'LIVING ROOM (LCD unit)',
              'DINING ROOM (Crockery Wash, Common Wash)',
              'BED ROOM - 01 (3 Door Swing Wardrobe, 3 Door Swing Wardrobe, Side table)',
              'BED ROOM - 02 (3 Door Swing Wardrobe, Queen Size Cot, Head Rest with Cushion, Side table)',
              'BED ROOM - 03 (3 Door Swing Wardrobe, Queen Size Cot, Head Rest with Cushion, Side table, Study table)',
              'LOOSE FURNITURE (Sofa, Dining Table, Dining Chairs)',
              'CENTER TABLE'
            ]}
            price="682,045"
            openPopup={openPopup}
          />
        </div>
        <PackageCard
          title="3BHK FLAT / RESIDENTIAL INTERIOR (PREMIUM)"
          items={[
            'KITCHEN (Base Cabinet + Wall Cabinet)',
            'FOYER / SIT OUT',
            'LIVING ROOM (LCD unit)',
            'DINING ROOM - Cabinet: Marine grade 710 BWP Plywood (Imported) Laminate: Auto Spark / Action Tesa Finish',
            'Lacquered - Matt / Glossy (Metallic / Green) (Hights Hometel System Fittings) Cabinet Dimension (50cmx75) x 5(Doors) x 90cm(H) x 45cm(D)',
            'BED ROOM - 01 - 4 Door Swing Wardrobe, Dressing Unit, King Size Cot, Side table',
            'BED ROOM - 02 - 4 Door Swing Wardrobe, Dressing Unit, Queen Size Cot, Side table',
            'BED ROOM - 03 - 4 Door Swing Wardrobe, Dressing Unit, Queen Size Cot, Side table',
            'LOOSE FURNITURE - Sofa, DINING TABLE 6 SEATER + 6 CHAIRS',
            'CENTER TABLE'
          ]}
          price="1,145,190.00"
          highlight={true}
          openPopup={openPopup}
        />
      </div>
    </div>
  </div>
);

const HappyClientsSection = () => {
  const clients = [
    {
      name: "Mr. Jijesh",
      role: "Entrepreneur",
      testimonial: "Lemon Interiors team designed everything in such a perfect way without affecting any of the existing elements in our home. The whole team was very cooperative and they delivered exactly to our expectations.",
      videoSrc: "https://lemoninteriordesigners.com/campaigns/interiors/video/testimonials/mr_Jijesh.mp4"
    },

    {
      name: "Mr. Varghese",
      role: "GCC Head for UNIMONI- Noel Enliva",
      testimonial: "There is nothing more happier than listening to a happy customer.it has been absolute pleasure for Team to work with customer like you.",
      videoSrc: "https://youtu.be/QquivGyy1bg?si=si_--mBb2IiGyv5w"
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : clients.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < clients.length - 1 ? prevIndex + 1 : 0));
  };

  const visibleClients = clients.slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 2));

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">Happy Clients</h2>
        <div className="flex space-x-4">
          <button className="text-gray-400" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="text-gray-600" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleClients.map((client, index) => (
          <ClientTestimonial key={index} {...client} />
        ))}
      </div>
    </div>
  );
};

const ClientTestimonial = ({ name, role, testimonial, videoSrc }) => (
  <div className="flex flex-col items-center p-4">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
      <FontAwesomeIcon icon={faUser} className="text-gray-600 text-4xl" />
    </div>
    <div className="flex items-center mb-4">
      <h3 className="text-lg font-semibold mr-2">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
    <div className="w-full aspect-video bg-gray-200">
      <video src={videoSrc} controls className="w-full h-full object-cover"></video>
    </div>
    <p className="text-sm text-[#808080] leading-loose mt-4">{testimonial}</p>
  </div>
);
const TeamGrid = () => {
  const teamMembers = [
    { id: 1, name: "Karthika", role: "Project Manager", image: As },
    { id: 2, name: "Amaljith", role: "Design Head", image: Ad },
    { id: 3, name: "Gifty", role: "Accountant", image: Af },
    { id: 4, name: "Amal", role: "Quantity Surveyor", image: Ag },
    { id: 5, name: "Jithu", role: "Interior Designer", image: Ah },
    { id: 6, name: "Vishnavi", role: "Project Coordinator", image: Aj },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-0 relative text-[#808080] md:mr-8">
          MEET OUR TEAM
          <span className="absolute -top-10 left-0 w-24 h-1 bg-blue-400"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden aspect-square group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300">
                <h3 className="text-[#000] text-2xl font-semibold text-left drop-shadow-lg">
                  {member.name}
                </h3>

                <p className="text-[#000] text-1xl font-semibold text-left drop-shadow-lg">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Google Map Embed */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.880698892951!2d76.65570261433965!3d9.325693993150128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062187d5b55555%3A0x7214251848007b93!2sChengannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1633937110500!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-28">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-0 relative text-[#808080] md:mr-8">
            <span className="inline-block w-24 h-1 bg-blue-400 mb-4"></span>
            <br />
            CONTACT US
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-2xl text-[#000]">Showroom Address</h3>
                <p className="text-[#808080] font-semibold leading-loose">Thekkumkattil Tower, Metro Pillar No. 352</p>
                <p className="text-[#808080] font-semibold leading-loose">Pathadipalam, Kochi - 682024</p>
                <p className="text-gray-500 leading-loose">8:30 AM - 7:00 PM (Mon - Sat)</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#000]">Email:</h3>
                <a href="mailto:royal@lemoninteriordesigners.com" className="text-blue-400 block">royal@lemoninteriordesigners.com</a>
                <a href="mailto:ask@lemoninteriordesigners.com" className="text-blue-400 block">ask@lemoninteriordesigners.com</a>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#000]">Whatsapp:</h3>
                <a href="tel:+91989-567-7008" className="text-blue-400">+91 989-567-7008</a>
              </div>
            </div>
            <div className="space-y-16 md:ml-16">
              <div>
                <h3 className="font-semibold text-xl text-[#000] mb-2">Call directly:</h3>
                <a href="tel:+91989-567-7008" className="text-2xl text-blue-400 block">+91 989-567-7008,</a>
                <a href="tel:+9199954 92252" className="text-2xl text-blue-400 block">+91 99954 92252</a>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#000] mb-2">Follow us</h3>
                <div className="flex space-x-4">
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer" />
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmitForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row ">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-0 relative text-[#808080]">
            <span className="inline-block w-24 h-1 bg-blue-400 mb-4"></span>
            <br />
            SUBMIT FORM
          </h2>
        </div>
        <form className="space-y-6 md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-gray-600 placeholder-gray-400"
            />

            <div className="flex">
              <select className="w-16 p-3 bg-gray-100 border border-gray-300 rounded-l text-gray-600">
                <option>+1</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-grow w-16 p-3 bg-gray-100 border border-gray-300 rounded-r text-gray-600 placeholder-gray-400"
              />
            </div>

          </div>
          <div className="flex">

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-gray-600 placeholder-gray-400"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded text-gray-600 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-blue-400 text-black font-bold py-3 px-8 rounded hover:bg-blue-500 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

const CombinedComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Video Section */}
      <VideoOverlaySection openPopup={openPopup} />

      {/* About Us Section */}
      <AboutUsSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Specifications Section */}
      <SpecificationsSection />

      {/* Package Comparison Section */}
      <PackageComparisonSection openPopup={openPopup} />

      {/* Happy Clients Section */}
      <HappyClientsSection />

      {/* Meet Our Team Section */}
      <TeamGrid />

      <ContactUs />

      <SubmitForm />

      {/* Popup Form */}
      {isPopupVisible && <PopupForm onClose={closePopup} />}
    </div>
  );
};

export default CombinedComponent;
