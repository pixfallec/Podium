import fieldPoints from './FieldPoints.json';

function getPoints(nomination) {
  return fieldPoints[nomination];
}

export default getPoints;
