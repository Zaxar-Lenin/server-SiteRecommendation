import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import resolvers from "./resolvers";
import { readFileSync } from 'fs';

dotenv.config()
const app: express.Application = express()


///COMMIT and push!!!!!!!!!!!!!such user has exist already
///COMMIT and push!!!!!!!!!!!!!
///COMMIT and push!!!!!!!!!!!!!
///COMMIT and push!!!!!!!!!!!!!

app.use(express.json())

app.use(cors())


interface MyContext {
    models: {
        USER: string
    }
}

const typeDefs = readFileSync('src/schema/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({typeDefs, resolvers})


const portUrl = process.env.PORT || "8080"

async function start() {

    if (process.env.MONGODB_URI) {
        mongoose.connect(
            process.env.MONGODB_URI
        )
            .then(() => {
                console.log("connect with DB")

            })
            .catch((e) => {
                console.log("don't connect with DB")
                console.log(e)

            })
    }

    const {url} = await startStandaloneServer(server, {
        context: async ({req, res}) => {



            return { }
        },
        listen: {port: Number(portUrl)},
    });
    console.log(`🚀  Server ready at: ${url}`);
}

start()