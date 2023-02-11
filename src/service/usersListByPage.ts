import { faker } from '@faker-js/faker';
import { ResponseResult, responseBuilder } from './apiResponseHelper';

export interface Users {
    id: number,
    name: string,
    image: string,
}

const totalUsers: number = 50_000;

const getUsersList = (req: any, res: any) => {
    try {
        const result: ResponseResult = {
            data: generateUsers(),
            code: 200,
        }
        res.send(responseBuilder(result));
    } catch (error) {
        const result: ResponseResult = {
            error,
            code: 500,
        }
        res.send(responseBuilder(result));
    }
};

function generateUsers(): Users[] {
    const generatedUsers: Users[] = [];
    for (let num: number = 0; num < totalUsers; num++) {
        generatedUsers.push({
            id: num,
            name: faker.name.fullName(),
            image: faker.image.avatar(),
        })
    }
    return generatedUsers;
}


module.exports = getUsersList;