import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";

const projects = [
  {
    name: "Movie Watchlist Site",
    link: "https://aarish19.github.io/Movie-Watchlist-Project/",
    description: "A movie watchlist site made using OMDB API",
    image: proj1,
  },
  {
    name: "Employee CRUD App",
    link: "https://github.com/aarish19/crud-app",
    description: "MERN stack app to manage employees.",
    image: proj2,
  },
  {
    name: "Portfolio Website",
    link: "#",
    description: "This portfolio you’re viewing right now!",
    image: proj3,
  },
];

const Projects = () => (
  <section className="py-12 bg-gray-100">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <a href={proj.link} className="text-indigo-600 hover:underline font-medium">View Project →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
