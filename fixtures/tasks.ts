
export interface ITask {
    id : number;
    title : string;
    done : boolean;
}

export const tasks = [
    { id: 1, title: '자기', done : false },
    { id: 2, title: '일어 나기', done : false },
  ] satisfies ITask[]