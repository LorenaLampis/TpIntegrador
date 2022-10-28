
function chartOver(chart){
    chart.classList.replace('border-muted','border-primary')
}

function chartLeave(chart){
    chart.classList.replace('border-primary','border-muted')
}

function chartClick(chart){
    chart.classList.replace('border-primary','border-success')
    chart.classList.replace('border-primary','border-success')

    select.value = 
        chart.id === 'chart1' && '1' ||
        chart.id === 'chart2' && '2' ||
        chart.id === 'chart3' && '3' 

    for (let item of charts){
        if (item.id !== chart.id) {
            item.classList.replace('border-success','border-muted')
        }
}
}


function assignEvents (chart){
    chart.addEventListener('mouseover', () => chartOver(chart))
    chart.addEventListener('mouseleave', () => chartLeave(chart))
    chart.addEventListener('click', () => chartClick(chart))
}

assignEvents(chart1)
assignEvents(chart2)
assignEvents(chart3)