import { faker } from '@faker-js/faker';

export interface Users {
    name: string,
    image: string,
}

const getUsersList = (req: any, res: any) => {
    try {
        const data = generateUsers();
        res.send({
            data,
            code: 200,
        });
    } catch (error) {
        res.send({
            error,
            code: 500,
        });
    }
};

function generateUsers(): Users[] {
    const generatedUsers: Users[] = [];
    for (let num: number = 0; num < 50000; num++) {
        generatedUsers.push({
            name: faker.name.firstName(),
            image: faker.image.avatar(),
        })
    }
    return generatedUsers;
}

module.exports = getUsersList;