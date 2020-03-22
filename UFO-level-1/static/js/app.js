// Create variable and set to data from data.js
var tblData = data;

// Set variable to reference the table body
var tbody = d3.select("tbody");
// console.log(tbody)

// Populate table with all data using an arrow function
tblData.forEach((ufoSighting) => {
    // console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Set variable to reference the button with id = "filter-btn"
var button = d3.select("#filter-btn");

// Complete button click event handler for form
button.on("click", function() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // Set variable to reference the form input with id = "datetime"
    var inputElement = d3.select("#datetime");

    // Set variable to reference the value property for the input element
    var inputValue = inputElement.property("value");

    // // console.log declared variables once button click event occurs
    // console.log(inputValue);
    console.log(`Form Input Value: ${inputValue}`);
    console.log(tblData);

    // Set variable to filter the data by input date
    var filteredData = tblData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    // Empty/remove tr rows from table
    // $("#ufo-table tr").remove();    // must use jquery: <script src="https://code.jquery.com/jquery-git.js"></script> in html
    d3.select("tbody").selectAll("tr").remove();

    // Repopulate emptied table with filtered data using an arrow function
    filteredData.forEach((ufoSighting) => {
        // console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});