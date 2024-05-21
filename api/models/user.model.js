import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4Nee90u8WFUMU9H6rFGzhGTZQxP66dQR5A&usqp=CAU'
    },
},{timestamps: true})

const User = mongoose.model('User',userSchema)

// userSchema.methods.isValidPassword = async function(password){
//     return bcrypt.compare(password,this.password)
// }

export default User;