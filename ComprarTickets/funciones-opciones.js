function selection(){
    select.value === '1' && chartClick(chart1)
    select.value === '2' && chartClick(chart2)
    select.value === '3' && chartClick(chart3)
}

select.addEventListener('change', selection)