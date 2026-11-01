
# Job Application Tracker

A responsive, interactive web application built using HTML, CSS, and JavaScript to help users organize and manage their job applications.

This project demonstrates my ability to build dynamic web applications using vanilla JavaScript, DOM manipulation, event handling, localStorage, and array methods.

## Features

- **Add Job Applications:** Enter a company name and job title to create a new application.
- **Delete Applications:** Remove applications that are no longer needed.
- **Update Application Status:** Track applications through Applied, Interviewing, Offered, and Rejected stages.
- **Search Applications:** Find applications by company name or job title.
- **Filter by Status:** View applications based on their current status.
- **Dashboard Statistics:** Automatically display total applications, interviews, and offers.
- **Local Storage:** Save applications in the browser so they remain available after refreshing the page.
- **Form Validation:** Prevent users from submitting empty fields.
- **Responsive Design:** Adapt the layout to desktop, tablet, and mobile screens.

## Technologies Used

- **HTML5** – Semantic page structure and forms
- **CSS3** – Responsive layouts, Flexbox, and styling
- **JavaScript (ES6+)** – Application logic and interactivity
- **DOM Manipulation** – Dynamically creating and updating job cards
- **Browser localStorage** – Persisting application data

## How It Works

### Adding a Job

Users enter a company name and job title. JavaScript validates the information and creates a job object containing:

- A unique identifier
- Company name
- Job position
- Application status

The new object is added to the jobs array and displayed on the page.

### Managing Applications

Users can update the status of each application or delete an application.

The application updates the interface and saves changes to localStorage.

### Searching and Filtering

Users can search by company or job title and filter applications by status.

JavaScript array methods dynamically determine which applications appear on the page.

### Dashboard

The dashboard calculates and displays:

- Total job applications
- Applications in the Interviewing stage
- Applications in the Offered stage

These statistics update whenever application data changes.

## JavaScript Concepts Demonstrated

This project demonstrates practical experience with:

- Variables and data types
- Objects and arrays
- Functions and callback functions
- Event listeners and form submission
- Input validation
- DOM selection and manipulation
- Creating HTML elements dynamically
- Array methods: `forEach()`, `find()`, and `filter()`
- Conditional statements
- Template literals
- JSON serialization and parsing
- Browser localStorage
- Dynamic search and filtering
- Application state management

## Project Structure

```text
Job-Application-Tracker-/
├── README.md
└── Job Application Tracker/
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ailson320-prog/Job-Application-Tracker-.git
   ```

2. Open the application folder:

   ```bash
   cd "Job-Application-Tracker-/Job Application Tracker"
   ```

3. Open `index.html` in your browser.

No additional dependencies or installation are required.

## Future Improvements

Potential enhancements include:

- Editing company names and job titles
- Adding application dates and deadlines
- Tracking interview schedules
- Adding notes for each application
- Sorting applications by date or status
- Exporting application data
- Connecting the application to a backend database

## What I Learned

Building this project strengthened my understanding of how JavaScript can manage data and dynamically update a webpage.

I gained hands-on experience working with objects, arrays, event listeners, form validation, and localStorage.

I also practiced organizing application logic into reusable functions and building a responsive interface.

## Author

**Ailson Ferreira**

Aspiring Software Developer | HTML, CSS, JavaScript | Learning React

GitHub: https://github.com/ailson320-prog

## License

This project is available for educational and portfolio purposes.
