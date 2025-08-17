'use server';

import { z } from "zod";

const names = [];

export default async function serverAction(prev, newState) {
    const name = newState.get('name');

    // Define a schema
    const userSchema = z.object({
        name: z.string().min(5, {message: 'Kokote'})
    });
    
    const result = userSchema.safeParse({name: name})    

    if (result.success) {
        console.log(newState.get('name'));
        names.push(newState.get('name'))
    } else {
        console.log(result)
        names.push(result.error.issues[0].message)
    }

    return {status: "ok", list: names};
}