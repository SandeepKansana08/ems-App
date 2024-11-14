const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Report Analysis",
        description: "Complete the report analysis for the monthly meeting.",
        date: "2024-11-08",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Project Kickoff Meeting",
        description: "Attend the project kickoff meeting with stakeholders.",
        date: "2024-11-09",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Weekly Timesheet Submission",
        description: "Submit the weekly timesheet before the deadline.",
        date: "2024-11-10",
        category: "Admin",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Sanjay",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Financial Forecast Preparation",
        description: "Prepare the financial forecast for Q1 2025.",
        date: "2024-11-08",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Follow-up Emails",
        description: "Send follow-up emails to pending client accounts.",
        date: "2024-11-09",
        category: "Emails",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client Contact List Update",
        description: "Update the client contact list in the CRM.",
        date: "2024-11-08",
        category: "Admin",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "QA Testing on New Feature",
        description: "Conduct QA tests for the new feature release.",
        date: "2024-11-10",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code Pull Request Review",
        description: "Review the latest code pull requests for bug fixes.",
        date: "2024-11-11",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Social Media Content Calendar",
        description: "Create a content calendar for social media platforms.",
        date: "2024-11-08",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Campaign Idea Brainstorm",
        description: "Brainstorm campaign ideas for the holiday season.",
        date: "2024-11-10",
        category: "Creative",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Process Flow Documentation",
        description: "Document the process flow for onboarding new clients.",
        date: "2024-11-08",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "HR Onboarding Coordination",
        description: "Coordinate with HR for the upcoming employee onboarding.",
        date: "2024-11-09",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Productivity Metrics Analysis",
        description: "Analyze the team productivity metrics for the past quarter.",
        date: "2024-11-11",
        category: "Productivity",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
];

  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "143",
    },
  ];

  
 export const setLocalstorage = () =>{
   localStorage.setItem('employees',JSON.stringify(employees)) 
   localStorage.setItem('admin',JSON.stringify(admin)) 
 } 
  
 export const getLocalstorage = () =>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))

        return{employees,admin}
 } 