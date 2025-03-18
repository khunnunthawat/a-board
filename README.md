# 🛳 aBoard - Next.js Frontend

<img src="https://github.com/user-attachments/assets/40ff5a41-b1e6-4a92-a277-eb7160441a97" alt="aBoard">

## 📝 Introduction

aBoard is a frontend application built with **Next.js**, designed to provide a seamless user experience for interacting with the **Aboard Backend API**. It leverages **React, Tailwind CSS, Zustand, and Axios** to deliver a modern and responsive UI.

## 📌 Features

- ✅ **Next.js 15** framework for frontend development
- ✅ **TypeScript** support for better type safety
- ✅ **Axios** for API communication with the backend
- ✅ **React Hook Form** for efficient form handling
- ✅ **Zustand** for global state management
- ✅ **Tailwind CSS** for styling and responsive design
- ✅ **Day.js** for handling dates and relative time formatting

## 🔗 Project Repositories

| Component                                  | Repository URL                                                |
| ------------------------------------------ | ------------------------------------------------------------- |
| **Frontend (Next.js, React, TailwindCSS)** | [aBoard Frontend](https://github.com/khunnunthawat/a-board)   |
| **Backend (NestJS, TypeORM, PostgreSQL)**  | [aBoard Backend](https://github.com/khunnunthawat/a-board-be) |

## Folder Descriptions

| Folder            | Purpose                                                   |
| ----------------- | --------------------------------------------------------- |
| **`/src/app`**    | Manages **page routing & layout** (Next.js App Router).   |
| **`/components`** | Contains **UI components** for pages.                     |
| **`/ui`**         | Stores **reusable UI elements** (Buttons, Icons, Layout). |
| **`/helper`**     | Contains **utility functions**.                           |
| **`/hooks`**      | Custom **React hooks** for logic reuse.                   |
| **`/services`**   | Manages **API requests and business logic**.              |
| **`/store`**      | Handles **state management** with Zustand.                |
| **`/types`**      | Stores **TypeScript interfaces**.                         |

## Project Structure

```
src
│── app/ (Next.js App Router)
│   ├── blog-detail/[id]/page.tsx  (Blog detail page)
│   ├── our-blog/page.tsx  (All blogs listing page)
│   ├── signin/page.tsx  (Sign-in page)
│   ├── layout.tsx  (Global layout)
│── components/
│   ├── common/CreatePostDialog.tsx
│   ├── page/Blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── BlogList.tsx
│   │   ├── BlogToolbar.tsx
│   ├── page/Home/index.tsx
│   ├── page/OurBlog/
│   │   ├── OurBlogList.tsx
│   │   ├── OurBlogEditDialog.tsx
│   │   ├── OurBlogDeleteDialog.tsx
│── ui/
│   ├── Button/
│   ├── Dialog/
│   ├── Icons/
│   ├── Layout/
│── helper/
│   ├── defaultState.ts
│   ├── mock_ui.ts
│   ├── option.ts
│   ├── time.ts
│── hooks/
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   ├── usePost.tsx
│── services/
│   ├── api.ts
│   ├── comment.service.ts
│   ├── post.service.ts
│   ├── user.service.ts
│── store/
│   ├── postStore.ts
│── types/
│   ├── comment.ts
│   ├── common.ts
│   ├── post.ts
│   ├── user.ts
```

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:3004/
```

This URL should match the **backend API** (`NestJS`) running on **port 3004**.

---

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/khunnunthawat/a-board.git
cd a-board
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Start the Development Server**

```bash
npm run dev
```

- Open in browser: **`http://localhost:3000/`**
- Ensure the **backend API** is running on **`http://localhost:3004/`**.

### **4️⃣ Build for Production**

To create an optimized build:

```bash
npm run build
```

To preview the production build:

```bash
npm run start
```

---

## 🔥 API Integration

This frontend interacts with the **Aboard Backend API**, which includes:

### **User API**

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| `POST` | `/user/signin` | Sign in a user |
| `GET`  | `/user`        | Get all users  |
| `GET`  | `/user/:id`    | Get user by ID |

### **Post API**

| Method   | Endpoint        | Description                                  |
| -------- | --------------- | -------------------------------------------- |
| `POST`   | `/post`         | Create a new post                            |
| `GET`    | `/post`         | Get all posts (with search & filter options) |
| `GET`    | `/post/:postId` | Get post by ID                               |
| `PATCH`  | `/post/:postId` | Update a post                                |
| `DELETE` | `/post/:postId` | Delete a post                                |

### **Comment API**

| Method   | Endpoint                | Description                      |
| -------- | ----------------------- | -------------------------------- |
| `POST`   | `/comment`              | Create a new comment             |
| `GET`    | `/comment/post/:postId` | Get comments for a specific post |
| `DELETE` | `/comment/:commentId`   | Delete a comment                 |

For detailed API documentation, visit **[aboard Backend API](https://github.com/khunnunthawat/a-board-be)**.

---

📜 License
This project is licensed under the MIT License.

---

### **📌 Feedback & Team Response**

Thank you for using and supporting the **aBoard** project! 🚀  
If you have any feedback, feature suggestions, or encounter any issues, please let us know through the following channels:

### 📩 **Contact Us**

- **Email Support:**  
  📧 Send your feedback or report issues to:  
  [khunnunthawat@gmail.com](mailto:khunnunthawat@gmail.com)
