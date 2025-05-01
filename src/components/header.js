import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg"; // Place this image in src/assets/

const Header = () => (
  <motion.header
    className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4 text-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
      <motion.img
        src={profileImg}
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      />
      <h1 className="text-5xl font-bold drop-shadow-lg">Sheikh Aarish</h1>
      <p className="text-xl mt-2">Frontend Developer • React Enthusiast</p>
    </div>
  </motion.header>
);

export default Header;
