import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

export const getAllBlogsData = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export const saveBlog = (title, details, published, userId) => {
    const data = getAllBlogsData();
    data.push({ id: data.length + 1, title, details, published, userId });
    fs.writeFileSync(filePath, JSON.stringify(data));
}

export const published = (date) => {
    const months = ["Jan", "Feb", "March", "April", "May", 'June', "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = date.slice(0, 1);
    const currentMonth = months[month];
    return (`${currentMonth} ${date.slice(2, -5)}th, ${date.slice(-4)}`);
}

export const getBlogsById = id => {
    const data = getAllBlogsData();
    return data.filter(b => b.userId === id);
}