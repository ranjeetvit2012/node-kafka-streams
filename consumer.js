const { Kafka } = require('./client')
const groupId = process.argv[2]



async function init() {
    const consumer = Kafka.consumer({ groupId: groupId })
    console.log('Connecting...')
    await consumer.connect()
    console.log('consumer ---Connected!')

    await consumer.subscribe({ topics: ['rider-updates'], fromBeginning: true })
    //console.log('Subscribed!', consumer)

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`${groupId} ${topic} ${partition} `)
            console.log({
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    })



}

init()