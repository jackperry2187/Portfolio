import React, { useCallback, useMemo, useState } from "react";
import { projectStorage } from "../util/projects";
import { Project } from "./Project";

export const Projects = () => {
    const [activeSkills, setActiveSkills] = useState<string[]>([]);
    const skillGroups = useMemo(() => {
        let storage: string[] = [];
        projectStorage.forEach((project) => {
            project.skills.forEach((skill) => { if(!storage.includes(skill)) storage.push(skill) })
        });
        return storage.sort((a, b) => a && b && a < b ? -1 : 1).map((e, i) => i % 13 === 0 ? storage.slice(i, i + 13) : null).filter((e) => e !== null);
    }, []);

    const activateSkill = useCallback((skill: string) => {
        (activeSkills.includes(skill))
        ? setActiveSkills([...activeSkills.filter((v) => v !== skill)])
        : setActiveSkills([...activeSkills, skill])
    }, [activeSkills])

    return (
        <main className="px-3 my-3 w-100">
            <label>Search by Skill:</label><br />
            {skillGroups.map((group, i) => (
                <div className="btn-group mb-3" role="group" key={`group${i}`}>
                    {group?.map((skill, index) => (
                        <button type="button" className={activeSkills.includes(skill) ? 'btn btn-primary border border-dark' : 'btn btn-secondary border border-dark'} onClick={() => activateSkill(skill)} key={`skillButton${index}`}>{skill}</button>
                    ))}
                </div>
            ))}
            <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-4 g-3">
                {projectStorage.map((project) => (
                    <Project
                        project={project}
                        activeSkills={activeSkills}
                        key={project.name}
                    />
                ))}
            </div>
        </main>
    )
}