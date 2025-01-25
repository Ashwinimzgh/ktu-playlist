# KTU PLAYLIST 🎯


## Basic Details
### Team Name: SUPERSTARS


### Team Members
- Member 1: Gopika sudheer - Government college of engineering kannur
- Member 2: Ashwini v s - Government college of engineering kannur
- Member 3: Keerthana p v - Government college of engineering kannur

### Hosted Project Link
https://ashwinimzgh.github.io/ktu-playlist/

### Project Description
KTU PLAYLIST is a user-friendly website designed to help students and faculty members locate KTU lecture videos. Utilize the intuitive filtering system to browse videos by scheme, branch, and year

### The Problem statement
to get ktu lecture viedios under one platform 

### The Solution
filtering system to browse videos by scheme, branch, year

## Technical Details
### Technologies/Components Used
For Software:
- html, css, javascript
- none
- none
- web browser, text editor/IDE ,V S CODE studio ,git hub 

For Hardware:
laptop

### Implementation
For Software:
# Installation
index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KTU Lectures & Videos</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <header>
        <h1>KTU PLAYLIST</h1>
        <p>Your one-stop hub for organizing and accessing all KTU content</p>
    </header>

    <div class="container">
        <div id="filter-section">
            <h2>Filter Videos</h2>
            <form id="filter-form">
                <label for="scheme">Scheme:</label>
                <select id="scheme" name="scheme">
                    <option value="all">All</option>
                    <option value="2019">2019</option>
                    <option value="2020">2024</option>
                </select>

                <label for="branch">Branch:</label>
                <select id="branch" name="branch">
                    <option value="all">All</option>
                    <option value="cse">CSE</option>
                    <option value="eee">EEE</option>
                    <option value="mech">MECH</option>
                    <option value="ece">ECE</option>
                    <option value="civil">CIVIL</option>
                </select>

                <label for="year">Year:</label>
                <select id="year" name="year">
                    <option value="all">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <button type="button" id="apply-filters">Apply Filters</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script> 
</body>
</html>

style.css
body {
    font-family: 'Montserrat', sans-serif; /* Modern & clean font */
    background-color: hsl(0, 67%, 99%); /* Slightly warmer background */
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #4a4a4a; 
}

header {
    background: linear-gradient(to right, #283c86, #45a29e); /* Gradient for visual interest */
    color: #fff;
    padding: 3rem 0;
    text-align: center;
}

.container {
    max-width: 960px;
    margin: 3rem auto;
    padding: 3rem 2rem;
    background:linear-gradient(to right, #283c86, #45a29e);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); 
}

h1 {
    color: #f5f5f6; 
    margin-bottom: 1.5rem;
}
h2 {
    color: #283c86; 
    margin-bottom: 1.5rem;
}
#filter-section {
    background-color: #fbfcfd;
    border: 1px solid #0f0202;
    padding: 2rem;
    border-radius: 8px;
}

label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: bold;
    color: #333;
}

select {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #dcdcdc; 
    border-radius: 5px;
    background-color: #fff;
    font-size: 1rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

button {
    background: linear-gradient(to right, #283c86, #45a29e); /* Match header gradient */
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

button:hover {
    background: linear-gradient(to right, #1a2a6c, #31847c); /* Darker gradient on hover */
    transform: translateY(-2px); /* Slight hover effect */
}

.video-category {
    margin-bottom: 3rem;
}

.video-category h2 {
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #283c86;
    display: inline-block;
    padding-bottom: 5px;
    position: relative; /* For underline effect */
}

.video-category h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #45a29e; /* Second gradient color */
}

ul {
    list-style: none;
    padding: 0;
}
h3,h4 {
    font-size: 2rem; /* Adjust size as needed */
    font-weight: bold;
    color: #094e4e;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase; /* Optional: Make title uppercase */
    letter-spacing: 2px; /* Add subtle spacing between letters */
    text-decoration:underline; 
  }
li {
    text-align: center;
    margin-bottom: 1.5rem;
}

a {
    text-align: center;
    text-decoration:underline;
    color: #2848ea;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
    color: #1a2a6c;
}

@media (max-width: 768px) {
    .container {
        padding: 2rem 1.5rem;
    }
}
javascript:
document.getElementById('apply-filters').addEventListener('click', function() {
    const scheme = document.getElementById('scheme').value;
    const branch = document.getElementById('branch').value;
    const year = document.getElementById('year').value;
  
    let targetPage = "";
  
    if (scheme === "2019" && branch === "eee" && year=== "1") {
      targetPage = "s1_eee_2019.html";
    } else if (scheme === "2019" && branch === "eee" && year === "2") { 
      targetPage = "s3_eee_2019.html"; 
    } else if (scheme === "2019" && branch === "eee" && year === "3") { 
      targetPage = "s5_eee_2019.html"; 
    } else if (scheme === "2019" && branch === "eee" && year === "4") { 
      targetPage = "s7_eee_2019.html"; 
    }
    if (scheme === "2019" && branch === "mech" && year=== "1") {
        targetPage = "s1_eee_2019.html";
      } else if (scheme === "2019" && branch === "mech" && year === "2") { 
        targetPage = "2nd_me_year_2019.html"; 
      } else if (scheme === "2019" && branch === "mech" && year === "3") { 
        targetPage = "3rd_me_year_2019.html"; 
      } else if (scheme === "2019" && branch === "mech" && year === "4") { 
        targetPage = "4th_me_year_2019.html"; 
      }
    if (scheme === "2019" && branch === "ece" && year=== "1") {
        targetPage = "s1_eee_2019.html";
      } else if (scheme === "2019" && branch === "ece" && year === "2") { 
        targetPage = "2nd_ece_year_2019.html"; 
      } else if (scheme === "2019" && branch === "ece" && year === "3") { 
        targetPage = "3rd_ece_year_2019.html"; 
      } else if (scheme === "2019" && branch === "ece" && year === "4") { 
        targetPage = "4th_ece_year_2019.html"; 
      }
    if (scheme === "2019" && branch === "ece" && year=== "1") {
        targetPage = "s1_eee_2019.html";
      } else if (scheme === "2019" && branch === "civil" && year === "2") { 
        targetPage = "2nd_civil_year_2019.html"; 
      } else if (scheme === "2019" && branch === "civil" && year === "3") { 
        targetPage = "3rd_civil_year_2019.html"; 
      } else if (scheme === "2019" && branch === "civil" && year === "4") { 
        targetPage = "4th_civil_year_2019.html"; 
      }
    if (scheme === "2019" && branch === "cse" && year=== "1") {
        targetPage = "s1_eee_2019.html";
      } else if (scheme === "2019" && branch === "cse" && year === "2") { 
        targetPage = "2nd_cse_year_2019.html"; 
      } else if (scheme === "2019" && branch === "cse" && year === "3") { 
        targetPage = "3rd_cse_year_2019.html"; 
      } else if (scheme === "2019" && branch === "cse" && year === "4") { 
        targetPage = "4th_cse_year_2019.html"; 
      }
    // Add more conditions for all possible combinations
  
    if (targetPage) {
      window.location.href = targetPage; 
    } else {
      // Handle cases where no specific page is defined
      alert("No specific page found for the selected filters."); 
    }
  });


# Run
open index.html in web browser

### Project Documentation
For Software: Technologies Used:
* HTML: For structuring the web page.
* CSS: For styling the page's appearance.
* JavaScript: For adding interactivity and dynamic behavior.
File Structure:
* index.html: Contains the HTML structure of the web page.
* style.css: Contains all the CSS styles for the page.
* script.js: Contains the JavaScript code for the application's logic.Technologies Used:
* HTML: For structuring the web page.
* CSS: For styling the page's appearance.
* JavaScript: For adding interactivity and dynamic behavior.
File Structure:
* index.html: Contains the HTML structure of the web page.
* style.css: Contains all the CSS styles for the page.
* script.js: Contains the JavaScript code for the application's logic.Installation and Usage:
* Clone or Download:
   * Clone the repository from [link to your repository] or download the project files as a ZIP archive.
* Open in VS Code: Open the project folder in VS Code.
* Open index.html in Browser: Open index.html in a web browser.
Usage Instructions:
* Select Filters: Use the dropdown menus to select the desired scheme, branch, and year.
* Apply Filters: Click the "Apply Filters" button.
* View Results: The page will either:
   * Redirect: Redirect to the corresponding HTML page with the filtered content.
   * Dynamically Update: (If implemented) Update the content within the current page

# Screenshots (Add at least 3)
![ktu 1](https://github.com/user-attachments/assets/dc30b6c3-76f2-4d43-8cb0-ee53720c9ff3)

![ktu2](https://github.com/user-attachments/assets/1ae59e8e-a717-49f5-a8d4-05bb30ad78c4)

![ktu3](https://github.com/user-attachments/assets/482a1856-4dcd-47f2-9fb0-cc737fb2bcdc)




# Build Photos

![ktu4](https://github.com/user-attachments/assets/7503bc82-767c-436d-8017-4b43d6fc6b69)


### Project Demo
# Video
https://github.com/user-attachments/assets/5fdd8cd7-b29a-48d5-aae4-fd128baebcb5

video demonstrates*


## Team Contributions
- Gopika sudheer: enhancement in codes
- Ashwini v s: design of the web
- Keerthana p v: basic codes and structures

---
Made with ❤️ at TinkerHub
