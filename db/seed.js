const User = require('../models/User');
const { Image } = require('../models/Image');
const bcrypt = require('bcrypt')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); // ???

User.find({}).remove(() => {
  Image.find({}).remove(() => {
    User.create({
      username: 'generalAssembly',
      password: createPassword('password1234'),
      email: 'test@test.com'
    })
      .then(user => {
        [
          Image.create({
            image: 'https://source.unsplash.com/XWW746i6WoM',
            description: 'Washington, D.C',
            author: user._id
          }) // end image.create(18)
            .then(image => {
              user.images.push(image);
            }), // end image(21)
          Image.create({
            image: 'https://source.unsplash.com/kK50btqF73k',
            description: 'Seattle, Washington state',
            author: user._id
          }) // end image.create(24)
            .then(image => {
              user.images.push(image);
            }) // end image(29)
        ]
      //})
        .then(() => {
            user.save(err => console.err(err));
          }); // end save(34)

      }); // end user then(14)

  }) // then user
});
