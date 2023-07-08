import { rest } from 'msw'

export interface ITask {
    id : number;
    title : string;
    done : boolean;
}

export const tasks = [
    { id: 1, title: '자기', done : false },
    { id: 2, title: '일어 나기', done : false },
  ] satisfies ITask[]


const getTasks = () => {
    return rest.get<ITask>('https://localhost:3000/tasks', (_, res, ctx) => {

        return res(ctx.status(200), ctx.json(tasks))
    })
}

const tasksHandlers = [getTasks()]

export default tasksHandlers