const fs = require("fs");

const writeStream = fs.createWriteStream('write.txt');

writeStream.write('Ini adalah baris pertama \n');
writeStream.write('Ini adalah baris kedua \n');
writeStream.end('Ini Baris Terakhir!');


const readableStream = fs.createReadStream('./write.txt',{
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`)
    }
    catch(e){
        
    }
})

readableStream.on('end', () => {
    console.log('done')
})