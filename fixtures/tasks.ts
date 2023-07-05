
export interface ITask {
    id : number;
    title : string;
}

export const tasks = [
    { id: 1, title: '자기' },
    { id: 2, title: '일어 나기' },
  ] satisfies ITask[]

