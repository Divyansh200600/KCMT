import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline'; // Import icon from Heroicons

const notices = [
    { id: 1, title: 'Notice 1', content: 'This is the first notice. It contains important information regarding the schedule.' },
    { id: 2, title: 'Notice 2', content: 'This is the second notice. Please check your emails for more details.' },
    { id: 3, title: 'Notice 3', content: 'This is the third notice. Make sure to submit your assignments on time!' },
];

const NoticeBoard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNotices = notices.filter(notice =>
        notice.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:bg-gradient-to-br dark:from-blue-900 dark:to-blue-700 min-h-screen flex items-center justify-center pb-6 pt-6">
            <div className="max-w-4xl w-full p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">Notice Board</h1>
                
                <div className="mb-5">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Notices..."
                            className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <SearchIcon className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredNotices.length > 0 ? (
                        filteredNotices.map(notice => (
                            <div key={notice.id} className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-5">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{notice.title}</h2>
                                <p className="text-gray-700 dark:text-gray-400">{notice.content}</p>
                                <div className="mt-3">
                                    <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-500 text-center">No notices found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;
