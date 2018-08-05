document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(){
    console.log("Button Clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json', true);
    xhr.onload = function () {
        if(this.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText)
            const output = `
                <ul>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>                    
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

function loadCustomers(e){
    console.log("Button Clicked")
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json', true);
    xhr.onload = function () {
        if(this.status === 200) {
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            // const output = `
            //     <ul>
            //         <li>Name: ${customer.name}</li>
            //         <li>Company: ${customer.company}</li>                    
            //     </ul>
            // `;
            let output = '';
            customers.forEach(function(customer){
            output += `
                <ul>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>                    
                </ul>
            `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}