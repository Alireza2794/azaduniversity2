export interface DataQueryInput {
    "Code":string,
    "Columns":any[],
    "Params":any[],
    "Filters":any[],
    "Groups":any[],
    "Sort":any[],
    "Take":100,
    "Skip":0
}

export class UserModel {
    authority: string[] = [];
    firstName: string []= [];
    id: number []= [];
    lastName: string[] = [];
    token: string[] =[] ;
    username: string[] =[] ;
    information: UserInformationModel = new UserInformationModel();
}

export class UserInformationModel {
    birthDate: string[] =[] ;
    credit: number[] = [];
    email: string []=[] ;
    firstName: string []= [];
    id: number []= [];
    lastName: string[] = [];
    mobile: string []= [];
    nationalCode: string[] = [];
    profileImage: string []= [];
    score: number[] = [];
    username: string[] =[] ;
    gender: string[] =[] ;
    password: string []= [];
    coin: number = 0;
}