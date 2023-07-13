/ connect the console log to the javascript file
console.log("birth.js")

// Place url in a constant variable
const edu_url = "http://127.0.0.1:5000/api/v1.0/eduLevel";
const state_url = "http://127.0.0.1:5000/api/v1.0/state"
const gender_url = "http://127.0.0.1:5000/api/v1.0/gender";


d3.json(gender_url).then(function (data) {
    let regExp = /[^a-z]/g;
    let maleData = Object.entries(data).filter(([key, val]) => key.toLowerCase().replace(regExp, '') == "m");
    let femaleData = Object.entries(data).filter(([key, val]) => key.toLowerCase().replace(regExp, '') == "f");

    let male_x = maleData.map(d => d[0].replace(/\D/g, ""));

    let male_y = maleData.map(d => d[1]);

    let female_x = femaleData.map(d => d[0].replace(/\D/g, ""));

    let female_y = femaleData.map(d => d[1]);


    let maleBarTrace = {
        x: male_x,
        y: male_y,
        name: "Male",
        type: "bar",
        marker: {
            color: "#b8e6f2"
        }
    };

    let femaleBarTrace = {
        x: female_x,
        y: female_y,
        name: "Female",
        type: "bar",
        marker: {
            color:"#faa4a7"
        }
    };

    let barData = [maleBarTrace, femaleBarTrace];

    let barLayout = {
        "title":"Gender",
        "barmode":"group",
        "xaxis":{
            "tickmode":"linear"
        }
    }

    let responsive = {
        "responsive":true
    }

    Plotly.newPlot("genderBarChart", barData, barLayout, responsive);
})


// Fetch the JSON data and console log it 

d3.json(edu_url).then(function (edu_data) {
    d3.json(state_url).then(function(state_data) {
        console.log(edu_data);
        console.log(state_data);

        // assign a variable to access the HTML tag for the dropdown menu location
        dropdown = d3.select("#selDataset")

        // for loop to iterate through the values and display the index of choice
        for (let i = 0; i < edu_data.length; i++) {
            dropdown
                .append("option")
                .text(edu_data[i])
                .property("value", edu_data[i]);
        };

        // buildMetaData(data[0])
    })
});

// create a function to populate sample metadata class with info
function buildMetaData(id) {
    d3.json(url).then(function (data) {
        let meta = data.EduLevelCode

        let resultArray = data.filter(sampleObj => sampleObj.data == data);
        console.log("resultArray")
        // console.log(resultArray)

        // assign result variable to grab the first index of the resulting array
        let result = resultArray[0];

        // assign a box variable where the data will display
        let box = d3.select("#sample-metadata");

        // clears the metadata in the console log so it can be filled with the next pull
        box.html("");
        
        // loop for the display box and format to uppercase
        Object.keys(result).forEach((key) => {
            box.append("h6").text(key.toUpperCase() + ":" + result[key]);
           
          });
    })
};

function optionChanged(meta){
    buildMetaData(meta)
};