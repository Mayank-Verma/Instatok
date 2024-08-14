import app from './index.js';
import db from './models/db.js';

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// app.listen(PORT, (err) => {
//   if (err) console.log(err);
//   else console.log(`Server is running smoothly on port ${PORT}`);
// });
