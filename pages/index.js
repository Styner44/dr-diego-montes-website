"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import "@fortawesome/fontawesome-free/css/all.min.css"
import SpinalColumn from '../components/SpinalColumn'
import Test3D from '../components/Test3D'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronUp,
} from "lucide-react"

const pillars = [
  {
    name: "Mindset",
    explanation: [
      "Embrace a positive outlook on your health journey",
      "Visualize a life free from pain and discomfort",
      "Cultivate resilience in facing health challenges"
    ]
  },
  {
    name: "Wealth",
    explanation: [
      "Invest in your health for long-term financial benefits",
      "Reduce healthcare costs through preventive care",
      "Increase productivity and earning potential"
    ]
  },
  {
    name: "Health",
    explanation: [
      "Maintain proper spinal alignment for optimal bodily function",
      "Engage in regular exercise and stretching routines",
      "Learn about ergonomics and posture for daily activities"
    ]
  },
  {
    name: "Relationships",
    explanation: [
      "Build a supportive network for your health goals",
      "Communicate effectively with your healthcare providers",
      "Foster connections that promote a healthy lifestyle"
    ]
  },
  {
    name: "Business",
    explanation: [
      "Achieve better work-life balance through improved health",
      "Increase productivity by reducing pain and discomfort",
      "Learn how chiropractic care can benefit your professional life"
    ]
  },
  {
    name: "Leadership",
    explanation: [
      "Take charge of your health and inspire others",
      "Lead by example in prioritizing spinal and overall wellness",
      "Advocate for natural, non-invasive approaches to health"
    ]
  },
  {
    name: "Happiness",
    explanation: [
      "Experience the joy of living with reduced pain",
      "Find fulfillment through improved physical function",
      "Embrace the positive impact of chiropractic care on your quality of life"
    ]
  }
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [hoveredPillar, setHoveredPillar] = useState(null)
  const [isTransformHovered, setIsTransformHovered] = useState(false)
  const testimonials = [
    {
      text: "Dr. Diego is top... and it's not just about words. There's action and structure to what he's saying. He's shaping up to be a life coach of mine, and I'm very happy with that.",
      clientName: "Reza Zolghadr",
      imageSrc: "/images/client-1.png",
    },
    {
      text: '"After a recent car accident, I struggled with persistent back pain. Dr. Diego Montes in Oakland provided the relief I desperately needed. I highly recommend him!"',
      clientName: "Client 2",
      imageSrc: "/images/client-2.png",
    },
    {
      text: "I had been suffering from chronic migraines for years, but Dr. Diego's chiropractic care has significantly reduced their frequency. I'm incredibly grateful.",
      clientName: "Client 3",
      imageSrc: "/images/client-3.png",
    },
    {
      text: '"Dr. Diego is compassionate and knowledgeable. He listens to your concerns and truly cares about your health. His adjustments have changed my life."',
      clientName: "Client 4",
      imageSrc: "/images/client-4.png",
    },
    {
      text: '"I was skeptical about chiropractic care, but Dr. Diego changed my perspective completely. My posture and overall health have improved since seeing him."',
      clientName: "Client 5",
      imageSrc: "/images/client-5.png",
    },
    {
      text: '"The environment Dr. Diego creates is warm and welcoming. His staff is wonderful, and I\'ve never felt more comfortable with a healthcare provider."',
      clientName: "Client 6",
      imageSrc: "/images/client-6.png",
    },
    {
      text: '"Dr. Diego is the best chiropractor in the Bay Area. His methods are effective, and he always goes the extra mile to ensure his patients leave feeling better."',
      clientName: "Client 7",
      imageSrc: "/images/client-7.png",
    },
    {
      text: "I've never had a better experience with a healthcare professional. Dr. Diego's holistic approach to health is refreshing and exactly what I needed.",
      clientName: "Client 8",
      imageSrc: "/images/client-8.png",
    },
    {
      text: '"After visiting multiple chiropractors, Dr. Diego was the only one who could resolve my neck pain. I trust him completely with my care."',
      clientName: "Client 9",
      imageSrc: "/images/client-9.png",
    },
    {
      text: "If you're looking for someone who genuinely cares about your well-being, Dr. Diego is your guy. He's the real deal, and I can't thank him enough.",
      clientName: "Client 10",
      imageSrc: "/images/client-10.png",
    },
    {
      text: '"Dr. Diego\'s expertise in chiropractic care is unparalleled. My recovery was swift and effective thanks to his tailored treatment plan."',
      clientName: "Client 11",
      imageSrc: "/images/client-11.png",
    },
    {
      text: '"From the moment I walked into Dr. Diego\'s clinic, I felt welcomed and cared for. His dedication to patient health is truly inspiring."',
      clientName: "Client 12",
      imageSrc: "/images/client-12.png",
    },
  ]

  const chiropracticMessages = [
    "Your health is your greatest wealth.",
    "Align your spine, align your life.",
    "A healthy spine, a happy life.",
    "Chiropractic care for a better tomorrow.",
    "Feel great, live well with chiropractic care.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setHoveredPillar(null)
      setIsTransformHovered(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEventCardHover = (index, isEntering) => {
    const videoElement = document.getElementById(`event-video-${index}`)
    const imageElement = document.getElementById(`event-image-${index}`)
    if (videoElement && imageElement) {
      if (isEntering) {
        imageElement.style.display = 'none'
        videoElement.style.display = 'block'
        videoElement.currentTime = 0
        videoElement.play().catch(error => {
          console.error("Error playing video: ", error)
        })
      } else {
        videoElement.pause()
        videoElement.currentTime = 0
        videoElement.style.display = 'none'
        imageElement.style.display = 'block'
      }
    }
  }

  return (
    <>
      <div className="bg-black text-white">
        {/* Navbar Section with Inset */}
        <section className="navbar-section">
          <div className="navbar-inset">
            <a href="#" className="navbar-logo">
              Dr. Diego Montes
            </a>
            <ul className="navbar-links">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#public-speaking" className="nav-link">
                  Public Speaking
                </a>
              </li>
              <li>
                <a href="#chiropractic" className="nav-link">
                  Chiropractic
                </a>
              </li>
              <li>
                <a href="#coaching" className="nav-link">
                  Coaching
                </a>
              </li>
              <li>
                <a href="#blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <a href="#start-now" className="btn-blue">
              Start Now
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-box">
            <Image
              src="/images/blue5.png"
              alt="Hero Section Image"
              width={800}
              height={600}
              className="hero-video"
              id="hero-video"
              style={{ objectFit: "cover" }}
            />
            <Image
              src="/images/hero-section.jpg"
              alt="Hero Section Image"
              width={800}
              height={600}
              className="hero-image"
              id="hero-image"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="inset-media-container">
            <Image
              src="/images/hero-section.jpg"
              alt="Hero Section Image"
              width={800}
              height={600}
              className="media-content"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero-content">
            <h1>Embrace the Extraordinary</h1>
            <p>Unlock Your Healing Potential Today</p>
            <button className="btn">Start Now</button>
          </div>
        </section>

        {/* Chevron Down Icon */}
        <section className="chevron-section">
          <div className="chevron-inset-container">
            <div className="chevron-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-down"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="events-section">
          <h2>Wellness Events that Empower</h2>
          <p className="events-description">
            Join us for events designed to liberate your body, mind, and spirit.
            Discover the path to optimal health through transformative
            experiences.
          </p>
          <div className="events-grid">
            {[
              "Chiropractic Mastery",
              "Mindful Leadership for Health",
              "Health and Vitality Retreat",
              "Unlock Your Inner Strength",
            ].map((event, index) => (
              <div
                key={index}
                className="event-card"
                onMouseEnter={() => handleEventCardHover(index, true)}
                onMouseLeave={() => handleEventCardHover(index, false)}
              >
                <div className="event-media">
                  <img
                    id={`event-image-${index}`}
                    src={`/images/${event.toLowerCase().replace(/ /g, '-')}-image.jpg`}
                    alt={`${event} image`}
                    className="event-img"
                  />
                  <video
                    id={`event-video-${index}`}
                    className="event-video"
                    muted
                    loop
                    playsInline
                  >
                    <source src={`/videos/${event.toLowerCase().replace(/ /g, '-')}-video.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="event-content">
                  <h3>{event}</h3>
                  <p>Experience transformative growth and wellness.</p>
                  <a href={`/gallery/event-${index + 1}`} className="event-link">
                    Learn More
                  </a>
                  <div className="social-media-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Background Slide Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <video
            id="background-video"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/videos/Homepage_FullScreen_Reel.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Optimize Your Health and Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
              Bridge the gap between discomfort and vitality with our
              evidence-based chiropractic care.
            </p>
            <button className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </section>

        {/* New Pillars Section with Animations and Mind Map */}
        <section className="min-h-screen flex items-center bg-white">
          <div className="w-full flex flex-col lg:flex-row gap-[5%] lg:gap-[15%]">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-start py-5 animate-fadeIn items-start lg:items-start pl-[5vw]">
              <p className="text-[1vw] text-black mb-[2vh] animate-slideIn text-left">
                • PILLARS FOR AN EXTRAORDINARY LIFE
              </p>
              <ul className="list-none p-0 m-0 text-[4vw] font-bold leading-[1.2] text-left">
                {pillars.map((pillar) => (
                  <li
                    key={pillar.name}
                    className="relative text-black hover:text-gray-700 transition-colors duration-300 ease-in-out cursor-pointer transform  hover:scale-105 mb-2"
                    onMouseEnter={() => setHoveredPillar(pillar.name)}
                    onMouseLeave={() => setHoveredPillar(null)}
                  >
                    {pillar.name}
                    {hoveredPillar === pillar.name && (
                      <div className="absolute left-full ml-4 top-0 bg-transparent p-4 z-10 w-64">
                        <div className="relative">
                          <div className="absolute left-0 top-1/2 w-4 h-px bg-gray-400"></div>
                          <ul className="list-none pl-6 text-[1vw] text-gray-600">
                            {pillar.explanation.map((item, index) => (
                              <li key={index} className="mb-2 relative">
                                <div className="absolute left-[-1.5rem] top-1/2 w-6 h-px bg-gray-400"></div>
                                <div className="absolute left-[-1.5rem] top-1/2 w-2 h-2 rounded-full bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column with Image */}
            <div className="flex-1 animate-slideIn flex flex-col items-center pr-[2vw]">
              <div className="aspect-square w-full max-w-[1400px] mx-auto overflow-hidden rounded-[20px] group">
                <Image
                  src="/images/motivational-speaker-square.png"
                  alt="Motivational speaker on stage with audience"
                  width={1400}
                  height={1400}
                  className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                  priority
                />
              </div>
              <div 
                className="relative mt-4"
                onMouseEnter={() => setIsTransformHovered(true)}
                onMouseLeave={() => setIsTransformHovered(false)}
              >
                <p className="text-center text-[2vw] font-bold text-black animate-fadeInUp transition-colors duration-300 ease-in-out cursor-pointer transform hover:scale-105">
                  Transform Your Life Today
                </p>
                {isTransformHovered && (
                  <div className="absolute left-0 right-0 top-full mt-4 bg-transparent p-4 z-10">
                    <div className="relative">
                      <div className="absolute left-1/2 top-0 w-px h-4 bg-gray-400 transform -translate-x-1/2"></div>
                      <ul className="list-none pl-6 text-[1vw] text-gray-600 bg-white rounded-lg shadow-lg p-4">
                        <li className="mb-2 relative">
                          <div className="absolute left-[-1.5rem] top-1/2 w-6 h-px bg-gray-400"></div>
                          <div className="absolute left-[-1.5rem] top-1/2 w-2 h-2 rounded-full bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                          We're here to support you in aligning these pillars for your extraordinary, wellness-focused life.
                        </li>
                        <li className="mb-2 relative">
                          <div className="absolute left-[-1.5rem] top-1/2 w-6 h-px bg-gray-400"></div>
                          <div className="absolute left-[-1.5rem] top-1/2 w-2 h-2 rounded-full bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                          Let our chiropractic expertise guide you towards optimal health and happiness.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Rotating Chiropractic Messages Section */}
        <section className="chiropractic-messages-section">
          <div className="message-wrapper">
            <div className="message-carousel">
              {[
                ...chiropracticMessages,
                ...chiropracticMessages,
                ...chiropracticMessages,
              ].map((message, index) => (
                <span key={index} className="chiropractic-message">
                  {`"${message}"`}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Master Section with Video */}
        <section className="master-video-section">
          <video
            autoPlay
            muted
            loop
            id="master-video"
            className="fullscreen-video"
          >
            <source src="/videos/homepage-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="master-content">
            <h2>Master Every Area of Your Life</h2>
            <p>
              Close the gap between where you are and where you want to be with
              Dr. Diego Montes' scientifically proven system.
            </p>
            <a href="#" className="cta-button">
              Start Now
            </a>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section w-full">
          <div className="container w-full max-w-[95vw] px-0 lg:px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#4A90E2]">
              What Our Clients Say About Us
            </h2>
            <div className="testimonial-container flex justify-center items-center w-full gap-8">
              {/* Testimonial Photo */}
              <div className="testimonial-photo w-[30%]">
                <Image
                  src="/images/testimonial-rotating-main.png"
                  alt="Dr. Diego Montes"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Quote */}
              <div className="testimonial-quote w-[40%] text-center px-2 lg:px-4">
                <p className="text-lg italic transition-opacity duration-500 ease-in-out mb-4">
                  {testimonials[currentTestimonial].text}
                </p>
                <p className="text-sm font-bold text-[#4A90E2]">
                  - {testimonials[currentTestimonial].clientName}
                </p>
              </div>

              {/* Testimonial Grid */}
              <div className="testimonial-grid w-[30%] grid grid-cols-3 gap-8 px-12">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`testimonial-grid-item ${
                      currentTestimonial === index
                        ? "ring-4 ring-[#4A90E2] scale-110"
                        : ""
                    }`}
                  >
                    <Image
                      src={`/images/client-${index + 1}.png`}
                      alt={`Client ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Hero Section Styles */}
        <div className="bottom-hero">
          <div className="bottom-hero-content">
            <h1 className="main-headline animate-on-scroll">
              <span className="headline-line">Embark on Your Journey</span>
              <br />
              <span className="headline-line">to Optimal Health</span>
            </h1>
            <div className="bottom-hero-media animate-on-scroll">
              <Image
                src="/images/client-5.png"
                alt="3D model of a spine representing chiropractic care"
                width={600}
                height={600}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="subheading animate-on-scroll">
              Experience personalized chiropractic care that empowers you to
              live pain-free and thrive.
            </p>
            <a href="#contact" className="bottom-cta-button animate-on-scroll">
              Start Now
            </a>
            <p className="additional-text animate-on-scroll">
            </p>
            <div>
            </div>
          </div>
        </div>
        <div className="separator" />

        {/* "Pain-Free Journey Footer CTA" */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-black/80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ready to live a pain-free life?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Unlock your body's full potential with expert chiropractic care.
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/chiropractic-care">Chiropractic Care</Link>
                  </li>
                  <li>
                    <Link href="/spinal-adjustments">Spinal Adjustments</Link>
                  </li>
                  <li>
                    <Link href="/sports-injuries">Sports Injuries</Link>
                  </li>
                  <li>
                    <Link href="/wellness-programs">Wellness Programs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/patient-forms">Patient Forms</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about-dr-montes">About Dr. Diego Montes</Link>
                  </li>
                  <li>
                    <Link href="/our-clinic">Our Clinic</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <p>Dr. Diego Montes Chiropractic</p>
                <p>123 Wellness Street</p>
                <p>Healthy City, HC 12345</p>
                <p>Phone: (555) 123-4567</p>
                <div className="mt-4 flex space-x-4">
                  <Link href="https://facebook.com" aria-label="Facebook">
                    <Facebook size={24} />
                  </Link>
                  <Link href="https://instagram.com" aria-label="Instagram">
                    <Instagram size={24} />
                  </Link>
                  <Link href="https://twitter.com" aria-label="Twitter">
                    <Twitter size={24} />
                  </Link>
                  <Link href="https://youtube.com" aria-label="YouTube">
                    <Youtube size={24} />
                  </Link>
                  <Link href="https://linkedin.com" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
              <p>
                &copy; 2024 Dr. Diego Montes Chiropractic. All rights reserved.
              </p>
              <div className="mt-2 space-x-4">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-of-service">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}