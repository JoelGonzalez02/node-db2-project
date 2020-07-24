
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vinNumber: '4T1BF1FK4EU484417', make: 'Chevy', model: 'Camaro Z28', mileage: 0, transmissionType: 'Automatic', titleStatus: 'New' },
        {vinNumber: '1FBSS31L69DA97244', make: 'Nissan', model: 'GTR', mileage: 0, transmissionType: 'Manual', titleStatus: 'New'},
        {vinNumber: 'WP0CB2A93ES129426', make: 'Tesla', model: 'Model S', mileage: 0, transmissionType: 'Automatic', titleStatus: 'New'}
      ]);
    });
};
