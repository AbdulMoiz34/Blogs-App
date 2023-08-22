import { published, saveBlog } from "@/services/blogs";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { title, details, published: date, userId } = req.body;
        // console.log(req.body)
        const publishedDate = published(date);
        // console.log(publishedDate);
        saveBlog(title, details, publishedDate, userId);
        return res.status(201).send();
    }
    res.status(404).send();
}
export default handler;