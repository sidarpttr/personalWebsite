import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((e, index) => {
                    return (
                        <div
                            key={index}
                            className="mb-8 flex flex-wrap lg:justify-center"
                        >
                            <div className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">
                                    {e.year}
                                </p>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">
                                    {e.role} -{" "}
                                    <span className="text-sm text-purple-100">
                                        {e.company}
                                    </span>
                                </h6>
                                <p className="mb-4 text-neutral-400">
                                    {e.description}
                                </p>
                                {e.technologies.map((tech, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className="me-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                        >
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
