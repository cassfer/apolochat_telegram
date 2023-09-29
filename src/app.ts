const path = require('path');
const MTProto = require('@mtproto/core')

const mtproto = new MTProto({
    test: true,
    storageOptions: {
        path: path.resolve(__dirname, './src/data/user.json')
    }
})

mtproto.call('help.getNearestDc')
    .then((result: any) => {
    console.log('country: ', result.country)
    })
    .catch((error: any) => {
        console.log("error");
        console.log(error);
    })