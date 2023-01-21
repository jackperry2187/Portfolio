import React from "react";

export const Classes = () => {
    return (
        <main className="px-3 my-3 w-100">
            <h1 className="display-1 mb-0">Stevens Institute of Technology</h1>
            <h3 className="display-6 mb-3 mt-0">Bachelor of Computer Science - Graduated December 2022</h3>
            <div className="table-responsive">
                <table className="table table-dark table-bordered border border-secondary">
                    <thead>
                        <tr>
                            <th colSpan={2}>Semester 1 - Fall 2020</th>
                            <th colSpan={2}>Semester 2 - Spring 2021</th>
                            <th colSpan={2}>Semester 3 - Fall 2021</th>
                            <th colSpan={2}>Semester 4 - Spring 2022</th>
                            <th colSpan={2}>Semester 5 - Fall 2022</th>
                        </tr>
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MA 124</td>
                            <td>Calculus of Two Variables</td>
                            <td>CS 284</td>
                            <td>Data Structures</td>
                            <td>CS 385</td>
                            <td>Algorithms</td>
                            <td>CS 392</td>
                            <td>Systems Programming</td>
                            <td>CS 396</td>
                            <td>Security, Privacy, and Society</td>
                        </tr>
                        <tr>
                            <td>CS 101</td>
                            <td>Research and Entrepreneurship in Computing</td>
                            <td>PEP 112</td>
                            <td>Electricity and Magnetism</td>
                            <td>CS 382</td>
                            <td>Computer Architecture and Organization</td>
                            <td>CS 496</td>
                            <td>Principles of Programming Languages</td>
                            <td>CS 334</td>
                            <td>Theory of Computation</td>
                        </tr>
                        <tr>
                            <td>CS 115</td>
                            <td>Introduction to Computer Science</td>
                            <td>PEP 221</td>
                            <td>Physics Lab I for Scientists</td>
                            <td>MA 331</td>
                            <td>Intermediate Statistics</td>
                            <td>CS 424</td>
                            <td>Senior Design II</td>
                            <td>CS 497</td>
                            <td>Independent Study with Dr. Bonelli</td>
                        </tr>
                        <tr>
                            <td>CS 135</td>
                            <td>Discrete Structures</td>
                            <td>CAL 105</td>
                            <td>CAL Colloquium: Knowledge, Nature, Culture</td>
                            <td>HSS 371</td>
                            <td>Computers and Society</td>
                            <td>CS 553</td>
                            <td>Introduction to Text Mining/Nat. Lang Proc</td>
                            <td>CS 497</td>
                            <td>Independent Study with Dr. Hao</td>
                        </tr>
                        <tr>
                            <td>CS 146</td>
                            <td>Introduction to Web Programming and Project Development</td>
                            <td>CS 545</td>
                            <td>Human-Computer Interaction</td>
                            <td>CS 423</td>
                            <td>Senior Design I</td>
                            <td>CS 555</td>
                            <td>Agile Methods for Software Dev.</td>
                            <td>CS 561</td>
                            <td>Database Management Systems I</td>
                        </tr>
                        <tr>
                            <td>CAL 103</td>
                            <td>Writing and Communications Colloquium</td>
                            <td>CS 546</td>
                            <td>Web Programming I</td>
                            <td>CS 554</td>
                            <td>Web Programming II</td>
                            <td>MA 232</td>
                            <td>Linear Algebra</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MA 222</td>
                            <td>Probability and Statistics</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}