const { Kafka } = require('kafkajs')

exports.Kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['172.20.10.2:9092']

})