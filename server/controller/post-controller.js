import Post from '../model/post.js';

// Create a new post
export const createPost = async (request, response) => {
    try {
        const { title, description, picture, username, categories, chapters } = request.body;

        // Create and save a new post with all fields
        const post = new Post({ title, description, picture, username, categories, chapters });
        await post.save();

        response.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        response.status(500).json({ message: 'Failed to create post', error });
    }
}

// Update an existing post
export const updatePost = async (request, response) => {
    try {
        const { id } = request.params;
        const { title, description, picture, username, categories, chapters } = request.body;

        // Find the post by ID
        const post = await Post.findById(id);

        if (!post) {
            return response.status(404).json({ message: 'Post not found' });
        }

        // Update the post with new data
        const updatedPost = await Post.findByIdAndUpdate(id, { $set: { title, description, picture, username, categories, chapters } }, { new: true });

        response.status(200).json({ message: 'Post updated successfully', updatedPost });
    } catch (error) {
        response.status(500).json({ message: 'Failed to update post', error });
    }
}

// Delete a post
export const deletePost = async (request, response) => {
    try {
        const { id } = request.params;
        
        const post = await Post.findById(id);
        if (!post) {
            return response.status(404).json({ message: 'Post not found' });
        }
        await Post.findByIdAndDelete(id); 

        response.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        response.status(500).json({ message: 'Failed to delete post', error });
    }
}

// Get a single post by ID
export const getPost = async (request, response) => {
    try {
        const { id } = request.params;

        // Find the post by ID
        const post = await Post.findById(id);
        if (!post) {
            return response.status(404).json({ message: 'Post not found' });
        }

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json({ message: 'Failed to retrieve post', error });
    }
}

// Get all posts with optional filters
export const getAllPosts = async (request, response) => {
    const { username, category } = request.query;

    try {
        let posts;

        if (username) {
            posts = await Post.find({ username });
        } else if (category) {
            posts = await Post.find({ categories: category });
        } else {
            posts = await Post.find({});
        }

        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json({ message: 'Failed to retrieve posts', error });
    }
}

export const getUserPost = async (request, response) => {
    try {
        const posts = await Post.find({ username: request.user.username });
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}