//This is my learning enviroment on how to use models from HuggingFace :)

// 1. Import the libraries

import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv"


dotenv.config()

// 2. Add my token

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN

// 3. initialize the HF refrence class

const inference = new HfInference(HF_ACCESS_TOKEN)

// 4. Define the model

const model = "nlpconnect/vit-gpt2-image-captioning";

const imageUrl = "https://i.pinimg.com/originals/4e/97/d0/4e97d0f7c6d167c1eb29e920220cafa3.png"

// 5. Fetch the data

const response = await fetch(imageUrl)

//*** this data representation is what will be passed down into the model ***//
const imageBlob = await response.blob() 

// 6. For this, we will be using a imageToText function to get an image caption

//*** Think of inference as a prediction :) ***//
const result = await inference.imageToText({
    data: imageBlob,
    model: model,
});

// 7. Log the result :)
console.log(result)