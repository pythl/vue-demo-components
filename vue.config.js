const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                // data: `@import "@/style/scssFile.scss";`
            }
        }
    }

})
