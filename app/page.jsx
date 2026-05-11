import { Card } from 'components/card';
import Image from 'next/image';
import introImage from 'public/images/hol_up.png';
import projectsList from 'data/project-list.json';
import skills from 'data/skills.json';

const profileSummary = `I'm a full stack web developer with 6+ years of experience delivering end-to-end web solutions using the Laravel/LAMP stack. I have a strong background in e-commerce, custom CMS integrations, and feature development across both front-end and back-end. I'm very adept at working independently to build scalable systems, enhance UI/UX, and integrate third-party APIs across platforms including WordPress and Shopify.`; 

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            
            <section>
                <div className="flex flex-wrap">
                    <p className="w-full">{profileSummary}</p>
                    <div className="w-full mb-4 md:mb-0 relative">
                        <Image src={introImage} alt="Hol' up, let him cook..." className="w-3/4 md:w-1/4 mx-auto" />
                        <span className="holup-text absolute whitespace-nowrap">Hol up, let <span className="him-text">him</span> cook</span>
                    </div>
                </div>
            </section>
            
            <hr className="border-neutral-400" />
            
            <section>
                <h2 className="mb-6">Projects</h2>
                
                <div className="flex flex-wrap">
                    
                { projectsList && (
                    projectsList.map((project, index) => (
                        <div key={index} className={"w-full lg:w-1/2 self-stretch py-2 " + (index % 2 == 0 ? "lg:pr-2" : "lg:pl-2")}>
                            <Card className="h-full">
                                <div className="card-head px-6 py-2 flex items-center">
                                    <h3 className="">
                                        {project.title}
                                    </h3>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            className="no-underline pl-2 text-neutral-400 ml-auto"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </a>
                                    )}
                                </div>
                                
                                <div className="card-body px-6">
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
                                </div>
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
                                <div className="card-head px-6 py-2 flex items-center">
                                    <h3>{skill.title}</h3>
                                </div>
                                
                                <div className="card-body px-6">
                                    <ul className="list-disc pl-3">
                                        {skill.list && (

                                            skill.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))

                                        )}
                                    </ul>
                                </div>
                                
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