import { save } from "@/services/users";

const handler = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(404).send();
    }
    const { email, password, fName, lName } = req.body;
    // console.log(req.body);
    try {
        save(email, password, fName, lName);
        return res.status(201).send();
    } catch (err) {
        return res.status(400).json({ message: err });
    }
}
export default handler;