import { ObjectId } from "mongodb";



export interface project{

    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;

}