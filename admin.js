const { Kafka } = require("./client")
async function init() {
    const admin = Kafka.admin()
    console.log('Connecting...')
    await admin.connect()
    console.log('Connected!')
    console.log('Creating topics...[rider-updates]')
    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2
        }]
    })
    console.log(' topics create successfully...[rider-updates]')
    console.log("admin disconneting")
    await admin.disconnect()
}


init()