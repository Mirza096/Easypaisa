
// Import the necessary modules (you can add more as needed)
import * as enquirer from 'enquirer';

// Define a function to display the main menu
async function displayMainMenu() {
    try {
        const response = await enquirer.prompt({
            type: 'select',
            name: 'task',
            message: 'Choose a task:',
            choices: [
                'Money Transfer',
                'Bill Payments',
                'Easy Load Bundles',
                'Cash Back',
                'Tickets',
                'Send Money',
                'Mobile Packages',
                'Savings',
                'Exit'
            ],
        });

        // Handle different tasks based on user selection
        const task = response.task?.toLowerCase() ?? ''; // Convert to lowercase for case-insensitive comparison

        switch (task) {
            case 'money transfer':
                // Implement money transfer logic
                console.log('Performing money transfer...');
                // Your code for money transfer goes here
                break;
            case 'bill payments':
                // Implement bill payments logic
                console.log('Paying bills...');
                // Your code for bill payments goes here
                break;
            case 'easy load bundles':
                // Implement easy load bundles logic
                console.log('Loading bundles...');
                // Your code for easy load bundles goes here
                break;
            case 'cash back':
                // Implement cash back logic
                console.log('Getting cash back...');
                // Your code for cash back goes here
                break;
            case 'tickets':
                // Implement ticket booking logic
                console.log('Booking tickets...');
                // Your code for ticket booking goes here
                break;
            case 'send money':
                // Implement send money logic
                console.log('Sending money...');
                // Your code for sending money goes here
                break;
            case 'mobile packages':
                // Implement mobile packages logic
                console.log('Managing mobile packages...');
                // Your code for mobile packages goes here
                break;
            case 'savings':
                // Implement savings logic
                console.log('Managing savings...');
                // Your code for savings goes here
                break;
            case 'exit':
                console.log('Exiting the application');
                break;
            default:
                console.log('Invalid task selected');
                break;
        }
    } catch (e) {
        console.log(`An error occurred: ${e}`);
    }
}

// Call the function to display the main menu
displayMainMenu();
