import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js'
import User from '../model/user.js';

import Post from '../model/post.js';

dotenv.config();

export const singupUser = async (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = { username: request.body.username, name: request.body.name, password: hashedPassword }

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}


export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(request.body.password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
            const newToken = new Token({ token: refreshToken });
            await newToken.save();
        
            response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.username });
        
        } else {
            response.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        response.status(500).json({ msg: 'error while login the user' })
    }
}

export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}

export const getUser = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.user.username });
        
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }

        response.status(200).json({
            name: user.name,
            username: user.username,
            profileImage: user.profileImage,
            library: user.library
        });
    } catch (error) {
        console.error('Error while getting user:', error);
        response.status(500).json({ msg: 'Error while getting user' });
    }
};

export const updateUser = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.user.username });
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }

        user.name = request.body.name;
        user.username = request.body.username;
        user.profileImage = request.body.profileImage;
        await user.save();

        response.status(200).json({ msg: 'User updated successfully' });
    }
    catch (error) {
        console.error('Error while updating user:', error);
        response.status(500).json({ msg: 'Error while updating user' });
    }

}


export const addLibrary = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.user.username });
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        user.library.push(request.body.postId);
        await user.save();

        response.status(200).json({ msg: 'Post added to library' });
    }   
    catch{
        console.error('Error while adding to library:', error);
        response.status(500).json({ msg: 'Error while adding to library' });
    }
}
export const addFavourites = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.user.username });
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        user.favourites.push(request.body.postId);
        await user.save();

        response.status(200).json({ msg: 'Post added to library' });
    }   
    catch{
        console.error('Error while adding to library:', error);
        response.status(500).json({ msg: 'Error while adding to library' });
    }
}


export const getLibraryPosts = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.user.username });
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        const posts = await Post.find({ _id: { $in: user.library } });
        response.status(200).json(posts);
    }
    catch (error) {
        console.error('Error while getting library posts:', error);
        response.status(500).json({ msg: 'Error while getting library posts' });
    }
}
export const getFavourites = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.user.username });
        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }
        const favourite = await Post.find({ _id: { $in: user.favourites } });
        response.status(200).json(favourite);
    }
    catch (error) {
        console.error('Error while getting library posts:', error);
        response.status(500).json({ msg: 'Error while getting library posts' });
    }
}