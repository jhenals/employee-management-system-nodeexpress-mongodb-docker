# Employee Management System (Node Express-Mongo DB- Docker Project)

## Overview
This project is an employee management system for a dental practice (Apollonia Dental Practice), designed to help the clinic keep track of its medical staff and departments. It is the first step towards developing a full employee and customer relationship management system.

## Features 🚀
✅ Add, update, and remove employees
✅ Assign employees to departments
✅ Manage a list of available departments
✅ Store employee details (Name, Surname, Department)

## Future Enhancements 🔮
In later versions, the system may include:

* Training and specialization records
* Tracking of current projects
* Patient management
* Revenue tracking for each staff member

Tech Stack 🛠️
* Backend: Node.js / Express
* Database: MongoDB
* Containerization: Docker
* Frontend: EJS (Embedded JavaScript Templates)

Setup Instructions ⚙️
1. Clone the Repository
```
git clone https://github.com/jhenals/nodeexpress-mongodb-docker.git
cd .\your-path\nodeexpress-mongodb-docker
```

2. Install Dependencies
```
npm install
```

3. Start the Application
```
npm start
```

4. Run in Docker Compose (Optional)
```
docker-compose up -d
```

# UI
**version1:**
Homepage
![image](https://github.com/user-attachments/assets/1c5556b1-4f83-4a22-a17f-dd9f66560617)

Adding new Employee
![image](https://github.com/user-attachments/assets/e6c89007-6aed-4377-8167-cf450f611c49)

Adding new Department (dialog box)
![image](https://github.com/user-attachments/assets/50698241-03a8-4351-8483-a76f78743acb)

Editing existing Department
![image](https://github.com/user-attachments/assets/672b2a14-7612-48d9-9938-977873fdeb61)

Delete existing Department
![image](https://github.com/user-attachments/assets/0faf0f77-fd6a-48e4-9d60-68f65a72188c)

Editing existing Employee
![image](https://github.com/user-attachments/assets/b7c7f64e-4787-4ed1-9b1c-ef68d35e112e)

## API Endpoints 🌐
![image](https://github.com/user-attachments/assets/8573a16b-99a8-4126-b2ec-d67c3e55eb38)

## Data
Apollonia Dental Practice currently has 10 employees: 
Lisa Harris 
Alfred Christensen 
John Dudley 
Danny Perez 
Sarah Alvarez 
Constance Smith 
Travis Combs 
Francisco Willard 
Janet Doe 
Leslie Roche 

Apollonia Dental Practice currently has 5 departments: 
General Dentistry 
Pediatric Dentistry 
Restorative Dentistry 
Surgery Orthodontics 

The company has also provided you with the list of staff by department: 
● General Dentistry 
○ Alfred Christensen 
○ JohnDudley 
○ Janet Doe 

● Pediatric Dentistry 
○ Francisco Willard 
○ SarahAlvarez

● Restorative Dentistry 
○ LisaHarris 
○ DannyPerez 

● Surgery 
○ Constance Smith 

● Orthodontics 
○ Leslie Roche 
○ LisaHarris
