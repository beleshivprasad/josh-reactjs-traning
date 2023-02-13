/*
    Q.1 How will you create a new copy of the object below while updating the value of address.details[0] to "5"?
        {
            name:"Harry Potter",
            age: 12,
            address: {
                details: ["4", "Privet Drive"],
                area:"Little Whinging",
                city: "Surrey",
                state: "England"
            } 
        }
*/

const wizard = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

// we can create a shallow copy of this like
const shallowWizard = {
  ...wizard,
  address: {
    ...wizard.address,
    details: ["5", wizard.address.details[1]],
  },
};

console.log(shallowWizard);

// or we can create deep copy and update the respective field.
const deepWizard = structuredClone(wizard);
deepWizard.address.details[0] = "5";

console.log(deepWizard);

/*
    2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
        let obj = {
            a:"Apple",
            b:["Basketball","Baseball"],
            c: {
                call: "cellphone"
            },
            d: "Dog"
        }
        filterObject(obj) //This should return {a:"Apple", d:"Dog"}
*/

const fruits = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
  e: null,
};

function objectFilter([key, value]) {
  if (this.allowNull && value === null) return [key, value];
  if (!Array.isArray(value) && typeof value !== "object") return [key, value];
}

function filterObject(obj, allowNull) {
  this.allowNull = allowNull;
  return Object.fromEntries(Object.entries(obj).filter(objectFilter));
}

console.log(filterObject(fruits, false));
