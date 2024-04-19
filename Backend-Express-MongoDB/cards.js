import express from 'express';
import BuildingModel from './BuildingModel.js'; // Adjust the path to your BuildingModel.js file

const app = express();

app.get('/buildings', async (req, res) => {
  try {
    // Fetch buildings from the database using BuildingModel
    const buildings = await BuildingModel.find({});

    // Render the 'buildings' template with the retrieved buildings data
    res.render('buildings', { buildings });
  } catch (error) {
    console.error('Error retrieving buildings:', error);
    res.status(500).send('Error retrieving buildings');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});