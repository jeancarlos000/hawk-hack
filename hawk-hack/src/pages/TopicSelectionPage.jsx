import { useState } from 'react';

const TopicSelectionPage = () => {
  const [learningGoal, setLearningGoal] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setLearningGoal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sending user input to the backend
      const res = await fetch('/api/get-personalized-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goal: learningGoal }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data); // Store the personalized response from ChatGPT
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Tell Us What You Want to Learn</h1>
        
        <p className="text-lg text-gray-700 mb-6 text-center">
          Enter a topic or goal you’d like to focus on, and we’ll provide personalized learning resources just for you.
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 mb-6"
            placeholder="What would you like to learn about?"
            value={learningGoal}
            onChange={handleInputChange}
            rows="4"
            required
          />

          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get Personalized Learning'}
            </button>
          </div>
        </form>

        {response && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Personalized Learning Path</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p>{response.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicSelectionPage;

