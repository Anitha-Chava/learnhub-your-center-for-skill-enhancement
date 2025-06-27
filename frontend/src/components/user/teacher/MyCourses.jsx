import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../../common/AxiosInstance';
import { UserContext } from '../../../App';
import { Button, Container } from 'react-bootstrap';

const MyCourses = () => {
  const { userData } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  const fetchMyCourses = async () => {
    try {
      const res = await axiosInstance.get('/api/user/getallcoursesteacher', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        data: { userId: userData?._id }
      });
      if (res.data.success) {
        setCourses(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch courses", err);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      await axiosInstance.delete(`/api/user/deletecourse/${courseId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchMyCourses();
    } catch (err) {
      alert("Error deleting course");
    }
  };

  useEffect(() => {
    if (userData?._id) fetchMyCourses();
  }, [userData]);

  return (
    <Container>
      <h3>My Courses</h3>
      {courses.length === 0 ? (
        <p>No courses created yet.</p>
      ) : (
        courses.map((course) => (
          <div key={course._id} className='border p-2 my-2'>
            <h5>{course.C_title}</h5>
            <p>{course.C_categories}</p>
            <Button variant="danger" size="sm" onClick={() => handleDelete(course._id)}>
              Delete
            </Button>
          </div>
        ))
      )}
    </Container>
  );
};

export default MyCourses;
