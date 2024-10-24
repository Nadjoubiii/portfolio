import React from 'react';
import { FaPython, FaReact, FaDatabase, FaRProject, FaAws, FaChartPie } from 'react-icons/fa';
import { SiTensorflow, SiJavascript, SiTableau } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';


const App = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-500 to-orange-400 sticky top-0 z-50 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Nadjib Tebbal</h1>
          <div className="space-x-6">
            <a href="#about" className="text-white hover:text-gray-200 transition duration-300">About</a>
            <a href="#skills" className="text-white hover:text-gray-200 transition duration-300">Skills</a>
            <a href="#projects" className="text-white hover:text-gray-200 transition duration-300">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        <TypeAnimation
          className="mt-4 text-lg"
          sequence={[
            'Data Scientist',
            1000,
            'Machine Learning Enthusiast',
            1000,
            'Data Science Student',
            1000,
          ]}
          wrapper="span"
          repeat={Infinity}
        />
        <br>
        </br>
        <a href="#projects" className="mt-6 inline-block bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">View My Projects</a>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="flex justify-center mt-6">
          <img src="/profile.jpg" alt="Nadjib Tebbal" className="w-60 h-80 rounded-full border-4 border-orange-500" />
        </div>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          I’m Nadjib, a passionate data science student at the American University of Beirut. I enjoy transforming data into actionable insights using machine learning techniques and statistical analysis.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500">Skills</h2>

          {/* Hard Skills */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-orange-600">Hard Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaPython className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Python</h3>
                <p>Data Analysis & Machine Learning</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaReact className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">React</h3>
                <p>Frontend Development</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaDatabase className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">SQL</h3>
                <p>Database Management</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <SiTensorflow className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">TensorFlow</h3>
                <p>Deep Learning</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <SiTableau className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Tableau</h3>
                <p>Data Visualization</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-orange-600">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaAws className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Communication</h3>
                <p>Effective written & verbal communication.</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaChartPie className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Teamwork</h3>
                <p>Collaboration on projects.</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaDatabase className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Problem Solving</h3>
                <p>Critical thinking and creative solutions.</p>
              </div>
            </div>
          </div>

          {/* Academic Skills */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-orange-600">Academic Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaRProject className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Statistical Analysis</h3>
                <p>Deep understanding of statistical methods.</p>
              </div>
              <div className="p-4 border rounded-lg shadow flex flex-col items-center">
                <FaDatabase className="text-orange-500 text-4xl mb-2" />
                <h3 className="font-bold">Research</h3>
                <p>Scientific research and data interpretation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">1. Titanic Survival Prediction</h3>
            <p className="mt-2">Predict which passengers survived the Titanic disaster using machine learning models.</p>
            <a href="https://github.com/yourusername/titanic-survival" className="text-orange-500 hover:underline mt-4 block">View Project</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">2. MNIST Digit Classifier</h3>
            <p className="mt-2">Developed a CNN to classify handwritten digits from the MNIST dataset with over 98% accuracy.</p>
            <a href="https://github.com/yourusername/mnist-digit-classifier" className="text-orange-500 hover:underline mt-4 block">View Project</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">3. Real-Time Image Classification</h3>
            <p className="mt-2">Created a web app to upload and classify images using a pre-trained model.</p>
            <a href="https://github.com/yourusername/image-classification" className="text-orange-500 hover:underline mt-4 block">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500">Contact Me</h2>
        <p className="mt-4">Feel free to reach out for collaborations or inquiries!</p>
        <p className="mt-2">Email: <a href="mailto:nst11@mail.aub.edu" className="text-orange-500 hover:underline">nadjib.tebbal@example.com</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Nadjib Tebbal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
