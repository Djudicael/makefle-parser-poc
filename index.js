import { readFile, writeFile } from 'fs/promises';
import pegjs from 'pegjs';
import parser from './makefile-parser.js';


const run = async () => {
    try {


        const makefileContent = await readFile('./hide/Makefile', 'utf-8');

        // console.log(makefileContent);

        const parsed = parser.parse(makefileContent);

        console.log(JSON.stringify(parsed, null, 2));


    } catch (error) {
        console.error('Error:', error);
    }
};

run();
