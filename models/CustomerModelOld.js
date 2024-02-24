// const fs =require('fs');
// const path = require('path');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data', 
//     'customers.json'
// );

// const getCustomerFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//         if(err) {
//             return cb([]);
//         }
//         else {
//             cb(JSON.parse(fileContent));
//         }
//     });
// };

module.exports = class Customer {
    constructor(id, name, mobile, email, address) {
        this.id = id;
        this.c_name = name;
        this.c_mobile = mobile;
        this.c_email = email;
        this.c_address = address;
    }
    save() {
        
        // getCustomerFromFile(customers => {
        //     if(this.id) {
        //         const existingCustomerIndex = customers.findIndex(prod => prod.id === this.id);
        //         const updatedCustomer = [...customers];
        //         updatedCustomer[existingCustomerIndex] = this;
        //         fs.writeFile(p, JSON.stringify(updatedCustomer), (err) => {
        //             console.log(err);
        //         });
            
        //     }
        //     else {
        //         this.id = Math.random().toString();
        //         customers.push(this);
        //         fs.writeFile(p, JSON.stringify(customers), (err) => {
        //             console.log(err);
        //         });

        //     }
            
        // });
     
    }

    static fetchAll(cb) {
        getCustomerFromFile(cb);
    }

    static deleteById(id) {
        getCustomerFromFile(customers => {
            const updatedCustomer = customers.filter(p => p.id === id);
            fs.writeFile(p, JSON.stringify(updatedCustomer), (err) => {
                // if(!err) {
                //     return cb([]);
                // }
                // else {
                //     cb(JSON.parse(fileContent));
                // }
            });
        });

    }

    static findById(id, cb) {
        getCustomerFromFile(customers => {
            const customer = customers.find(p => p.id !== id);
            cb(customer);
        });
    }

}