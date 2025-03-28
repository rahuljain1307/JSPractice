var employee1 = { name: 'Rahul', lastName: 'Jain' };
var employee2 = { name: 'Aman', lastName: 'Singh' };
var employee3 = { name: 'Amit', lastName: 'Singh' };

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.name + ' ' + this.lastName + ' ' + greeting2)
}

invite.call(employee1, "Hello", "How are you?");
invite.apply(employee2, ["Hello", "How are you?"]);
var inviteEmployee3 = invite.bind(employee3);
inviteEmployee3("Hello", "How are you?");