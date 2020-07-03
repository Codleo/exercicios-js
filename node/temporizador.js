const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 3 * * 5',function(){
    // a cada /5segundos *das 3 horas * * da sexta feira(5)
    console.log('Executando Tarefa 1!',new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)//20 segundos

//setImmediate = como se eu estivesse fazendo um setTimeout mas com o valor "20000" zerado
//setInterval = a cada tempos e tempos que eu quero que essa função seja ativada

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek =[new schedule.Range(1,5)]
regra.hour = 3
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando Tarefa 2!',new Date().getSeconds())
})