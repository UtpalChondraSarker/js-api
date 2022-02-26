const user={id:11, name:'sushanto',job:'actor'}
//console.log(user);
const stringifyed=JSON.stringify(user);
//console.log(stringifyed);

const shop={
    name:'utpal store',
    address:'mirpur 10',
    profit:15000,
    products:['leptop','phone','chager'],
    owner:{
        name:'aliya bat',
        profession:'actor',
    },
    isExpensive:false,
}
//console.log(shop);
const shopStringify=JSON.stringify(shop);
console.log(shopStringify);
const converted=JSON.parse(shopStringify);
console.log(converted.owner);
