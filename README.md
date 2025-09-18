# TaskFlow API

A simple Task Management API deployed on Render.

---

## 🚀 How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/taskflow-api-fayd.git
   cd taskflow-api-fayd
   
2. Deployed API URL : https://taskflow-api-fayd.onrender.com/api/tasks


3. API Endpoint Documentation ;
 
1) GET /api/tasks

Purpose: Fetch all tasks.

Request body: ❌ None

Response (example):

[
  {
    "taskId": "TASK-1695023456789",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "priority": "high",
    "status": "pending",
    "createdAt": "2025-09-18T08:30:00Z"
  }
]

2) POST /api/tasks

Purpose: Create a new task.

Request body (JSON):

{
  "title": "Finish assignment",
  "description": "Complete TaskFlow API deployment",
  "priority": "urgent"
}


title: (required) Task title

priority: (required) must be one of "low", "medium", "high", "urgent"

description: (optional) task details

Response (example):

{
  "taskId": "TASK-1695023490123",
  "title": "Finish assignment",
  "description": "Complete TaskFlow API deployment",
  "priority": "urgent",
  "status": "pending",
  "createdAt": "2025-09-18T10:00:00Z"
}
