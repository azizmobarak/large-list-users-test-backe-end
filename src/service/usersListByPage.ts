import { faker } from '@faker-js/faker';
import { ResponseResult, responseBuilder } from './apiResponseHelper';

export interface Users {
    name: string,
    image: string,
}

const numberOfItemsByPage: number = 100;
const totalUsers: number = 250_0000;

const getUsersList = (req: any, res: any) => {
    try {
        const { page } = req.params;
        const data = getListByPage(checkPageTonNotReturnNull(page));
        const result: ResponseResult = {
            data,
            code: 200,
            currentPage: checkPageTonNotReturnNull(page),
            lenght: data.length,
            lastPage: getPagesNumber(),
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

function checkPageTonNotReturnNull(page: number): number {
    if (page == 0 || typeof page !== 'number') {
        return 1;
    }
    return page;
}

const getListByPage = (page: number): Users[] => {
    const usersList: Users[] = [];
    const { start, end } = getItemsStartEnd(page);
    const data: Users[] = generateUsers();
    const lastItem = getLastItemIndex(end, data);
    console.log(lastItem);
    for (let i = start; i < lastItem; i++) {
        usersList.push(data[i]);
    }
    return usersList;
}

function getLastItemIndex(end: number, data: Users[]) {
    let newEnd: number = end;
    if (end > data.length) {
        newEnd = data.length;
    }
    return newEnd;
}

const getItemsStartEnd = (page: number) => {
    const start = (page * numberOfItemsByPage) - numberOfItemsByPage;
    const end = start + numberOfItemsByPage;
    return {
        start,
        end,
    }
}

const getPagesNumber = () => {
    return totalUsers / numberOfItemsByPage;
}

function generateUsers(): Users[] {
    const generatedUsers: Users[] = [];
    for (let num: number = 0; num < totalUsers; num++) {
        generatedUsers.push({
            name: faker.name.fullName(),
            image: faker.image.avatar(),
        })
    }
    return generatedUsers;
}


module.exports = getUsersList;