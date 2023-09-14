import React, { Component } from 'react';
import { Container, Typography, TextField, Button, List, ListItem } from '@mui/material';
import './AddVenue.css';

class AddVenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venueName: '',
      equipmentInventory: '',
      duration: '',
      venues: [], // An array to store the added venues
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { venueName, equipmentInventory, duration } = this.state;

    // Create a new venue object
    const newVenue = {
      venueName,
      equipmentInventory,
      duration,
    };

    // Add the new venue to the list of venues
    this.setState((prevState) => ({
      venues: [...prevState.venues, newVenue],
      venueName: '', // Clear the form fields
      equipmentInventory: '',
      duration: '',
    }));
  }

  render() {
    const { venueName, equipmentInventory, duration, venues } = this.state;

    return (
      <Container maxWidth="sm" className="container">
        <Typography variant="h4">ADMIN DASHBOARD</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
             label="Venue Name"
             name="venueName"
             value={venueName}
             onChange={this.handleInputChange}
             required
             fullWidth
          />
          <TextField
            label="Equipment Inventory"
            name="equipmentInventory"
            value={equipmentInventory}
            onChange={this.handleInputChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Duration"
            name="duration"
            value={duration}
            onChange={this.handleInputChange}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add Venue
          </Button>
        </form>
  
        <Typography variant="h6" className="added-venues-header">Added Venues</Typography>
        <List className="added-venues">
          {venues.map((venue, index) => (
            <ListItem key={index} className={`added-venue-item ${venue.approved ? 'approved' : ''}`}>
              <strong>Venue Name:</strong> {venue.venueName}<br />
              <strong>Equipment Inventory:</strong> {venue.equipmentInventory}<br />
              <strong>Duration:</strong> {venue.duration}
            </ListItem>
          ))}
        </List>
      </Container>
    );
          }
  
  }


export default AddVenue;
