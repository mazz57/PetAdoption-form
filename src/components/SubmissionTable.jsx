// components/SubmissionTable.jsx
const SubmissionTable = ({ data }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Submissions</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breed</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((submission) => (
              <tr key={submission.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.petName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.petType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.breed}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.ownerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>{submission.email}</div>
                  <div>{submission.phone}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SubmissionTable;

