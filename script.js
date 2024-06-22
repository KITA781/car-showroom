// Функція для скидання вигляду
function resetView() {
    document.getElementById("carSection").style.display = "none";
    document.getElementById("specialOffers").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("employees").style.display = "none";
    // Скидання всіх розділів
}

// Функція для показу автомобілів
function showCars(brand) {
    resetView();
    var carSection = document.getElementById('carSection');
    carSection.style.display = 'block';
    carSection.scrollIntoView({ behavior: 'smooth' });
    var carsData = getCarsData(brand);
    carSection.innerHTML = '';

    carsData.forEach(function (car) {
        var carElement = document.createElement('div');
        carElement.classList.add('car');

        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + car.image;
        imgElement.alt = car.model;
        carElement.appendChild(imgElement);

        var detailsElement = document.createElement('div');
        detailsElement.classList.add('car-details');

        var brandModelElement = document.createElement('h3');
        brandModelElement.textContent = car.brand + ' ' + car.model;
        detailsElement.appendChild(brandModelElement);

        var yearElement = document.createElement('p');
        yearElement.textContent = 'Рік випуску: ' + car.year;
        detailsElement.appendChild(yearElement);

        var characteristicsElement = document.createElement('p');
        characteristicsElement.textContent = 'Характеристики: ' + car.characteristics;
        detailsElement.appendChild(characteristicsElement);

        var priceElement = document.createElement('p');
        priceElement.textContent = 'Ціна: ' + car.price + ' грн.';
        detailsElement.appendChild(priceElement);

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = car.description;
        detailsElement.appendChild(descriptionElement);

        carElement.appendChild(detailsElement);
        carSection.appendChild(carElement);
    });
}

function getCarsData(brand) {
    if (brand === 'bmw') {
        return [
            { brand: 'BMW', model: 'X5', year: 2024, characteristics: 'Потужність: 300 к.с., об\'єм двигуна: 3.0 л', price: 5000000, image: 'bmw_x5.jpg.jfif', description: 'Відмінний кросовер для комфортних поїздок.' },
            { brand: 'BMW', model: 'M5', year: 2023, characteristics: 'Потужність: 600 к.с., об\'єм двигуна: 4.4 л', price: 8000000, image: 'bmw_m5.jpg.jfif', description: 'Спортивний седан для справжніх цінителів потужності.' },
        ];
    } else if (brand === 'audi') {
        return [
            { brand: 'Audi', model: 'A4', year: 2024, characteristics: 'Потужність: 200 к.с., об\'єм двигуна: 2.0 л', price: 3500000, image: 'audi_a4.jpg.jfif', description: 'Стильний седан з передовими технологіями.' },
            { brand: 'Audi', model: 'Q7', year: 2023, characteristics: 'Потужність: 300 к.с., об\'єм двигуна: 3.0 л', price: 6000000, image: 'audi_q7.jpg.jfif', description: 'Просторий позашляховик для активного відпочинку.' },
        ];
    } else if (brand === 'mercedes') {
        return [
            { brand: 'Mercedes', model: 'C-Class', year: 2024, characteristics: 'Потужність: 250 к.с., об\'єм двигуна: 2.0 л', price: 4000000, image: 'mercedes_c-class.jpg.jfif', description: 'Елегантний седан з високим рівнем комфорту.' },
            { brand: 'Mercedes', model: 'S-Class', year: 2023, characteristics: 'Потужність: 450 к.с., об\'єм двигуна: 4.0 л', price: 9000000, image: 'mercedes_s-class.jpg.jfif', description: 'Представницький седан для справжніх гурманів.' },
        ];
    } else {
        return [];
    }
}

function showSpecialOffers() {
    resetView();
    var specialOffersSection = document.getElementById('specialOffers');
    specialOffersSection.style.display = 'block';
}

function showContact() {
    resetView();
    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'block';
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
function showEmployees() {
    resetView();
    var employeesSection = document.getElementById('employees');
    employeesSection.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".contact-container form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            sendEmail();
        });
    }
});

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
        console.log("Ім'я: " + name);
        console.log("Email: " + email);
        console.log("Повідомлення: " + message);
        alert("Ваше повідомлення надіслано! Ми зв'яжемося з вами найближчим часом.");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Будь ласка, заповніть всі поля форми.");
    }
}

function toggleEmployeeDetails(employeeId) {
    var employeeDetails = document.getElementById(employeeId);
    if (employeeDetails.style.display === "none" || employeeDetails.style.display === "") {
        employeeDetails.style.display = "block";
    } else {
        employeeDetails.style.display = "none";
    }
}