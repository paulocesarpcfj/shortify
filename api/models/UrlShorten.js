import mongoose from 'mongoose';

const { Schema } = mongoose;

const URLShortenSchema = new Schema({
    originalUrl: String,
    shortUrl: String,
    urlHash: String,
});

mongoose.model('UrlShorten', URLShortenSchema);