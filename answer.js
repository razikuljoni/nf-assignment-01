// Question No. 1: Value Detective
// Function takes any value and returns: <type of the value> | <truthy or falsy>
function describeValue(value) {
    let typeName = typeof value;
    let resultType = "";

    if (value) {
        resultType = "truthy";
    } else {
        resultType = "falsy";
    }

    return typeName + " | " + resultType;
}


// Question No. 2: Bangladesh Weekend Machine
// Function takes a day name and returns whether it is a Weekend, Working Day, or Invalid Day using switch case.
function getDayType(day) {
    let lowerDay = day.toLowerCase();

    switch (lowerDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}


// Question No. 3: Username Gatekeeper
// Function validates username based on length, spaces, and reserved words in strict order.
function validateUsername(username) {
    // 1. Shorter than 4 characters
    if (username.length < 4) {
        return "Too Short";
    }

    // 2. Contains a space
    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    // 3. Contains the reserved word "admin" (case-insensitive)
    let lowerUsername = username.toLowerCase();
    if (lowerUsername.includes("admin")) {
        return "Reserved Word";
    }

    // 4. Otherwise available
    return "Available";
}


// Question No. 4: Dhaka CNG Fare Meter
// Function calculates CNG fare based on distance, night charge, and waiting time.
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50; // Minimum fare covering first 2 km

    // Extra distance charge after first 2 km
    if (distance > 2) {
        let extraKm = distance - 2;
        fare = fare + (extraKm * 15);
    }

    // Waiting charge: 2 taka per minute
    let waitingCharge = waitingMinutes * 2;
    fare = fare + waitingCharge;

    // 20% extra charge at night
    if (isNight) {
        fare = fare + (fare * 0.20);
    }

    return fare;
}


// Question No. 5: Run Chase Commentator
// Arrow function to evaluate run chase status and return verdict.
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
