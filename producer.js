
// const { Kafka } = require('./client')
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


// async function init() {
//     const producer = Kafka.producer()
//     console.log('Connecting...')
//     await producer.connect()
//     console.log('producer ---Connected!')
//     rl.setPrompt(' > ')
//     rl.prompt()
//     rl.on('line', async (line) => {
//         const [riderName, lat, log, location] = line.split(' ')
//         console.log(`riderName, lat, log, location`, riderName, lat, log, location)
//         // location?.toLowerCase() === 'nashik' ? 0 : 1,
//         await producer.send({
//             topic: 'rider-updates',
//             messages: [
//                 {
//                     partition: location,
//                     key: 'locaion-update',
//                     value: JSON.stringify({ latitude: lat, longitude: log, name: riderName })
//                 },

//             ],
//         })
//         console.log('producer ---message sent!')
//     }).on('close', async () => {

//         console.log("producer disconneting")
//         await producer.disconnect()
//     })




// }


// init()



//this code with out promt
const { Kafka } = require('./client')


async function init() {
    const producer = Kafka.producer()
    console.log('Connecting...')
    await producer.connect()
    console.log('producer ---Connected!')

    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                partition: 0,
                key: 'locaion-update',
                value: JSON.stringify({ latitude: 34.23, longitude: 23.23, name: 'ranjeet' })
            },

            {
                partition: 12,
                key: 'locaion-update',
                value: JSON.stringify({ latitude: 34.290, longitude: 23.2398, name: 'bablu kumar' })
            },


        ],
    })
    console.log('producer ---message sent!')
    console.log("producer disconneting")
    await producer.disconnect()
}


init()