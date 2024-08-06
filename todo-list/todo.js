let input = prompt('What action do you want to execute for your To Do List?');
const todos = ['Workout', 'Walk Dogs'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********');
    } else if (input === 'new') {
        const newTodo = prompt('Okay, what is the todo you would like to add?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Cool. Deleted ${deleted[0]}`);
        }
    }
    input = prompt('What action do you want to execute for your To Do List?');
}
console.log('Application stopped.');