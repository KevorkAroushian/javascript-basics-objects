let user = {
    name: "Kevork",
    age: 23,
    job:"IT Specialist"
};

let output = document.getElementById("output");

output.textContent=
    user.name + " is " + user.age + " years old and is an " + user.job + ".";



let car = {
    brand:"bmw",
    model:"m3",
    year:2024
};

output.textContent =
    car.brand + " " + car.model +" "+ "-" + " "+car.year;