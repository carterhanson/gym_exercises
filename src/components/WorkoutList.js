import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';

const WorkoutList = () => {
  // State to store the list of exercises
  const [exercises, setExercises] = useState([]);

  // State to store the current input values
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  // Function to add a new exercise to the list
  const addExercise = (e) => {
    e.preventDefault();
    const newExercise = {
      exerciseName: exerciseName,
      sets: sets,
      reps: reps,
      weight: weight,
    };
    setExercises([...exercises, newExercise]);
    setExerciseName('');
    setSets('');
    setReps('');
    setWeight('');
  };

  // Function to remove an exercise from the list
  const removeExercise = (index) => {
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    setExercises(newExercises);
  };

  // Render the list of exercises
  const exerciseList = exercises.map((exercise, index) => (
    <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
      <Typography>{exercise.exerciseName}</Typography>
      <Typography> {exercise.sets} Sets, {exercise.reps} Reps, {exercise.weight} lbs</Typography>
      <Button variant="contained" onClick={() => removeExercise(index)}>Remove</Button>
    </Stack>
  ));

  return (
    <Box id="workouts">
        <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Workout List</Typography>

            <form onSubmit={addExercise} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Exercise Name" variant="outlined" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
                <Stack direction="row" gap={2}>
                <TextField label="Sets" variant="outlined" type="number" value={sets} onChange={(e) => setSets(e.target.value)} />
                <TextField label="Reps" variant="outlined" type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
                <TextField label="Weight (lbs)" variant="outlined" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </Stack>
                <Button variant="contained" type="submit">Add Exercise</Button>
            </form>
            {exerciseList}
        </Stack> 
    </Box>
    
  );
};

export default WorkoutList;