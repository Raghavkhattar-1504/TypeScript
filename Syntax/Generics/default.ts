//we here set a default type for generic which is string

interface Response1<T = string>{
    data: T;
    status1: number;
}

const resposne1: Response1 = {data: "Success", status1:200}
const response2 :Response1<number> = {data:42, status1:200}