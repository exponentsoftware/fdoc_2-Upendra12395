function scoresGreaterThan85(){
    let filteredUsers = users.filter((e)=>{
        return e.scores > 85;
    })
    console.log(filteredUsers)
}

function addUser(user){
    let x = users.find(student =>student.name == user.name)
    if (x == undefined){
        users.push(user)
    }else{
        return console.log("user already exist")
    }
    console.log(users)
}

function addUserSkill(skill){
    let x = users.find(student =>student.name == skill.name)
    if (x == undefined){
        return console.log("user does not exist")
    }else{
        x.skills.push(skill.skills)
    }
    console.log(x)
}

function editUser(info){
    let x = users.find(student => student.name == info.name)
    if (x == undefined){
        return console.log("user does not exist")
    }else{
        if (info.age){
            x.age = info.age
        }else{
            x.scores = info.scores
        }
    }
    console.log(x)
}
const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
];

scoresGreaterThan85();
addUser({name:'Ravi', scores:85, skills:['HTML', 'CSS3', 'JS'], age:21});
addUserSkill({name:'Thomas', skills:'Python'});
editUser({ name:'Thomas', scores:80});
editUser({name:'Martha',age:20});