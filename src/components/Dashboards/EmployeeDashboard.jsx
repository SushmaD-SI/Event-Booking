import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const EmployeeDashboard = ({ venues, equipment }) => {
  const [selectedVenue, setSelectedVenue] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [duration, setDuration] = useState('');
  const [practiceSessions, setPracticeSessions] = useState([]);

  const handleVenueChange = (event) => {
    setSelectedVenue(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate duration to ensure it's a positive number
    if (parseFloat(duration) <= 0) {
      alert('Duration must be a positive number.');
      return;
    }

    const newSession = {
      venue: selectedVenue,
      equipment: selectedEquipment,
      duration: duration,
    };

    setPracticeSessions([...practiceSessions, newSession]);

    // Clear form fields
    setSelectedVenue('');
    setSelectedEquipment('');
    setDuration('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #f0f0f0, #d3d3d3)',
      }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={10} sx={{ padding: 3 }}>
          <Grid container justifyContent="center">
            <Grid item>
              {/* <Avatar sx={{ backgroundColor: 'purple' }}>
                <LockOutlinedIcon />
              </Avatar> */}
            </Grid>
            <Grid item>
              <h2>Employee Dashboard</h2>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth variant="outlined" margin="normal" required>
              <InputLabel>Select a Venue</InputLabel>
              <Select
                value={selectedVenue}
                onChange={handleVenueChange}
                label="Select a Venue"
              >
                <MenuItem value="">Select a venue</MenuItem>
                {venues?.map((venue) => (
                  <MenuItem key={venue.id} value={venue.id}>
                    {venue.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal" required>
              <InputLabel>Select Equipment</InputLabel>
              <Select
                value={selectedEquipment}
                onChange={handleEquipmentChange}
                label="Select Equipment"
              >
                <MenuItem value="">Select equipment</MenuItem>
                {equipment?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Duration (in hours)"
              type="number"
              min="1"
              step="1"
              value={duration}
              onChange={handleDurationChange}
              variant="outlined"
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Session
            </Button>
          </form>
          <div>
            <h2>Added Practice Sessions</h2>
            <ul>
              {practiceSessions.map((session, index) => (
                <li key={index}>
                  <strong>Venue:</strong> {session.venue},{' '}
                  <strong>Equipment:</strong> {session.equipment},{' '}
                  <strong>Duration:</strong> {session.duration} hours
                </li>
              ))}
            </ul>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default EmployeeDashboard;
