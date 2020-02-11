/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCapsule = `query GetCapsule($capsule_serial: ID!) {
  getCapsule(capsule_serial: $capsule_serial) {
    capsule_serial
    capsule_id
    status
  }
}
`;
export const getFlight = `query GetFlight($flight_number: ID!) {
  getFlight(flight_number: $flight_number) {
    flight_number
    mission_name
  }
}
`;
export const getDragonDetails = `query GetDragonDetails($id: ID!) {
  getDragonDetails(id: $id) {
    id
    name
    type
  }
}
`;
