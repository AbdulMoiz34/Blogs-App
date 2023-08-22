import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcryptjs';

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export const getAll = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export const getByEmail = (email) => {
    const data = getAll();
    return data.find(u => u.email === email);
}

export const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}

export const save = async (email, password, fName, lName) => {
    const found = getByEmail(email);
    if (found) {
        throw new Error("User already exist.");
    }
    const data = getAll();
    const hashedPassword = await hash(password, 12);
    data.push({
        id: data.length + 1,
        email,
        fName, lName,
        password: hashedPassword
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}