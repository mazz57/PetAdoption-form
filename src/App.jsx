import { useState } from 'react'
import Header from "./components/Header";
import './index.css';
import PetForm from './components/PetForm';
import SubmissionTable from './components/SubmissionTable';

const App = () => {
  // State to store all form submissions
  const [submissions, setSubmissions] = useState([]);

  // Function to add new submission to state
  const addSubmission = (newSubmission) => {
    setSubmissions([...submissions, { ...newSubmission, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[#E0E8F9]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        {/* Main content grid */}
        <div className="mt-8 space-y-8">
          <PetForm onAddSubmission={addSubmission} />
          {submissions.length > 0 && <SubmissionTable data={submissions} />}
        </div>
      </div>
    </div>
  );
};

export default App
