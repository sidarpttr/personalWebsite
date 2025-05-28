import Lottie from "lottie-react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-gray rounded-[30px] dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="#"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            src="/favicon.ico"
                            width={75}
                            height={75}
                            alt="Sidar Adıgüzel"
                        />
                        <span className="px-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Sidar Adıgüzel
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <p
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                sidar4932@gmail.com
                            </p>
                        </li>
                        <li>
                            <p
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                İstanbul/Türkiye
                            </p>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©2025 Sidar Adıgüzel
                </span>
            </div>
        </footer>
    );
};
