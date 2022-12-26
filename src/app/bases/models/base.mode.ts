export interface DataQueryInput {
    "Code":string;
    "Columns":any[];
    "Params":any[];
    "Filters":any[];
    "Groups":any[];
    "Sort":any[];
    "Take":100;
    "Skip":0;
}

export class MessagePageModule {
    date: any;
    day: any;
    titleMessage!: string;
    status!: string;
    major?: any;
    section?: any;
    term?: any;
  }

  export class StudentPageModule {
    [x: string]: any;
    imagesrc: any;
    fullname!: string;
    studentid!: string;
    personalid!: string;
    major!: string;
    section!: string;
    term!: string;
    star!: string;
  }