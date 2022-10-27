function clean(e){
    e.preventDefault()
    form.namevalue.value = ''
    form.lastnamevalue.value = ''
    form.mailvalue.value = ''
    form.quantityvalue.value = ''
    form.options.value = ''
    alert.innerText = `Total a pagar: $`

    for (let item of charts){
        if (item.id === chart1.id){
            item.classList.replace('border-success','border-muted')
        }
        if (item.id === chart2.id){
            item.classList.replace('border-success','border-muted')
        }
        if (item.id === chart3.id){
            item.classList.replace('border-success','border-muted')
        }
    }
}

function checkError(){
    let info = false

    const optionvalue =
        form.options.value === '1' && 'Estudiante' ||
        form.options.value === '2' && 'Trainee' ||
        form.options.value === '3' && 'Junior' 

    if (form.namevalue.value && form.lastnamevalue.value && form.mailvalue.value && form.quantityvalue.value && optionvalue){
        info = {
            namevalue: form.namevalue.value,
            lastnamevalue: form.lastnamevalue.value,
            mailvalue: form.mailvalue.value,
            quantityvalue: form.quantityvalue.value,
            optionvalue: optionvalue
        }

    } else{
        Swal.fire({
            icon: 'error',
            title: 'No podemos completar tu solicitud',
            text: 'Todos los campos son requeridos'
        })
    }

    return info
}



function totalPay(){
    let pay
    if (form.options.value === '1'){
        pay = form.quantityvalue.value * 200 * 0.2
    }
    if (form.options.value === '2'){
        pay = form.quantityvalue.value * 200 * 0.5
    }
    if (form.options.value === '3'){
        pay = form.quantityvalue.value * 200 * 0.85
    }
    return pay
}

function success(){
    window.location.href= 'success.html'
}

function cancel(){
    window.location.href= 'Comprar tickets.html'
}


function resume(e){
    e.preventDefault() 
    checkError()
    const total = totalPay()
    alert.innerText = `Total a pagar: $ ${total}`
    alert.style.fontWeight = 'bold'
    if (total){
        Swal.fire({
        position: 'top',
        title: `El valor final de las entradas es $: ${total}`,
        showCancelButton: true,
        confirmButtonText: 'Ok',
        denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                success()
            } else if (result.isDenied) {
                cancel()
            }
        }) 
    }
}


button1.onclick = (e) => {clean(e)}
button2.onclick = (e) => {resume(e)}