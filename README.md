# 🎓 LearnHub - Your Center for Skill Enhancement

LearnHub is a **full-stack web application** designed to empower teachers to create and manage educational content, and for students to enroll, learn, and track their course progress — all in one platform.



### 👥 Developed by the team:

Here you can find the Team ID and details of the team members.

Team ID : LTVIP2025TMID55936

Team Size : 4
1. Team Leader : Nallamothu Sai Sree Harshini
2. Team member : Chava Anitha
3. Team member : Anusha Balusupati
4. Team member : Ananthu Durgabhavani

## 🚀 Features

### 👨‍🏫 For Teachers

- Add new courses with videos, titles, and descriptions
- Upload multiple course sections with .mp4 files 
- View all added courses  
- Delete existing courses

### 👩‍🎓 For Students
- View all available courses
- Enroll in free or paid courses
- Watch course content section-wise
- Track completed modules
- Receive completion feedback (e.g., certificate placeholder)

### 🛡️ Auth + Roles
- Secure Login & Register functionality
- Role-based dashboards (`Student`, `Teacher`)
- Protected routes for course content


## 🛠️ Tech Stack

| Layer        | Technologies Used                            |
| ------------ | --------------------------------------------- |
| **Frontend** | React, React Router, Bootstrap, MDBootstrap   |
| **Backend**  | Node.js, Express.js                           |
| **Database** | MongoDB (Mongoose ODM)                        |
| **Auth**     | JWT, bcrypt                                   |
| **Upload**   | Multer (video uploads)                        |


---

## 🖥️ How to Run Locally

### 1. Clone the repository
    git clone https://github.com/Anitha-Chava/learnhub-your-center-for-skill-enhancement.git
    cd learnhub-your-center-for-skill-enhancement

### 2. Install dependencies
  Backend:
 
    cd backend
    npm install
  Frontend:

    cd ../frontend
    npm install
    
### 3. Setup .env in backend
  Create a .env file in the backend folder:

    PORT=5000
    MONGO_URL=your_mongodb_connection_string
    JWT_KEY=your_secret_key
    
### 4. Start the project
  Backend:

    cd backend
    npm start
  Frontend:

    cd ../frontend
    npm run dev
    
🔐 Login Roles for Testing
|Role    |	Email	Password            |
|--------|----------------------------|
|Student |	student@example.com	123456|
|Teacher |	teacher@example.com	123456|

(Or register new users using the signup form.)

### 📹 Demo Highlights

✅ Role-based Dashboards

✅ Add Courses (with video upload)

✅ Enroll + View Sections

✅ Track Completion

✅ Clean responsive UI

🔗 **GitHub Repository**: [LearnHub - Your Center for Skill Enhancement](https://github.com/Anitha-Chava/learnhub-your-center-for-skill-enhancement)

📧 Contact
Made with ❤️ by Anitha Chava
🔗 [Github](https://github.com/Anitha-Chava)



