const fs = require('node:fs');
const path = require('node:path');

const dirname = '/home/bb/Code/trinity/server/public/';

function saveAudio(text, data)
{
  try {
    const info = {
      save: false,
      exists: false
    };
    const filePath = path.join(dirname, `${text}.mp3`);
    const exists = fs.existsSync(filePath);
    if(!exists) {
      fs.writeFileSync(filePath, data, { encoding: 'base64' });
      console.log(`Writing ${filePath}`);
      info.saved = true;
    } else {
      console.log(`Exists ${filePath}`);
      info.exists = true;
    }
    
    return info;
  } catch(err) {
    console.error(err);
    return null;
  }
}


function charExists(character)
{
  const code = character.codePointAt(0);
  const filePath = path.join(dirname, `chars/${code}.mp3`);
  return fs.existsSync(filePath);
}


function deleteOld()
{
  try {
    const allFiles = fs.readdirSync(dirPath);
    const files = allFiles.filter(file => file !== 'chars');

    files.forEach(file => fs.rmSync(`${dirPath}${file}`));

    return true;
  } catch(err) {
    console.error(err);
    return false;
  }
}


async function saveChar(character, data)
{
  try {
    const code = character.charCodeAt(0);
    const filePath = path.join(dirname, `chars/${code}.mp3`);
    if(!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, data, 'base64');
      console.log(`Char SAVED: ${code}.mp3`);
    } else {
      console.log(`Char EXISTS: ${code}.mp3`);
    }
    return true;
  } catch(err) {
    console.error(err);
    return false;
  }
}
module.exports = { saveAudio, saveChar, charExists };
