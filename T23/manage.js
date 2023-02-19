// Define employees
const employees = [
    { name: 'John', type: 'salaried', salary: 5000, salesTarget: 100 },
    { name: 'Mary', type: 'salaried', salary: 4000, salesTarget: 80 },
    { name: 'David', type: 'hourly', hourlyRate: 25, hoursLogged: 160, salesTarget: 120 },
    { name: 'Sarah', type: 'hourly', hourlyRate: 20, hoursLogged: 180, salesTarget: 150 },
    { name: 'Tom', type: 'hybrid', salary: 3500, hourlyRate: 20, hoursLogged: 150, salesTarget: 90 },
    { name: 'Lisa', type: 'hybrid', salary: 3000, hourlyRate: 18, hoursLogged: 200, salesTarget: 110 }
  ];
  
  // Calculate payouts
  for (const employee of employees) {
    let payout = 0;
    switch (employee.type) {
      case 'salaried':
        payout = employee.salary;
        if (employee.salesTarget <= 0) {
          console.log(`${employee.name} (${employee.type}): $${payout} (No sales made)`);
        } else if (employee.salesTarget >= 1 && employee.salesTarget < 100) {
          console.log(`${employee.name} (${employee.type}): $${payout} (Sales target not met)`);
        } else {
          payout *= 1.1;
          console.log(`${employee.name} (${employee.type}): $${payout} (Salary increased by 10% for exceeding sales target)`);
        }
        break;
      case 'hourly':
        payout = employee.hourlyRate * employee.hoursLogged;
        if (employee.salesTarget <= 0) {
          console.log(`${employee.name} (${employee.type}): $${payout} (No sales made)`);
        } else if (employee.salesTarget >= 1 && employee.salesTarget < 120) {
          console.log(`${employee.name} (${employee.type}): $${payout} (Sales target not met)`);
        } else {
          payout *= 1.5;
          console.log(`${employee.name} (${employee.type}): $${payout} (Hourly rate increased by 50% for exceeding sales target)`);
        }
        break;
      case 'hybrid':
        payout = employee.salary + (employee.hourlyRate * employee.hoursLogged);
        if (employee.salesTarget <= 0) {
          console.log(`${employee.name} (${employee.type}): $${payout} (No sales made)`);
        } else if (employee.salesTarget >= 1 && employee.salesTarget < 90) {
          console.log(`${employee.name} (${employee.type}): $${payout} (Sales target not met)`);
        } else {
          payout += (employee.hourlyRate * employee.hoursLogged) * 0.2;
          console.log(`${employee.name} (${employee.type}): $${payout} (Hourly rate increased by 20% for exceeding sales target)`);
        }
        break;
      default:
        console.log(`${employee.name} (${employee.type}): Invalid employee type`);
    }
  }
  