import mongoose from 'mongoose';
import validUrl from 'valid-url';
import constants from '../constants';
import generateHash from '../utils/generateHash';

const UrlShorten = mongoose.model('UrlShorten');

export default (app) => {
    app.get('/r/:code', async (req, res) => {
        const urlHash = req.params.code;
        const item = await UrlShorten.findOne({ urlHash: urlHash });

        if (item) {
            return res.redirect(item.originalUrl);
        } else {
            return res.redirect(constants.errorUrl);
        }
    });

    app.post('/api/url', async (req, res) => {
        const { originalUrl } = req.body;
        let shortUrl = constants.baseUrl;

        const urlHash = generateHash();

        if (validUrl.isUri(originalUrl)) {
            try {
                const item = await UrlShorten.findOne({ originalUrl: originalUrl });
                if (item) {
                    res.status(200).json(item);
                } else {
                    shortUrl = `${constants.baseUrl}/r/${urlHash}`;

                    const item = new UrlShorten({
                        originalUrl,
                        shortUrl,
                        urlHash
                    });

                    await item.save();
                        res.status(200).json({
                            originalUrl,
                            shortUrl,
                            urlHash
                        });
                }
            } catch (err) {
                res.status(400).json({
                    message: 'Something went wrong while creating the Shortened URL.'
                });
            }
        } else {
            res.status(400).json({ message: 'Please insert a valid URL.' });
        }
    });
};