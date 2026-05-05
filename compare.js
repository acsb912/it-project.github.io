
const carsData = {
    bmw: {
        name: "BMW M4 Competition",
        hp: "510 HP",
        torque: "650 Nm",
        zeroToHundred: "3.5 sec",
        price: "$76,800",
        img: "./bmw.jpeg" 
    },
    merc: {
        name: "Mercedes-AMG C63",
        hp: "469 HP",
        torque: "650 Nm",
        zeroToHundred: "3.9 sec",
        price: "$72,900",
        img: "./merc.jpeg"
    },
    audi: {
        name: "Audi RS7",
        hp: "621 HP",
        torque: "850 Nm",
        zeroToHundred: "3.4 sec",
        price: "$131,000",
        img: "audi.jpeg"
    },
    Lamborghini: {
        name: "Lamborghini Huracán EVO",
        hp: "631 HP",
        torque: "600 Nm",
        zeroToHundred: "2.9 sec",
        price: "$248,000",
        img: "Lamborghini .jpeg"
    },
    Porsche: {
        name: "Porsche 911 Turbo S",
        hp: "701 HP",
        torque: "800 Nm",
        zeroToHundred: "2.5 sec",
        price: "$272,000",
        img: "Porsche.jpeg"
    },
    Nissan: {
        name: "Nissan GT-R",
        hp: "565 HP",
        torque: "633 Nm",
        zeroToHundred: "2.9 sec",
        price: "$220,000",
        img: "Nissan.jpeg"
    },
    Toyota: {
        name: "Toyota Supra",
        hp: "382 HP",
        torque: "500 Nm",
        zeroToHundred: "4.1 sec",
        price: "$55,000",
        img: "Toyota.jpeg"
    },
    Chevrolet: {
        name: "Chevrolet Corvette",
        hp: "495 HP",
        torque: "637 Nm",
        zeroToHundred: "3.0 sec",
        price: "$75,000",
        img: "Chevrolet.jpeg"
    }
    
};

const car1Select = document.getElementById('car1Select');
const car2Select = document.getElementById('car2Select');
const grid = document.getElementById('comparisonGrid');

function updateComparison() {
    const car1 = carsData[car1Select.value];
    const car2 = carsData[car2Select.value];

    if (car1 && car2) {
        grid.innerHTML = `
            ${createCard(car1)}
            ${createCard(car2)}
        `;
    }
}

function createCard(car) {
    return `
        <div class="car-card">
            <img src="${car.img}" alt="${car.name}">
            <h3>${car.name}</h3>
            <div class="spec-row"><span class="spec-label">Horsepower</span><span class="spec-value">${car.hp}</span></div>
            <div class="spec-row"><span class="spec-label">Torque</span><span class="spec-value">${car.torque}</span></div>
            <div class="spec-row"><span class="spec-label">0-100 km/h</span><span class="spec-value">${car.zeroToHundred}</span></div>
            <div class="spec-row"><span class="spec-label">Price</span><span class="spec-value">${car.price}</span></div>
        </div>
    `;
}

car1Select.addEventListener('change', updateComparison);
car2Select.addEventListener('change', updateComparison);