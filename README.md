# 🎥 Video Management Dashboard (MERN Stack)

A **MERN Stack** application for managing and organizing video collections, allowing users to upload, view, search, and delete videos with a **modern, responsive UI**.

---

## 🚀 Features

### Frontend (React + Tailwind CSS)
✅ **Responsive Dashboard** – Styled based on the provided UI image.  
✅ **Sticky Navbar** – Gradient background, logo, links, and profile icons.  
✅ **Video Grid Layout** – Three-column structure with modern card design.  
✅ **Search & Filters** – Users can filter videos based on titles and tags.  
✅ **Upload Functionality** – Upload button in the top-right corner.  
✅ **Pagination** – Supports page navigation for large video collections.  

### Backend (Node.js + Express + MongoDB)
✅ **Video Upload & Storage** – Users can upload video files with metadata.  
✅ **Authentication** – Secure API endpoints with JWT-based authentication.  
✅ **CRUD Operations** – Videos can be **viewed, updated, and deleted**.  
✅ **RESTful API** – Structured endpoints to fetch and manage video data.  

---

## 📂 Project Structure

```
/video-management-dashboard
 ├── backend/                     # Node.js + Express server
 │   ├── models/                  # MongoDB Models (Video Schema)
 │   ├── routes/                  # API Routes
 │   ├── controllers/              # Business logic
 │   ├── middleware/               # Authentication middleware
 │   ├── config/                   # Database & server config
 │   ├── server.js                 # Main Express server
 │
 ├── frontend/                     # React.js + Tailwind CSS
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── Navbar.js         # Sticky navbar
 │   │   │   ├── VideoPlayer.js    # Video component with metadata
 │   │   │   ├── VideoUpload.js    # Video upload form
 │   │   ├── pages/
 │   │   │   ├── Dashboard.js      # Video listing & filters
 │   │   ├── App.js                # Routing & Layout
 │   │   ├── index.js              # Main entry point
 │   ├── public/
 │   │   ├── index.html            # Main HTML file
 │   ├── tailwind.config.js        # Tailwind CSS configuration
 │   ├── package.json              # Frontend dependencies
```

---

## 🛠️ Setup Instructions

### **Backend Setup**
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

### **Frontend Setup**
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```

---

## 📜 API Endpoints

### **Authentication**
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate and return JWT token

### **Videos**
- `GET /api/videos` - Fetch all videos (User-Specific)
- `POST /api/videos/upload` - Upload a new video
- `PATCH /api/videos/:id` - Update video details
- `DELETE /api/videos/:id` - Delete a video

---

## 🖼️ UI Design Overview

The UI is inspired by a modern video management interface, featuring:
- **A sticky navbar** with a search bar and user profile options.
- **A card-based grid layout** for displaying video thumbnails.
- **An elegant upload button** for adding new videos.
- **Pagination and filtering options** for easy navigation.

---

## 📌 Future Improvements
- Implement **AI-based video tagging**.
- Add **video analytics & engagement tracking**.
- Improve **server performance using caching**.

---

## 💡 Contributing

If you'd like to contribute, feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.
