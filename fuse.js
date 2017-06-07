const {
    FuseBox,
    Sparky,
    HTMLPlugin,
    WebIndexPlugin,
    ImageBase64Plugin,
    CopyPlugin
} = require('fuse-box');

const fuseBox = FuseBox.init({
    homeDir: './src/',
    output: './dist/$name.js',
    sourceMaps: true,
    plugins: [
        ImageBase64Plugin(),
        // HTMLPlugin({useDefault:false}),
        // WebIndexPlugin({template: './src/index.html'})
    ]
});

fuseBox.bundle("js/background.js").watch().instructions(">chrome/background/index.ts");
fuseBox.bundle("js/content_script.js").watch().instructions(">chrome/content/index.ts");

Sparky.task('copy', () => {
    return Sparky.watch('./src/mainfest.json').dest('./dist/$name');
});

Sparky.start('copy');
fuseBox.run();