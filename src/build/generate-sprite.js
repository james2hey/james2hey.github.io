const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const path = require('path');

const iconsFolderPath = 'src/assets/icons/';
const spritePath = iconsFolderPath + 'sprite.svg';

const getAllFiles = dir =>
    fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
    }, []);

const generateSprite = () => {
    const config = {
        dest: 'src/assets/icons',
        shape: {
            id: {
                generator: (name, file) => file.basename.split('.')[0]
            }
        },
        svg: {
            namespaceClassnames: false
        },
        mode: {
            symbol: {
                inline: true
            }
        }
    };

    // Docs - https://npm.io/package/svg-sprite
    const spriter = new SVGSpriter(config);

    const addFileToSpriter = path => spriter.add(path, null, fs.readFileSync(path, 'utf-8'));
    // Skip the previously generated sprite, otherwise it gets fed back in as an icon.
    getAllFiles(iconsFolderPath)
        .filter(file => file !== path.normalize(spritePath))
        .forEach(addFileToSpriter);

    spriter.compile((error, result) => {
        if (error) throw Error('Failed to generate sprite', error);

        for (const mode in result) {
            for (const resource in result[mode]) {
                fs.writeFileSync(spritePath, result[mode][resource].contents);
            }
        }
        console.log('Sprite generated');
    });
};
console.log('Building SVG sprite');
generateSprite();
