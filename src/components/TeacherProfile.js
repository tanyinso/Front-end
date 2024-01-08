import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CourseBox from './CourseBox';

const TeacherProfile = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [contents, setContents] = useState(null);
  const [totalLessons, setTotalLessons] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`http://localhost:7777/teacher/profile/${id}`);
        setTeacher(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:7777/content/teacherContent/${id}`);
        setContents(response.data);

        // Calculate total lessons, videos, and likes
        let lessonsCount = 0;
        let videosCount = 0;
        let likesCount = 0;

        response.data.forEach(content => {
          lessonsCount++;
          videosCount += content.videos.length;
          likesCount += content.likes;
        });

        setTotalLessons(lessonsCount);
        setTotalVideos(videosCount);
        setTotalLikes(likesCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
    fetchTeacher();
  }, [id]);

  return (
    <>
      <section className="teacher-profile">
        <h1 className="heading">Profile details</h1>
        <div className="details">
          <div className="tutor">
            <img src={teacher?.profileImg} alt="" />
            <h3>{teacher?.name}</h3>
            <span>{teacher?.profession}</span>
          </div>
          <div className="flex">
            <p>total lessons: <span>{totalLessons}</span></p>
            <p>total videos: <span>{totalVideos}</span></p>
            <p>total likes: <span>{totalLikes}</span></p>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">Videos</h1>
        <div className="box-container">
          {contents ? (
            contents.map(content => (
              <CourseBox key={content._id} id={content._id} image={content.thumbnail} title={content.title} desc={content.description} />
            ))
          ) : (
            <h2 className="danger">No courses created</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default TeacherProfile;