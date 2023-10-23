import bcrypt from 'bcrypt';

export const Hash = async (password)=>{
    const saltRounds = 10
    const hashedPassword =await bcrypt.hash(password, saltRounds);
    return hashedPassword
}
export const isValid = (password, userPassword) => {
    return  bcrypt.compare(password, userPassword);
}