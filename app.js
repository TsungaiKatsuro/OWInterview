        var testresultData = []


        var xValues = ["Positive Launches", "Negative Launches"];

        var barColors = [
            "#b91d47",
            "#00aba9"
        ];
        async function PieChart() {
        await getTestData()
            console.log(testresultData)
        const ctx = document.getElementById('myChart').getContext('2d');
        let posRes = 0, negres = 0
            
        for(i=0;i<testresultData.length; i++){
            if(testresultData[i] == true){
                posRes++;                
            }
            else{                
                negres++;
            }
        }
        
        const chart = new Chart(ctx, {
            // The type of chart we want to create
            type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: [posRes,negres]
            }]
        },

            // Configuration options go here
            options: {
            tooltips: {
                mode: 'index'
            },
            title: {
                display: true,
                text: "Successful launches vs Unsuccessful launches!"
              }
          
            }
        })}

        PieChart()


        //Fetch Data from API

        async function getTestData() {
        const apiUrl = "https://api.spacexdata.com/v4/launches/past"

        const response = await fetch(apiUrl)
        const pieChatData = await response.json()
        
        const testresult = pieChatData.map((x) => x.success)
            

        testresultData = testresult
        
        }