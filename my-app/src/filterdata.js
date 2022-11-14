import axios, { AxiosResponse } from 'axios';
// import { AssociateDetails } from '../models/associateDetails';

const getOptionDetails = async () =>
axios.get(`http://localhost:3002/swimlane-filter`).then((resp) =>
    resp.data
    );

// console.log('res----', getOptionDetails())

export default getOptionDetails;