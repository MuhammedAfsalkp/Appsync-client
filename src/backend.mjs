import * as gen from './src/generated'

(async () => {
    try {
        const { data } = await gen.publish('robots', JSON.stringify({"a":new Date()}))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})()