import { useMemo } from "react"
import { project } from "../util/projects";

type ProjectProps = {
    project: project,
    activeSkills: string[]
}

export const Project: React.FC<ProjectProps> = ({ project, activeSkills }) => {
    const sortedSkills = useMemo(() => project.skills.sort(), [project]);
    const skillGroups = useMemo(() => sortedSkills.map((_skill, i) => {
        return (i % 3 === 0 ? sortedSkills.slice(i, i + 3) : null)
    }).filter((skill) => skill !== null), [sortedSkills]);

    return (
        <div className="col">
            <div className="card text-white bg-secondary text-start h-100">
                <div className="card-body">
                    <h1 className="card-title text-center border-bottom">{project.name}</h1>
                    <div className="text-center border-bottom">
                        <a href={project.URL} className="link-dark" target="_blank" rel="noreferrer">{project.URL}</a>
                    </div>
                    
                    <p className="card-text">{project.description}</p>
                    <label>Skills used:</label>
                    <table className="table table-dark table-bordered">
                        <tbody>
                            {skillGroups.map((group, i) => (
                                <tr key={i}>
                                    <td className={group && activeSkills.includes(group[0]) ? 'bg-primary' : ''}>{group ? group[0] : null}</td>
                                    <td className={group && activeSkills.includes(group[1]) ? 'bg-primary' : ''}>{group ? group[1] : null}</td>
                                    <td className={group && activeSkills.includes(group[2]) ? 'bg-primary' : ''}>{group ? group[2] : null}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}