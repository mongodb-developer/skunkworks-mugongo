import { connectToDatabase } from "../../util/mongodb";


export default async function handler(req, res) {
  
    const { db } = await connectToDatabase();
  
    if (req.method === "POST") {
        const data = req.body;  
        const result = await db.collection("event").insertOne(data);

        res.status(401).send('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=/event"></head>Event Submitted Successful</html>');
        
        //res.status(201).json({ message: "Event inserted successfully!" }).redirect(307, '/event');

        }
}