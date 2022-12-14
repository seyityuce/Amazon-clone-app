const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51Lhr9WCYlFb3KzxJS1RgPfxCLFE0h0uG963Dlc4ouFyLuDUpgvqKE9SEJAGco4Rv8GqHFHOrZiYbmfRlmJXfky7X00qJJfvGED")

//API

//App config

const app = express()

//Middlewares
app.use(cors({ origin: true}))
app.use(express.json())
//API routes
app.get("/", (request, response) => response.status(200).send("hiiiiiii"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total

    console.log("payment request recieved", total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)