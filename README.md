# Node.js API Exercises

This repository contains multiple **Node.js exercises**, each located on its own branch.  
The exercises focus on building REST APIs and testing them using **Thunder Client** (VS Code).

---

## 📂 Repository Structure
- **main** — Base branch (contains readme).  
- **exercise branches** — One exercise per branch, for example
---

## 🛠 Requirements
Before running any exercise:
- **Node.js** (v16+ recommended)  
- **npm** or **yarn**  
- **VS Code** with the **Thunder Client** extension installed

---

## 🚀 How to Run an Exercise
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Switch to the exercise branch**
   ```bash
   git fetch origin
   git checkout exercise-1
   ```
   Replace exercise-1 with whatever branch you want to run.

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the server**
   ```bash
   node index.js
   ```


## 🧪 Testing with Thunder Client
- Open Thunder Client in VS Code.

- Click New Request and choose the HTTP method (GET, POST, PUT, DELETE).

- Enter the endpoint URL (e.g. "http://localhost:3000/api/items", provided on console log).

- Send the request and inspect the response and status code.
