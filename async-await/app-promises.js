const users = [
  {
    id: 1,
    name: "Manish",
    schoolId: 101
  },
  {
    id: 2,
    name: "John",
    schoolId: 100
  }
];

const grades = [
  { id: 1, schoolId: 101, grade: 86 },
  { id: 2, schoolId: 100, grade: 100 },
  { id: 3, schoolId: 101, grade: 80 }
];

const getUser = id => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => {
      return user.id === id;
    });
    if (user) {
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}.`);
    }
  });
};

const getGrade = schoolId => {
  return new Promise((resolve, reject) => {
    const schools = grades.filter(school => {
      return school.schoolId === schoolId;
    });
    if (schools) {
      resolve(schools);
    } else {
      reject(`Unable to find user with id of ${schoolId}.`);
    }
  });
};

const getStatus = userId => {
  let user;
  return getUser(userId)
    .then(tempUser => {
      user = tempUser;
      return getGrade(user.schoolId);
    })
    .then(grades => {
      let average = 0;
      if (grades.length > 0) {
        average =
          grades.map(grade => grade.grade).reduce((a, b) => a + b) /
          grades.length;
      }
      return `${user.name} has a ${average} % in the class.`;
    });
};

// calling service
getUser(2)
  .then(user => {
    console.log(user);
  })
  .catch(e => {
    console.log(e);
  });

getGrade(101)
  .then(school => {
    console.log(school);
  })
  .catch(e => {
    console.log(e);
  });

getStatus(2)
  .then(status => {
    console.log(status);
  })
  .catch(e => {
    console.log(e);
  });
