import { ABOUT_ME } from "../constants";

export const About = () => {
    return (
        <div className="pb-14">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            src="https://i.hizliresim.com/jcu535j.png"
                            alt="Sidar About"
                            className="w-[500px] rounded-[30px]"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 maxw-xl py-6 font-light">{ABOUT_ME}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
