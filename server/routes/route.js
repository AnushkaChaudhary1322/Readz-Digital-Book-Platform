import express from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts , getUserPost} from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
import { loginUser, singupUser, logoutUser, getUser, updateUser, getLibraryPosts, addLibrary, getFavourites, addFavourites } from '../controller/user-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);
router.get('/post', authenticateToken, getUserPost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);

router.get('/user', authenticateToken, getUser);
router.put('/user/update', authenticateToken, updateUser);
router.get('/user/library', authenticateToken, getLibraryPosts);
router.post('/user/add-library', authenticateToken, addLibrary);

router.post('/user/add-favourites', authenticateToken, addFavourites);
router.get('/user/favourites', authenticateToken, getFavourites);

export default router;