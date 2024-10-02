import { truncate } from 'fs';
import mongoose , { Schema , Document } from 'mongoose'


export interface Message extends Document{
    content : string;
    createdAt : Date;
}

const messageSchema : Schema<Message> = new Schema({
    content : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
        required : true
    }
})


export interface User extends Document{
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessage : boolean;
    messages : Message[];
}

const userSchema : Schema<User> = new Schema({
    username : {
        type : String,
        required : [true , 'username is required'],
        trim : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match : [/.+\@.+\..+/
        , 'email is required']
    },
    password : {
        type : String,
        required : [true , 'password is required'],
    },
    verifyCode : {
        type : String,
        required : [true , 'verifyCode is required'],
    },
    verifyCodeExpiry : {
        type : Date,
        default : Date.now,
        required : true
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    isAcceptingMessage : {
        type : Boolean,
        default : true
    },
    messages : [messageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>('User' ,userSchema))

export default UserModel;