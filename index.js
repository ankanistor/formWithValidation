const fakeDB = {
    firstName: '',
    lastName: '',
    nationality: '',
    age: '',
    sex: {
        fem:false,
        masc:false,
        neutru:false,
    },
    status:'',
    description: '',
    startdate: '',
    enddate: '',
}

// const errors = {
//     firstName: true,
//     lastName: true,
//     age: true,
//     holliday: true,
// }

const firstNameHandler = (event) => {
    fakeDB.firstName = event.target.value;
    if (fakeDB.firstName.length >= 3) {
        // errors.firstName = false;
        document.getElementById('firstName').style.color = 'inherit'
    } else {
        document.getElementById('firstName').style.color = 'red'
    }
};

const lastNameHandler = (event) => {
    fakeDB.lastName = event.target.value
};

const nationalityHandler = (event) => {
    fakeDB.nationality = event.target.value
};

const ageHandler = (event) => {
    fakeDB.age = event.target.value
};

const radioHandler = (event) => {
    fakeDB.status = event.target.value
}

const textareaHandler = (event) => {
    fakeDB.description = event.target.value
}

const startdateHandler = (event) => {
    fakeDB.startdate = event.target.value
}

const enddateHandler = (event) => {
    fakeDB.enddate = event.target.value
    
}

const clickHandler = (event) => {
    event.preventDefault();

    clonedFakeDB = {
        ...fakeDB,
        sex: {
            fem: document.getElementById('fem').checked,
            masc: document.getElementById('masc').checked,
            neutru: document.getElementById('neutru').checked,
        },
    }
    console.log('result...', clonedFakeDB)
    // console.log("errors: ", errors)
}






