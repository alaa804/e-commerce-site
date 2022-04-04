import bcrypt from 'bcryptjs'

const users = [
    {
        name :'Admin User',
        email : 'admin@example.com',
        password : bcrypt.hashSync('123456' ,10),
        isAdmin : true
    },

    {
        name :'Alaa Taguiaa',
        email : 'Alaa@example.com',
        password :bcrypt.hashSync('123456' ,10),
       
    },

    {
        name :'Jane Doe',
        email : 'Jane@example.com',
        password :bcrypt.hashSync('123456' ,10),
    },
]

export default users