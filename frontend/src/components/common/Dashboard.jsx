import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import NavBar from "./NavBar";
import StudentHome from "../user/student/StudentHome";
import EnrolledCourses from "../user/student/EnrolledCourses";
import TeacherHome from "../user/teacher/TeacherHome";
import AddCourse from "../user/teacher/AddCourse";

const Dashboard = () => {
  const { userData } = useContext(UserContext);
  const [selectedComponent, setSelectedComponent] = useState("home");

  if (!userData) return <h4>Loading...</h4>;

  const renderComponent = () => {
    if (userData.type === "Student") {
      switch (selectedComponent) {
        case "home":
          return <StudentHome />;
        case "enrolledcourses":
          return <EnrolledCourses />;
        default:
          return <StudentHome />;
      }
    }

    if (userData.type === "Teacher") {
      switch (selectedComponent) {
        case "home":
          return <TeacherHome />;
        case "addcourse":
          return <AddCourse />;
        default:
          return <TeacherHome />;
      }
    }

    return <h4>Unauthorized Access</h4>;
  };

  return (
    <>
      <NavBar setSelectedComponent={setSelectedComponent} />
      {renderComponent()}
    </>
  );
};

export default Dashboard;
