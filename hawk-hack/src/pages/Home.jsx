import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  }
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Home Page</h1>
        <p className="text-lg text-gray-600">
          Welcome to the Home Page! Explore our awesome website.
        </p>
        <section class="hero bg-blue-500 text-white py-20">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Master Your Money. Build Your Future.</h1>
    <p class="text-lg md:text-xl mb-8">Learn budgeting, investing, saving, and more — all at your own pace. Empower yourself with financial skills that last a lifetime.</p>
    <button onClick={handleGetStarted}
  id="getStartedButton"
  className="bg-yellow-400 text-blue-900 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300"
>
  Get Started
</button>

  </div>
</section>

<section className="bg-white py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
      Why Financial Literacy Matters
    </h2>
    <p className="text-lg md:text-xl mb-8 text-gray-600">
      Most people never learn essential money skills in school — leaving them unprepared for real-world financial decisions.
    </p>
    <p className="text-lg md:text-xl mb-8 text-gray-600">
      Our app makes financial education simple, fun, and actionable. From budgeting basics to investing confidently, we guide you every step of the way.
    </p>
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      <div className="bg-blue-100 p-6 rounded-lg w-72">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Budgeting</h3>
        <p className="text-gray-700">Learn how to create and stick to a budget that fits your lifestyle.</p>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg w-72">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Saving</h3>
        <p className="text-gray-700">Build smart savings habits to reach your short- and long-term goals.</p>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg w-72">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Investing</h3>
        <p className="text-gray-700">Understand investing basics and grow your wealth over time.</p>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg w-72">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Credit Management</h3>
        <p className="text-gray-700">Build and maintain a strong credit score for life's biggest opportunities.</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
      Features Designed for Your Success
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      
      <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Personalized Roadmaps</h3>
        <p className="text-gray-600">
          Follow a custom learning journey tailored to your goals and experience level.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Personalized Lessons</h3>
        <p className="text-gray-600">
          Dive into lessons curated just for you, making financial learning smooth and relatable.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Progress Tracking</h3>
        <p className="text-gray-600">
          See your growth over time and celebrate milestones as you build real-world skills.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Flashcards</h3>
        <p className="text-gray-600">
          Reinforce your knowledge with quick, interactive flashcards designed for rapid learning.
        </p>
      </div>

    </div>
  </div>
</section>


      </div>
    );
  }
  
  export default Home;
  
  