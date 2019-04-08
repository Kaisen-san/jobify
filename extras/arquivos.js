// EXEMPLO - CALLBACK HELL
const fs = require('fs');

fs.readFile('temp.js', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('temp-callback-copy.js', data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.error('Arquivo copiado - Callback');
      }
    });
  }
});



// EXEMPLO - PROMISES
const {
  readFile,
  writeFile
} = require('./fs-promise');

readFile('temp.js')
  .then(data => writeFile('temp-promise-copy.js', data))
  .then(() => console.log('Arquivo copiado - Promise'))
  .catch(err => console.error(err));


// EXEMPLO - ASYNC/AWAIT
const copyFile = async () => {
  try {
    const data = await readFile('temp.js');
    await writeFile('temp-async-await-copy.js', data);
    console.log('Arquivo copiado - Async/Await');
  } catch (err) {
    console.error(err);
  }
}

copyFile()
  // .then(() => console.log('Fim do Async/Await'));



// EXERCICIO - RETORNAR APENAS OS SUB-DIRETÓRIOS DE UM DIRETÓRIO ESPECIFICADO
const readDir = (path) => new Promise((resolve, reject) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      reject(err);
    } else {
      resolve(files);
    }
  });
});

const isDirectory = (basePath, file) => new Promise((resolve, reject) => {
  fs.stat(basePath + '/' + file, (err, stats) => {
    if (err) {
      reject(err);
    } else {
      stats.isDirectory() ? resolve(file) : resolve();
    }
  });
});

const basePath = '/home/feandrade';

readDir(basePath)
  .then(files => {
    const directories = [];

    for (let file of files) {
      directories.push(isDirectory(basePath, file));
    }

    return Promise.all(directories);
  })
  .then(results => console.log(results.filter(e => e)));
