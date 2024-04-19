import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
    return (
        <main className="px-3 my-3 w-100">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">March 2022 - May 2024</h5>
                            <h1 className="card-title text-center">Full-Stack Engineer</h1>
                            <h5 className="card-title text-center">
                                <a href={'https://thinkalpha.io/'} target='_blank' rel="noreferrer" className="text-white">
                                    ThinkAlpha Technologies
                                </a>
                            </h5>
                            <h5 className="card-title text-center">Remote</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Reconstructed and modernized a widget focused on Short Locates using React, Redux Saga, shadcn/ui, and Tailwind. Additionally used Socket.IO and TanStack Query to communicate with a newly reconstructed backend</li>
                                        <li>Implemented multiple contracts, controllers, and services revolving around complex user permissioning logic using Express.js, MongoDB, Postman, and tsoa</li>
                                        <li>Customized FusionAuth theme templates with proprietary styles and components to allow a seamless integration of over 40 authentication pages with the existing product</li>
                                        <li>Parsed and converted Financial Information eXchange (FIX) protocol requirements into custom and dynamic MaterialUI React forms that allowed users to place stock orders with fine-grained instructions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">August 2021 - May 2022</h5>
                            <h1 className="card-title text-center">Course Assistant</h1>
                            <h5 className="card-title text-center">Stevens Institute of Technology</h5>
                            <h5 className="card-title text-center">Hoboken, NJ</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Provided comprehensive instruction to graduate students in web development, guiding them through concepts such as AJAX, API development, asynchronous programming, Bootstrap, CSS, Express.js, HTML, JQuery, MongoDB, and Node.js.</li>
                                        <li>Managed administrative tasks including scheduling and conducting weekly office hours, promptly grading labs and quizzes, and facilitating communication via email and Slack to create a supportive learning environment and offer timely assistance.</li>
                                        <li>Mentored and guided students in troubleshooting technical issues, debugging code, and optimizing performance, cultivating problem-solving abilities and fostering a collaborative learning community.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">June 2021 - August 2021</h5>
                            <h1 className="card-title text-center">Zoom Instructor</h1>
                            <h5 className="card-title text-center">iD Tech</h5>
                            <h5 className="card-title text-center">Remote</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Manage a classroom of students in a virtual setting</li>
                                        <li>Review academic material and create lesson plans for STEAM topics</li>
                                        <li>Deliver high quality instruction to all students</li>
                                        <li>Ensure an atmosphere of learning and growth within the online space</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">September 2019 - May 2021</h5>
                            <h1 className="card-title text-center">Clerk</h1>
                            <h5 className="card-title text-center">Nova Games</h5>
                            <h5 className="card-title text-center">Brick, NJ</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Manage buying and selling of goods to and from customers</li>
                                        <li>Handle stocking, inventory, and creating displays</li>
                                        <li>Run tournaments and events for game players</li>
                                        <li>Ensure the space is orderly, organized, and clean</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">April 2019 - October 2019</h5>
                            <h1 className="card-title text-center">Ride Operator</h1>
                            <h5 className="card-title text-center">Jenkinson's Ride Park</h5>
                            <h5 className="card-title text-center">Point Pleasant Beach, NJ</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Ensure the safety of children riding the amusements</li>
                                        <li>Manage and handle the exchange of credits for entrance to the ride</li>
                                        <li>Operate and control the functions of the ride</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">July 2018 - August 2018</h5>
                            <h1 className="card-title text-center">Senior Research Associate</h1>
                            <h5 className="card-title text-center">Monmouth University</h5>
                            <h5 className="card-title text-center">Long Branch, NJ</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Worked in Unity developing in C# to create a VR simulation</li>
                                        <li>The simulation revolved around the effects of nature on the Barnegat Bay as well as the effects of human interference</li>
                                        <li>Worked with a team of associates across 6 weeks to develop the simulation and then presented it at a Symposium</li>
                                        <li>More about the project <a href="http://bit.ly/MonmouthSRPBBSim" target="_blank" rel="noreferrer" className="text-secondary">here</a> and in <Link to="/projects" className="text-secondary">projects</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">January 2018 - May 2018</h5>
                            <h1 className="card-title text-center">Intern/Aide</h1>
                            <h5 className="card-title text-center">STEM+ Academy</h5>
                            <h5 className="card-title text-center">Point Pleasant Beach, NJ</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Assist teaching children (ages 6-13) in Robotics and VR classes</li>
                                        <li>Managing computers and software used</li>
                                        <li>Helping children to understand activities during birthday parties</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </main>
    )
}