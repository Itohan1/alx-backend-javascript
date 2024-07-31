interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Moses',
  lastName: 'Esumei',
  age: 150,
  location: 'Maryland',
};

const student2: Student = {
  firstName: 'Blizzy',
  lastName: 'Bighead',
  age: 200,
  location: 'Ikeja',
}

const studentsList: Student[] =[student1, student2];
function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');

  const headers = ['Firstname', 'Location'];
  headers.forEach(headText => {
    const header = document.createElement('th');
    header.textContent = headText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  students.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
