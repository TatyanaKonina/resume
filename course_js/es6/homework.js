const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


const employersNames = (employers.filter( (name) => {
    return name.length > 0 && name.length != ''
})).map(name => {return name.toLowerCase().replace(/\s/g, '')})
// console.log(employersNames)

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0,[...everyCash]) {
    return everyCash.reduce( (sum,current) => {return sum + current},own)
}

const money = calcCash(null, sponsors.cash);

function makeBusiness([owner = 'Sam', director = 'Victor', money,employersNames]) {
    console.log(employersNames)
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor']
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${money}. And our employers: ${employersNames}`)

    console.log('And we have a sponsors: ');
    console.log(`${sumSponsors}`);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness(['Sam', null, money, employersNames]);