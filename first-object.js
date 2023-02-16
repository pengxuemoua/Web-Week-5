let user = {username: 'Pengxue', password: 'chicken'}

user.email = 'mouapengxue@gmail.com'

console.log(user)

let dreamJob = {
    name: 'Pengxue Moua',
    email: 'mouapengxue@gmail.com',
    password: 'chickens',
    contact: {
        phone: '763-581-9700',
        building : 'T710'
    },
    roles: ['developer', 'data programmer']
}

console.log(dreamJob)

dreamJob.salary = 80000

dreamJob.roles.push('server admin')

dreamJob.contact.location = 'Minneapolis'
console.log(dreamJob)
