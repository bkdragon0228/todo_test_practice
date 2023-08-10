import { AdviceProps } from "../src/components/advice/Advice";
import { StateProps } from "../src/store/_reducer/todo";

export interface ITask {
    id : number;
    title : string;
    done : boolean;
}

export const tasks = [
    { id: 1, title: '자기', done : false },
    { id: 2, title: '일어 나기', done : false },
  ] satisfies ITask[]


  export const initialState: StateProps = [
    { description: 'sample', done: false, id: '1' },
  ];


export const initalAdvice : Pick<AdviceProps, 'advice' | 'id'> = {
  id : 1,
  advice : 'Happiness is everywhere and nowhere'
}

export const dummyCalender = `[[{"day":"01","month":"10","year":"2023","name":"Sun"},{"day":"02","month":"10","year":"2023","name":"Mon"},{"day":"03","month":"10","year":"2023","name":"Tue"},{"day":"04","month":"10","year":"2023","name":"Wed"},{"day":"05","month":"10","year":"2023","name":"Thu"},{"day":"06","month":"10","year":"2023","name":"Fri"},{"day":"07","month":"10","year":"2023","name":"Sat"}],[{"day":"08","month":"10","year":"2023","name":"Sun"},{"day":"09","month":"10","year":"2023","name":"Mon"},{"day":"10","month":"10","year":"2023","name":"Tue"},{"day":"11","month":"10","year":"2023","name":"Wed"},{"day":"12","month":"10","year":"2023","name":"Thu"},{"day":"13","month":"10","year":"2023","name":"Fri"},{"day":"14","month":"10","year":"2023","name":"Sat"}],[{"day":"15","month":"10","year":"2023","name":"Sun"},{"day":"16","month":"10","year":"2023","name":"Mon"},{"day":"17","month":"10","year":"2023","name":"Tue"},{"day":"18","month":"10","year":"2023","name":"Wed"},{"day":"19","month":"10","year":"2023","name":"Thu"},{"day":"20","month":"10","year":"2023","name":"Fri"},{"day":"21","month":"10","year":"2023","name":"Sat"}],[{"day":"22","month":"10","year":"2023","name":"Sun"},{"day":"23","month":"10","year":"2023","name":"Mon"},{"day":"24","month":"10","year":"2023","name":"Tue"},{"day":"25","month":"10","year":"2023","name":"Wed"},{"day":"26","month":"10","year":"2023","name":"Thu"},{"day":"27","month":"10","year":"2023","name":"Fri"},{"day":"28","month":"10","year":"2023","name":"Sat"}],[{"day":"29","month":"10","year":"2023","name":"Sun"},{"day":"30","month":"10","year":"2023","name":"Mon"},{"day":"31","month":"10","year":"2023","name":"Tue"},{"day":"01","month":"11","year":"2023","name":"Wed"},{"day":"02","month":"11","year":"2023","name":"Thu"},{"day":"03","month":"11","year":"2023","name":"Fri"},{"day":"04","month":"11","year":"2023","name":"Sat"}],[{"day":"05","month":"11","year":"2023","name":"Sun"},{"day":"06","month":"11","year":"2023","name":"Mon"},{"day":"07","month":"11","year":"2023","name":"Tue"},{"day":"08","month":"11","year":"2023","name":"Wed"},{"day":"09","month":"11","year":"2023","name":"Thu"},{"day":"10","month":"11","year":"2023","name":"Fri"},{"day":"11","month":"11","year":"2023","name":"Sat"}]]`