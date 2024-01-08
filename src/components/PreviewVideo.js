import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PreviewVideo = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [content, setContent] = useState(null);
  const [hasPaid, setHasPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contentRes = await axios.get(`http://localhost:8888/content/video/${id}`);
        setContent(contentRes.data[0]);

        const teacherId = contentRes.data[0].teacher;
        const teacherRes = await axios.get(`http://localhost:8888/teacher/profile/${teacherId}`);
        setTeacher(teacherRes.data);

        const paymentStatusRes = await axios.get(`http://localhost:8888/payment/status/${id}`);
        const hasUserPaid = paymentStatusRes.data.hasPaid;
        setHasPaid(hasUserPaid);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, setTeacher, setContent]);

  if (!hasPaid) {
    // Redirect the user to a payment page or a message indicating they need to pay
    navigate('/mtn-payment');
    return null; // Return null to prevent rendering the rest of the component
  }

  return (
    <>
      {content && teacher && (
        <div>
          <h2>Video Preview</h2>
          <h3>Teacher: {teacher.name}</h3>
          <h4>Title: {content.title}</h4>
          <video src={content.videoUrl} controls />
          {/* Additional content related to the video */}
        </div>
      )}
    </>
  );
};

export default PreviewVideo;