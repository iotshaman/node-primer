function getAllAvengers() {
  return [
    {
      userId: 0,
      name: 'Tony Stark',
      email: 'tstakt@avengers.com',
      phone: '(555) 555-1111',
      active: true
    },
    {
      userId: 1,
      name: 'Bruce Banner',
      email: 'hulk@avengers.com',
      phone: '(555) 555-2222',
      active: true
    },
    {
      userId: 2,
      name: 'Steve Rodgers',
      email: 'srodgers@avengers.com',
      phone: '(555) 555-3333',
      active: true
    },
  ]
}

exports.GetAllAvengers = getAllAvengers;