import { HERO_CONTENT } from "../constants";

export const Hero = () => {
    return (
        <div className="border-b border-neutral-800 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1
                            initial={{ y: 0 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Sidar Adıgüzel
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            src="https://i.hizliresim.com/jjg1ri9.png"
                            alt="Sidar Adıgüzel"
                            className="w-[500px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
