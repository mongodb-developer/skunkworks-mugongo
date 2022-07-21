import { connectToDatabase } from "../../util/mongodb";


export default async function handler(req, res) {
  
    const { db } = await connectToDatabase();
  
    if (req.method === "POST") {
        const data = req.body; 
           
        const result = await db.collection("testform").insertOne(data);
        console.log(result);
        
        res.status(201).json({ message: "Data inserted successfully!" });

        }
}