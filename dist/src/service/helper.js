"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const getUsersList = (req, res) => {
    try {
        const data = generateUsers();
        res.send({
            data,
            code: 200,
        });
    }
    catch (error) {
        res.send({
            error,
            code: 500,
        });
    }
};
function generateUsers() {
    const generatedUsers = [];
    for (let num = 0; num < 50000; num++) {
        generatedUsers.push({
            name: faker_1.faker.name.firstName(),
            image: faker_1.faker.image.avatar(),
        });
    }
    return generatedUsers;
}
module.exports = getUsersList;
