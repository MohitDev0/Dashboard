
let employee = [
    {

        name: "Mohit",
        age: 21,
        department: "Frontend",
        status: "Active",
        phone_no: 3211233,
        emailAddress: "mohit@gmail.com",
    },
    {

        name: "Yogesh",
        age: 25,
        department: "Backend",
        status: "Active",
        phone_no: 32114233,
        emailAddress: "yogesh@gmail.com",
    },
    {

        name: "Rahul",
        age: 20,
        department: "Testing",
        status: "Active",
        phone_no: 3223433,
        emailAddress: "rahul@gmail.com",
    },
    {
        name: "Chinu",
        age: 21,
        department: "Deployment",
        status: "Active",
        phone_no: 3211233,
        emailAddress: "chinu@gmail.com",
    },
    {

        name: "Sumit",
        age: 21,
        department: "Frontend",
        status: "Active",
        phone_no: 3211233,
        emailAddress: "sumit@gmail.com",
    },
    {

        name: "Naman",
        age: 26,
        department: "Backend",
        status: "Active",
        phone_no: 100093,
        emailAddress: "naman@gmail.com",
    },
    {

        name: "Abhishek",
        age: 29,
        department: "Testing",
        status: "Active",
        phone_no: 14311233,
        emailAddress: "Abhishek@gmail.com",
    },
    {

        name: "Sahil",
        age: 22,
        department: "Development",
        status: "Not Active",
        phone_no: 3211233,
        emailAddress: "sahil@gmail.com",
    },
    {
        name: "Ashish",
        age: 25,
        department: "Deployment",
        status: "Active",
        phone_no: 430009,
        emailAddress: "ashish@gmail.com",
    },
    {

        name: "Monu",
        age: 27,
        department: "Frontend",
        status: "Active",
        phone_no: 783322,
        emailAddress: "monu@gmail.com",
    },
    {
        name: "Nissar",
        age: 32,
        department: "Frontend",
        status: "Active",
        phone_no: 9128341,
        emailAddress: "nissar@gmail.com",
    },
    {
        name: "Gurmeet",
        age: 33,
        department: "Backend",
        status: "Active",
        phone_no: 903453,
        emailAddress: "gurmeet@gmail.com",
    },
    {

        name: "Mehul",
        age: 21,
        department: "Testing",
        status: "Not Active",
        phone_no: 8734534,
        emailAddress: "mehul@gmail.com",
    },
    {

        name: "Rohit",
        age: 28,
        department: "Testing",
        status: "Active",
        phone_no: 873453,
        emailAddress: "rohit@gmail.com",
    },
    {
        name: "Rishabh",
        age: 28,
        department: "Deployment",
        status: "Not Active",
        phone_no: 98344533,
        emailAddress: "rishabh@gmail.com",
    },
    {

        name: "Sachin",
        age: 30,
        department: "Frontend",
        status: "Active",
        phone_no: 987986,
        emailAddress: "sachin@gmail.com",
    },
    {

        name: "Rajan",
        age: 26,
        department: "Backend",
        status: "Active",
        phone_no: 9032193,
        emailAddress: "rajan@gmail.com",
    },
    {

        name: "Mayank",
        age: 29,
        department: "Testing",
        status: "Active",
        phone_no: 3342342,
        emailAddress: "mayank@gmail.com",
    },
    {

        name: "Vikram",
        age: 29,
        department: "Development",
        status: "Not Active",
        phone_no: 4234325,
        emailAddress: "vikram@gmail.com",
    },
    {
        name: "Vinay",
        age: 27,
        department: "Deployment",
        status: " Not Active",
        phone_no: 238905,
        emailAddress: "vinay@gmail.com",
    },
    {

        name: "Sachin Khatak",
        age: 35,
        department: "Frontend",
        status: "Not Active",
        phone_no: 11783322,
        emailAddress: "sachinKhatak@gmail.com",
    },
    {
        name: "Aman",
        age: 24,
        department: "Frontend",
        status: "Active",
        phone_no: 9435128341,
        emailAddress: "aman@gmail.com",
    },
];
for (let i = 0; i < localStorage.length; i++) {
    let user = localStorage.key(i);
    let temp = [];
    temp.push(JSON.parse(localStorage.getItem(user)));
    employee = temp;
}



export { employee };

