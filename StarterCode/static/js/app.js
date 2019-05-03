// from data.js


// YOUR CODE HERE!


function informations(){
    var tableData = data;

    d3.event.preventDefault()
    const date = d3.select("#datetime").property("value")

    if (date !=""){tableData= tableData.filter(x => x.datetime===date)};

    const city = d3.select("#city").property("value")
    if (city !=""){tableData= tableData.filter(x => x.city===city)};


    const state = d3.select("#state").property("value")
    if (state !=""){tableData= tableData.filter(x => x.state===state)};


    const country = d3.select("#country").property("value")
    if (country !=""){tableData= tableData.filter(x => x.country===country)};
     

    const shape = d3.select("#shape").property("value")
    if (shape !=""){tableData= tableData.filter(x => x.shape===shape)};

    d3.select("tbody").html("");

     console.log(tableData)


const tbody= d3.select("tbody");
tableData.forEach(info => {
    const dates1= info.datetime
    const city1= info.city
    const states= info.state
    const country= info.country
    const shape= info.shape
    const duration= info.durationMinutes
    const comment= info.comments
    const row= tbody.append("tr")
    row.append("td").text(dates1)
    row.append("td").text(city1)
    row.append("td").text(states)
    row.append("td").text(country)
    row.append("td").text(shape)
    row.append("td").text(duration)
    row.append("td").text(comment)

})};

d3.select("#filter-btn").on("click",informations);

