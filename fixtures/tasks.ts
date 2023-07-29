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