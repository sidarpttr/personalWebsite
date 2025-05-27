"use client";

import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../public/animations/sidar.json";

const Navbar = () => {
    const [viewCount, setViewCount] = useState(null);

    useEffect(() => {
        const fetchViewCount = async () => {
            try {
                const res = await fetch(
                    "https://6833083fc3f2222a8cb4b55f.mockapi.io/api/logs/count/1"
                );
                const data = await res.json();
                setViewCount(data.count);
            } catch (error) {
                console.error("Ziyaretçi sayısı alınamadı:", error);
            }
        };

        fetchViewCount();
    }, []);

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    alt="Sidar Adıgüzel"
                    style={{ width: "100px", height: "100px" }}
                />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/sidar-ad%C4%B1g%C3%BCzel-820696296/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/sidarpttr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <div className="flex items-center gap-2 text-lg text-neutral-300 font-semibold">
                    <FaRegEye className="text-xl" />
                    {viewCount}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
