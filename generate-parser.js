import { readFile, writeFile } from 'fs/promises';
import pegjs from 'pegjs';


const run = async () => {
    try {
        const grammar = await readFile('./makefile.pegjs', 'utf-8');

        // generate the parser as "bare" - Not UMD, AMD etc.
        const parser = pegjs.generate(grammar, { output: 'source' });

        // const makefileContent = await readFile('./hide/Makefile', 'utf-8');
        // build an output string that contains the import statements that the parser needs
        // within the output string, define the parser as a variable and export it (so we have a parser module)
        const output = `

const parser = ${parser};

export default parser`;

        await writeFile('./makefile-parser.js', output, 'utf-8');


    } catch (error) {
        console.error('Error:', error);
    }
};

run();
