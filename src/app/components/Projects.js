import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="pb-10">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((p, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            {p.image === "null" ? (
                                <iframe
                                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7156021026118606849?collapsed=1"
                                    height="500px"
                                    width="300px"
                                    title="911 Game"
                                    className=" mb-6"
                                ></iframe>
                            ) : (
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-[300px] rounded-[25px] mb-16"
                                />
                            )}
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{p.title}</h6>
                            <p className="mb-4 text-neutral-400">
                                {p.description}
                            </p>
                            {p.technologies.map((tech, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                            <div className="w-full mt-20">
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-[10px] bg-neutral-900 px-4 py-2 text-purple-500 border border-purple-900 hover:bg-black hover:border-black"
                                >
                                    Visit Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
