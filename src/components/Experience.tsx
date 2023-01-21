import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
    return (
        <main className="px-3 my-3 w-100">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
                <div className="col">
                    <div className="card text-white bg-secondary text-start h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-0">March 2022 - Present</h5>
                            <h1 className="card-title text-center">Frontend Engineer</h1>
                            <h5 className="card-title text-center">ThinkAlpha Technologies</h5>
                            <h5 className="card-title text-center">Remote</h5>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <label>Responsibilities include:</label>
                                    <ul>
                                        <li>Constructing interactive frontend components for internal admin processes and user-facing components</li>
                                        <li>Working with technologies such as React, React Router, MaterialUI, Sass, Axios, and TypeScript</li>
                                        <li>Constructing extensive contracts, controllers, and services in a complex multi-layer backend system</li>
                                        <li>Working with technologies such as Express.js, tsoa, MongoDB, and TypeScript</li>
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
                                        <li>Course Assistant for CS546: Master's Level Web Programming I</li>
                                        <li>Grading of lab assignments and quizzes</li>
                                        <li>Assisting students both in person and virtually with assignments and problems</li>
                                        <li>Being attentive to a slack workspace and email at all times</li>
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