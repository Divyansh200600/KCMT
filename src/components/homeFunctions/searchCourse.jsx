import React, { useState } from 'react';

const CourseSearch = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Predefined course data
  const courses = {
    'UG Courses': ['BSc Computer Science', 'BBA', 'BA English', 'BCom'],
    'Post Courses': ['MSc Computer Science', 'MBA', 'MA English', 'MCom'],
    'Diploma Courses': ['Diploma in IT', 'Diploma in Marketing', 'Diploma in Design'],
  };

  // Handle change in the first selector (course type)
  const handleTypeChange = (event) => {
    const selectedCourseType = event.target.value;
    setSelectedType(selectedCourseType);
    setSelectedCourse(''); // Reset course selection when changing course type
  };

  // Handle change in the second selector (course name)
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Get available courses based on the selected type
  const availableCourses = courses[selectedType] || [];

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ backgroundColor: '#007bff', color: 'white', padding: '30px', textAlign: 'center', borderRadius: '8px' }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>SEARCH FOR</h2>
        <h1 style={{ margin: 0, fontSize: '24px', color: '#ffd700' }}>COURSE</h1>
      </div>

      <div style={{ flex: 1, padding: '20px', marginLeft: '20px' }}>
        {/* Both selectors displayed in a row */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Course Type Selector */}
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px', fontWeight: 'bold' }}>Select Course Type:</label>
            <select
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="" disabled>Select Course Type</option>
              <option value="UG Courses">UG Courses</option>
              <option value="Post Courses">Post Courses</option>
              <option value="Diploma Courses">Diploma Courses</option>
            </select>
          </div>

          {/* Course Name Selector */}
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px', fontWeight: 'bold' }}>Select Course Name:</label>
            <select
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
              value={selectedCourse}
              onChange={handleCourseChange}
              disabled={!selectedType} // Disable if no course type is selected
            >
              <option value="" disabled>Select Course Name</option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
