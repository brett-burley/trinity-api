const express = require('express');
const speech = require('../../lib/textToSpeech/textToSpeech');
const { getLineAudio, saveAudio, saveChar, charExists } = require('../../lib/fileSystem/fileSystem');
const _ = require('lodash');

const router = express.Router();


router.post('/text', async (req, res) => {
  try {
    const { text } = req.body;
  
    // SAVE LINE
    const data = await speech.mandarinToMp3(text);
    const info = await saveAudio(text, data);

    if(_.isEmpty(info)) {
      return res.send(false);
    }
    
    await saveChars(text);
    
    res.send(true);  
  } catch(err) {
    console.log(err);
    res.send(false);
  }
})



// Create new character audio file
router.post('/char', async (req, res) => {
  try {
    const { character } = req.body;

    if(charExists(character)) {
      return res.send(true);      
    }

    const data = await chiToMp3(character);
    await saveChar(character, data);

    res.send(true);
  } catch(err) {
    console.error(err);
    res.send(false);
  }
})


async function saveChars(text)
{
  try {
    const chars = text.split('');
    chars.forEach(
      async(character, index) => {
        if(index < chars.length) {
          if(!charExists(character)) {      
            const data = await chiToMp3(character);
            await saveChar(character, data);
            return true;
          } else {
            console.log(character + '.mp3 already exists');
            return false;
          }
        }
    });
  } catch(err) {
    console.error(err);
    throw new Error('Could not save Char');
  }
}

module.exports = router;
