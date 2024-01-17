const Usser = require('../models/user');
const bcrypt = require('bcrypt');
class UserService {

    async createUser(data) {
        const { firstName, lastName, email, password, phone, city } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Usser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            city: city,
            password: hashedPassword,
            createdAt: Date()
        });
        return await newUser.save()
            .then((res) => {
                const name = `${newUser.firstName + ' ' + newUser.firstName}`
                return { message: `User ${name} Created successfully`, userID: newUser._id, name: name, statusCode: 200 }
            }).catch((e) => {
                return { error: e.message, statusCode: 500 }
            })

    }

}

module.exports = new UserService();
