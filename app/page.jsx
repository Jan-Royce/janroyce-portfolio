import { Card } from 'components/card';

const profileSummary = `I'm a full stack web developer with 6+ years of experience delivering end-to-end web solutions using the Laravel/LAMP stack. I have a strong background in e-commerce, custom CMS integrations, and feature development across both front-end and back-end. I'm very adept at working independently to build scalable systems, enhance UI/UX, and integrate third-party APIs across platforms including WordPress and Shopify.`;
const projectsList = [
    {
        title: "🐾 E-Commerce Platform for Pet Accessories",
        tech: "Laravel, Livewire, Tailwind CSS, Stripe API, MySQL",
        role: "Full-stack developer",
        activities: [
            "Built both the customer-facing store and a full-featured admin dashboard",
            "Integrated Stripe for secure payments and real-time order updates using Laravel Livewire",
            "Implemented product / inventory management, order tracking, invoicing, and reporting",
            "Designed a mobile-friendly UI for seamless browsing and checkout"
        ],
        url: ""
    },
    {
        title: "💊 Patient Booking System (Internal Tool)",
        tech: "PHP, HTML5, CSS3",
        role: "Backend & UI maintenance",
        activities: [
            "Debugged and optimized an in-house legacy appointment booking system",
            "Improved backend performance and user experience on the admin side",
            "Streamlined front-end form logic and layout for better responsiveness"
        ],
        url: ""
    },
    {
        title: "🎶 Musician Portfolio and Upload Platform",
        tech: "Laravel, HTML5, SASS, JavaScript, jQuery",
        role: "Full-stack developer",
        activities: [
            "Rebuilt an online platform for musicians to create profiles, upload music, and showcase work",
            "Designed a responsive, user-friendly UI for both artists and listeners",
            "Improved site performance and reduced page load time through optimized frontend assets"
        ],
        url: "https://www.neworleansmusicians.com/"
    },
    {
        title: "📚 Online Learning Platform (WordPress)",
        tech: "WordPress, Elementor, Custom PHP",
        role: "WordPress developer",
        activities: [
            "Built an interactive site for online math and algebra lessons using Elementor",
            "Customized templates and back-end logic for dynamic lesson content",
            "Ensured mobile responsiveness and optimized loading times for remote learners"
        ],
        url: "https://elevatedmath.com"
    },
    {
        title: "💼 Legal Document Generator (WordPress)",
        tech: "WordPress, Custom PHP",
        role: "Full-stack WordPress developer",
        activities: [
            "Developed dynamic form flows for generating legal, tax, and business documents",
            "Created custom logic for conditionally displaying form fields and automating output",
            "Enhanced site usability and maintained plugin compatibility across updates"
        ],
        url: "https://www.formpros.com/"
    },
    {
        title: "💡 Coupon & Promo Code Aggregator Site",
        tech: "Bootstrap, HTML5, CSS3, WordPress (Clipper theme)",
        role: "Front-end developer",
        activities: [
            "Implemented SEO-friendly code structure to improve visibility and traffic",
            "Customized a coupon theme to fit client's brand and usability requirements"
        ],
        url: ""
    },
    {
        title: "🗺️ Travel Booking Admin Dashboard",
        tech: "Laravel, Google Maps API, Bootstrap",
        role: "Full-stack developer",
        activities: [
            "Created an admin interface for managing travel bookings and destinations",
            "Integrated Google Maps for real-time location selection and display",
            "Improved system performance and admin workflows for travel agents"
        ],
        url: ""
    },
    {
        title: "📽️ YouTube-Style Video Upload Platform",
        tech: "PHP, FFmpeg, Bootstrap, MySQL",
        role: "Backend-focused developer",
        activities: [
            "Helped build a video sharing platform with features like multi-resolution streaming and dynamic thumbnails",
            "Integrated FFmpeg to handle video processing, encoding, and format conversion",
            "Implemented user upload limits, quality presets, and dashboard tools"
        ],
        url: ""
    },
    {
        title: "📈 Cryptocurrency Data & Charting Website",
        tech: "PHP, JavaScript, Charting API",
        role: "Full-stack developer",
        activities: [
            "Built real-time cryptocurrency price charts using third-party APIs",
            "Implemented a dynamic calculator for conversions and portfolio tracking",
            "Designed a responsive UI for mobile and desktop investors"
        ],
        url: ""
    },
    {
        title: "🧮 Responsive Landing Page for Hosting Company",
        tech: "Laravel, HTML5, CSS3, SASS, JavaScript",
        role: "Front-end developer",
        activities: [
            "Created a modern, responsive marketing site for a web hosting provider",
            "Used modular SCSS for maintainable styling and design consistency",
            "Ensured SEO-readiness, fast load times, and mobile optimization"
        ],
        url: "https://sunbear.io/"
    },
];
const skills = [
    {
        title: "🧩 Full Stack Development",
        list: [
            "PHP(Laravel, Vanilla PHP), Node.js",
            "JavaScript(ES6 +), jQuery",
            "REST APIs, Laravel Livewire",
            "SQL, MySQL, MongoDB"
        ]
    },
    {
        title: "🎨 Front-End & UI",
        list: [
            "HTML5, CSS3, SASS",
            "Tailwind CSS, Bootstrap",
            "Responsive design, Cross - browser compatibility",
            "Basic UX / UI awareness"
        ]
    },
    {
        title: "🛠️ CMS & E-Commerce",
        list: [
            "WordPress(Elementor, Custom themes)",
            "Shopify(Liquid templating, Theme customization)"
        ]
    },
    {
        title: "🧰 Tools & Workflows",
        list: [
            "Git & GitHub",
            "Stripe API, Google Maps API, FFmpeg",
            "Adobe Photoshop",
            "Deployment: cPanel, shared hosting environments"
        ]
    }
];

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            
            <section>
                <p>{profileSummary}</p>
            </section>
            
            <hr className="border-neutral-400" />
            
            <section>
                <h2 className="mb-6">Projects</h2>
                
                <div className="flex flex-wrap">
                    
                { projectsList && (
                    projectsList.map((project, index) => (
                        <div key={index} className={"w-full lg:w-1/2 self-stretch py-2 " + (index % 2 == 0 ? "lg:pr-2" : "lg:pl-2")}>
                            <Card className="h-full">
                                <h3>
                                    {project.title}
                                    {project.url && (
                                        <a 
                                            href={project.url}
                                            className="no-underline pl-2 text-neutral-400"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    ) }
                                </h3>
                                <p>
                                    <strong>Tech:</strong> {project.tech}
                                </p>
                                <p>
                                    <strong>Role:</strong> {project.role}
                                </p>
                                <p><strong>What I did:</strong></p>
                                
                                <ul className="list-disc pl-3">
                                    {project.activities && (
                                        
                                        project.activities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))
                                        
                                    )}
                                </ul>    
                            </Card>
                        </div>
                    ))
                )}
                
                </div>
                
            </section>
            
            <hr className="border-neutral-400" />
            
            <section>
                
                <h2 className="mb-6">Skills</h2>
                
                <div className="flex flex-wrap">
                    
                { skills && (
                    skills.map((skill, index) => (
                        <div key={index} className={"w-full lg:w-1/2 self-stretch py-2 " + (index % 2 == 0 ? "lg:pr-2" : "lg:pl-2")}>
                            <Card className="h-full">
                                <h3>{skill.title}</h3>
                                
                                <ul className="list-disc pl-3">
                                    {skill.list && (

                                        skill.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))

                                    )}
                                </ul>
                                
                            </Card>
                        </div>
                    ))
                )}
                
                </div>
                
            </section>
            
            {/* TODO Error on prod */}
            {/* <hr className="border-neutral-400" />
            
            <section>
                
                <div className="bg-white rounded-sm text-neutral-600">
                    
                    <div className="flex flex-col gap-4 px-6 py-8">
                    
                    <h2 className="mb-6">Get in touch!</h2>

                    <form name="contact" method="POST" className="flex flex-wrap" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        
                        <div className="w-full lg:w-1/2 lg:pr-4 mb-4">
                            <label className="text-sm">Name</label>
                            <input type="text" className="block border border-gray-400 rounded-sm w-full px-2 py-1" name="name" autoComplete="off" />
                        </div>
                        
                        <div className="w-full lg:w-1/2 mb-4">
                            <label className="text-sm">Email</label>
                            <input type="email" className="block border border-gray-400 rounded-sm w-full px-2 py-1" name="email" autoComplete="off" />
                        </div>
                        
                        <div className="w-full mb-4">
                            <label className="text-sm">Message</label>
                                <textarea name="message" className="block border border-gray-400 rounded-sm w-full px-2 py-1" rows="4" autoComplete="off" ></textarea>
                        </div>
                        
                        <div className="mx-auto">
                            <button type="submit" className="bg-blue-600 text-white px-4 py-1 cursor-pointer">Send</button>
                        </div>
                    </form>
                    
                    </div>
                    
                </div>

            </section> */}
            
        </div>
    );
}