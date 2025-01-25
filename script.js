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