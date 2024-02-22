const {translate} = require('@vitalets/google-translate-api');

const translateController = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Missing text for translation.' });
    }

    try {
        // Translate the text from English to French
        const translation = await translate(text, { from: 'en', to: 'fr' });
        res.json({ translation: translation.text });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Failed to translate text.' });
    }
};


module.exports = { translateController };